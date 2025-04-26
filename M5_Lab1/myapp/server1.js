const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
res.send('Hello Server 1!')
})

app.listen(port, () => {
console.log(`Server 1 running on http://localhost:${port}`)
})