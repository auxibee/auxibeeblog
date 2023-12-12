const express = require('express')

const app = express()

app.get('/', async (req, res) => {
    res.json({ message: 'hello world...' })
})


app.listen(8080, () => console.log('server started listening'))