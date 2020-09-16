let express = require('express')
let http = require('http')
let app = express()
let bodyParser = require('body-parser')
var path = require('path');
const cors = require('cors')
// var cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

let v1ApiRouter = require('./api/index')

const insecurePort = '5000'

app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

let server = http.createServer(app)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(expressValidator());
// app.use(methodOverride());

app.use('/api',v1ApiRouter)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


server.listen(insecurePort,function(){
    console.log('Listenting on http://localhost:'+insecurePort)
});

var corsOptions = {
    origin: 'http://localhost:5000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
  app.use(cors(corsOptions))

module.exports = app