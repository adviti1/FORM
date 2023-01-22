const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9999;


const app = express();


app.use(express.json());

app.use(bodyParser.json());

app.use(express.urlencoded());

app.use(express.static('public'));


/*

Test 234

*/




app.get('/form', (req, res) => {

    res.sendFile(_dirname + '/public/index.html');

})

app.post('/formPost', (req, res) => {
    console.log(req.body);

})




app.listen(9999, () => {
    console.log('server started at http://localhost:${port}')
})