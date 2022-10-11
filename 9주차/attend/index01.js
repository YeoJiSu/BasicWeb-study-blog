const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! 202055565 여지수'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))