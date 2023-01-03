const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000


  const fbAdd = require('./firbase.js')


//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
  layoutsDir: __dirname + '/views/layouts',
}));

const GameObj = [
  {
    gameID: 17283,
    player1ID: 123,
    player2ID: 234,
    player1W: true,
    player2W: false
  }
]


app.use(express.static('public'))

app.get('/', async (req, res) => {

  res.send('Login screen');


})

app.get('/ranking', (req, res) => {
    fbAdd.addData()
    res.send('Rank screen');
  
  
  })

app.get('/history', (req, res) => {
    res.send('User history screens');
  
  
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})