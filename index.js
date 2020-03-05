const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.listen(
  port,
  () => console.log(`Listening on: ${port}`)
)

const document = `
  <html>
    <head>
      <title>KUTU</title>
      <meta name="description" content="Joke app" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width: device-width, initial-scale=1.0" />
    </head>
  </html>
`