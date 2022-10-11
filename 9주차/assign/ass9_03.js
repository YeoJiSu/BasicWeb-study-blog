const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/webapi', function(req, res){
    var request = require('request');
    var options = {
    'method': 'GET',
    'url': 'https://openapi.naver.com/v1/search/webkr.json?query=BIFF',
    'headers': {
        'X-Naver-Client-Id': '발급 받은 아이디',
        'X-Naver-Client-Secret': '발급 받은 비밀번호'
    }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
    });
})

app.get('/Path1', function (req, res) {
        res.send("GET Path1");
    })
app.get('/Path2', function(req,res) {
        res.send("GET Path2 : " + Date());
    })
app.put('/Path1', function (req, res) {
        res.send("PUT Path1");
    })


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))