require('dotenv').config()
const express = require('express')

const app = express()

const port = 4141

// Request in Javascript :
app.get('/', (req, res) => {
    res.send('Hello world!')

})

app.get('/twitter', (req, res) => {
    res.send('Adik0.dev')

})

app.get('/login', (req , res)=>{
    res.send('<h1>Please login at Adik0.dev</h1>')
})




app.get('/youtube', (req,res)=>{
    res.send("<h2>NextGen Dev</h2>")
})


app.listen(process.env.PORT, () => {
    console.log(`Example app is listenning on port ${port}`)
})