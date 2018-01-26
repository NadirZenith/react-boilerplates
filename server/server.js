import Express from 'express'
import path from 'path'


const app = express()

app.get('/', function(req, res) {
  res.json({msg: 'hello it works'})
    // res.sendFile(path.join(__dirname + '/index.html'));
});
