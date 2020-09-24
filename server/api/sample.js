const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('HALLO I AM GET METHOD')
})