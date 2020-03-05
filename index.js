const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.listen(
  port,
  () => console.log(`Listening on: ${port}`)
)

app.get(
  '/',
  (request, response) => {
    console.log('Path:', request.path)
    const page = `
      <html>
        <head>
          <title>KUTU</title>
          <meta name="description" content="Joke app" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width: device-width, initial-scale=1.0" />
        </head>
        <body>
          <h1>What’s the best thing about Switzerland?</h1>
          <p>I don't know but the flag is a big plus.</p>
        </body>
      </html>
    `
    response.send(page)
  }
)