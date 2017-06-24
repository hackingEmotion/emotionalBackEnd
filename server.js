
const express = require ('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyparser())
app.use(cors())
app.get('/', function(req,res){
    console.log("got request")
    console.log(req.body)
    res.send("hello world!")
})

app.post('/', function(req,res){
    console.log('got request')
    console.log(req.body)
    res.send("hello world!")
})


app.listen(3030, function(){
    console.log("app listening on 3030")
})