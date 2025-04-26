const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
res.send('Hello Server 3!')
})

app.listen(port, () => {
console.log(`Server 3 running on http://localhost:${port}`)
})