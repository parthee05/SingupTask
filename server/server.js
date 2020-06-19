let express = require('express')
let https = require('http')
let app = express()
let bodyParser = require('body-parser')

let v1ApiRouter = require('./api/index')

const insecurePort = '5000'

let server = https.createServer(app)

app.use('/api/v1',v1ApiRouter)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


server.listen(insecurePort,function(){
    console.log('Listenting on http://localhost:'+insecurePort)
});

module.exports = app