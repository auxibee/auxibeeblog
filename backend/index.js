const express = require('express')

const app = express()

app.get('/', async (req, res) => {
    res.json({ message: 'Website is under construction.....' })
})

app.get('/users', async (req, res) => {
    res.json({ username: 'yaw twumasi acheampong', email: 'auxibee@gmail.com' })
})


app.listen(8080, "0.0.0.0", () => console.log('server started listening'))