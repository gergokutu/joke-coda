const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.listen(
  port,
  () => console.log(`Listening on: ${port}`)
)

app.get(
  '/old',
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

app.get(
  '/jokes/:id',
  (request, response) => {
    console.log('Path:', request.path)
    console.log('Param:', request.params.id)
    const param = request.params.id
    const page = `
      <html>
        <head>
          <title>KUTU</title>
          <meta name="description" content="Joke app" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <h1>${request.params.id}</h1>
          <p>${jokes[param]}</p>
        </body>
      </html>
    `
    response.send(page)
  }
)

// joke object
const jokes = {
  piglet: 'agressive piglet',
  word: 'with words',
  IT: 'geek humor',
  other: 'cannot be categorized',
  adult: 'age controlled category'
}

// iterate over jokes props
for (props in jokes) {
  console.log(props)
}
