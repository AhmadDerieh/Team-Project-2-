var nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
let code1;
code1 = Math.floor(Math.random() * 100000) + 10000;
const express = require('express');
const { response } = require('express');
const { redirect } = require('express/lib/response');

const app = express();

app.use(express.static(__dirname + '/view'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/email.html')
})

app.post('/cheakcode', (req, res) => {
    let usercode = req.body.code
    if (code1 == usercode) {
        res.redirect('/new_pass.html')
    } else {
        console.log("error")
    }

})

app.post('/sendemail', (req, res) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mosaab.cp@gmail.com',
            pass: 'Mosaab_cb0595'
        }
    });
    let email;
    email = req.body.email;
    console.log(email);
    var mailOptions = {
        from: 'mosaab.cp@gmail.com',
        to: email,
        subject: 'Forgotpassword',
        text: 'your code is :  ' + code1
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/codecheack.html')
        }
    });

});
app.listen(3050, () => {
    console.log("App is listening on port 3050")

})