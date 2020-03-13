const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.listen(
  port,
  () => console.log(`Listening on: ${port}`)
)

// joke object
const jokes = {
  piglet: 'agressive piglet',
  word: 'with words',
  IT: 'geek humor',
  other: 'cannot be categorized',
  adult: 'age controlled category'
}

app.get(
  '/',
  (request, response) => {
    // add the jokes properties as category buttons
    const createCategoryButtons = () => {
      // save every radio button
      const literalsArray = []
      // iterate over jokes props
      for (props in jokes) {
        let literal = `
          <input class="categories" type="radio" id="${props}" name="category" value="${props}" checked />
          <label for="${props}">
            ${props}
          </label>
          <br>
        `
        literalsArray.push(literal)
      }

      // we do not need the commas!!!
      // try without .join(''git)
      return literalsArray.join('')
    }
    
    // <link defer rel="stylesheet" type="text/css" href="http://localhost:3000/styles/style.css" />
    const page = `
      <html>
        <head>
          <title>KUTU</title>
          <meta name="description" content="Joke app" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              padding-left: 25%;
              padding-right: 25%;
              padding-top: 32px;
              text-align: center;
              line-height: 200%;
              background-color: rgb(236, 237, 237);
            }
            
            form {
              display: inline-block;
              text-align: start;
            }

            .categories {
              display: inline-block;
              text-align: center;
              margin-left: 25%;
            }

            input[name=age] {
              display: inline-block;
              text-align: center;
              margin-left: 25%;
            }

            input[type=submit] {
              display: inline-block;
              padding: 20px;
              width: 200px;
              margin: auto;
              border: 4px solid black;
              border-radius: 10px;
              font-size: 1.5rem;
              background-color: #dddddd;
            }

            input[type=submit]:hover {
              background-color: #bebebe;
            }

            h1 {
              text-align: center;
              margin: auto;
              font-family: cursive;
              font-size: 2rem;
              line-height: 3rem;
            }
            
            p {
              text-align: center;
              font-weight: bold;
            }

            img {
              width: 75%;
              height: auto;
              animation: marquee 2s linear infinite;
            }

            @keyframes marquee {
              0% { transform: translateX(-5%); }
              50% { transform: translateX(5%); }
              100% { transform: translateX(-5%); }
            }

          </style>
        </head>
        <body>
          <h1>Choose a category with the radio buttons</h1>
          
          <div id="marquee">
            <img src="https://relationshipthings.com.au/wp-content/uploads/2015/05/Choose.gif" alt="'You choose' sign between arrows" />
          </div>
         
          <form action="/jokes" method="get">
            <p>Please select your age:</p>
              <input type="radio" id="adult" name="age" value="adult" />
              <label for="adult">Adult</label>
              <br>
              <input type="radio" id="children" name="age" value="children" checked />
              <label for="children">Under 18</label>
            <p>Please select a category:</p>
            ${createCategoryButtons()}
            <br>
            <input type="submit" value="Submit">
          </form>
        </body>
      </html>
    `
    response.send(page)
  }
)

app.get(
  '/jokes',
  (request, response) => {
    const { age, category } = request.query
    const joke = age === 'children' ?
      'Sorry, you cannot see the adult category. Choose another category or tick age as adult!' :
      jokes[category]

    const page = `
      <html>
        <head>
          <title>KUTU</title>
          <meta name="description" content="Joke app" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              padding-left: 25%;
              padding-right: 25%;
              padding-top: 32px;
              text-align: center;
              line-height: 200%;
              background-color: rgb(236, 237, 237);
            }

            h1 {
              font-family: cursive;
              font-size: 2rem;
              line-height: 3rem;
            }
          </style>
        </head>
        <body>
          <h1>${category.charAt(0).toUpperCase() + category.slice(1)}</h1>
          <p>${joke}</p>
        </body>
      </html>
    `
    response.send(page)
  }
)




