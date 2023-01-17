const express = require('express')
//const handlebars = require('express-handlebars')
const app = express()
const port = 3001
var { initializeApp } = require ('firebase/app');
var {  getFirestore, query, collection, addDoc, getDoc, doc } = require ('firebase/firestore');
// Import the functions you need from the SDKs you need
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsJwdxi6aGSMQRhpCICnYZTKf5PFB8t18",
    authDomain: "bgtracker-8c842.firebaseapp.com",
    projectId: "bgtracker-8c842",
    storageBucket: "bgtracker-8c842.appspot.com",
    messagingSenderId: "882953037884",
    appId: "1:882953037884:web:1f5484ed7840018934bb39",
    measurementId: "G-2QW4F8ZD3H"
  };
  
  // Initialize Firebase
  const fbApp = initializeApp(firebaseConfig);
  
  const db = getFirestore(fbApp);


//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');
//Sets handlebars configurations (we will go through them later on)

const GameObj = [
  {
    gameID: 17283,
    player1ID: 123,
    player2ID: 234,
    playerW: 1,
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

app.get('/history', async (req, res) => {
  res.send('User history screens');
  const docRef = doc(db, "users", "testuser");
  const docSnap = await getDoc(docRef);
  const userData = docSnap.data

 /* const myArray = [];
  firestore().collection('game').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      var game =
      {
        gameID: doc.data().gameID, 
        player1ID: doc.data().player1ID,
        player2ID: doc.data().player2ID, 
        playerW: doc.data().playerW
      }
        console.log(game);
        myArray.push(game);
    })
  })*/

  const gameRef = collection(db, "game");
  myArray = []
  // Create a query against the collection.
  const q = query(gameRef, where("player1ID", "==", "1012"));
    myArray.push(q)

    
  for(let i; i < myArray.length; i++){
    if(myArray[i].player1ID.includes("1012") || myArray[i].player2ID.includes("1012")){
    }
  }

  //res.render('history', myArray[i].gameID)

  

  if (docSnap.exists()) {
 
  //res.render()
   console.log("Document data:", userData);
  } else {
    // doc.data() will be undefined in this case
  console.log("No such document!"); 
  }
  
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})