const express = require('express')
var cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/stream', (req, res) => res.download('./Hunter_x_Hunter_-_Ginpatsu_no_Shounen_Killuas_theme.mp3'))
app.get('/img', (req, res) => res.download('./Texture.png'))
app.get('/name', (req, res) => res.send('Client 1'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// /Users/starkblaze01/Downloads/ngrok http 3000
