const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken')


const app = express();

const saltRounds = 10;
const PORT = 3001;



const db = mysql.createPool({
    host: "us-cdbr-east-03.cleardb.com",
    user: "b8a7267ed8c5f5",
    password: "e346b121",
    database: "heroku_e8cc424983df2cf",
});

// mysql://b8a7267ed8c5f5:e346b121@us-cdbr-east-03.cleardb.com/heroku_e8cc424983df2cf?reconnect=true
app.use(express.json());
app.use(cors({
    origin: ["https://comp426-marshallbettler.herokuapp.com", "http://localhost:3001", "https://zealous-meitner-dddf8d.netlify.app" ],
    methods: ["GET", "POST"],
    credentials: true,
    
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "userID",
    secret: "unc",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24,
    },
}));

app.post("/api/insert", (req, res)=> {

    const username = req.body.username
    const password = req.body.password
    const sqlInsert = "INSERT INTO `username-password` (`username`, `password`) VALUES (?, ?);"

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if(err) {
            console.log(err);
        }

        db.query(sqlInsert, [username, hash], (err, result) => {
        
            if(err) {
                res.send({message: "Username is already in use! Please choose a new one"})
            } else {
                res.send(result)
            } 
        });
    });
    
    
});

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]
    
    if(!token) {
        res.send("Yo, we need a token, please give")
    } else {
        jwt.verify(token, "kmp", (err, decoded) => {
            if(err) {
                res.json({auth: false, message: "Failed to auth"})
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
}


app.get('/profile', verifyJWT, (req, res) => {
    res.send("Yo, you good")
})


app.get("/login", (req, res) => {
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false })
    }
});


app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const sqlInsert = "SELECT * FROM `username-password` WHERE username = ?;"
    
    db.query(sqlInsert, username, (err, result) => {
        if(err) {
            res.send({err: err});
        }  
        if(result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if(response) {
                        const id = result[0].id
                        const token = jwt.sign({id}, "kmp", {
                            expiresIn: 300,
                        })
                        req.session.user = result;


                        res.json({auth: true, token: token, result: result})
                    } else {
                        res.send({auth: false, message: "Wrong username/password combination!"});
                    }
                })

            } else {
                res.send({auth: false, message: "No User exists"});
            }
    });
});







app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
});