const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.download('./Golden_Time_OP1.mp3'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// /Users/starkblaze01/Downloads/ngrok http 3000