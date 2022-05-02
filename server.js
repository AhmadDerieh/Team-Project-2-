const express = require('express')


const app = express()
app.use(express.json({limit: '1mb'}))

app.listen(3000, () => {
    console.log('Server started!')
})

users = []

app.get('/', (req, res)=>{
  res.sendFile( __dirname +'/nn.html');
})

app.post('/add', (req, res)=>{


    console.log(req.body)
    users.push({
        firstName:firstName, 
        lastName:lastName, 
        password:password 
    })        
    res.status(200).json("done")

})
