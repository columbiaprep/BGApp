const express = require('express')
//const handlebars = require('express-handlebars')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
var hbs = require('hbs')
var { initializeApp } = require ('firebase/app');
var { getFirestore, query, collection, addDoc, getDocs, getDoc, doc, where} = require ('firebase/firestore');
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
//app.set('views', path.join(_dirname, 'views'));
//Sets handlebars configurations (we will go through them later on)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.get('/', async (req, res) => {
  res.render('auth');

})

app.get('/login', (req, res) => {
  

})
app.get('/ranking', (req, res) => {
    fbAdd.addData()
    res.send('Rank screen');
  
  
  })

app.get('/history', async (req, res) => {
  const docRef = doc(db, "users", "testuser");
  const docSnap = await getDoc(docRef);
  const userData = docSnap.data

  const gameRef = collection(db, "game");
  console.log(1)
  gameID = []
  console.log(2)
  // Create a query against the collection.
    q = query(gameRef, where("playerW", "==", "dYtvzTYHZvfsxK74geWkgxQt3aj1"));
    console.log(3)
    const querySnapshot = await getDocs(q);
    console.log(4)
      querySnapshot.forEach((doc) => {
        console.log(5)
      // doc.data() is never undefined for query doc snapshots
      gameID.push(doc.id, " => ", doc.data());
      console.log(6)
    });
    console.log(7)
  res.render('history', gameID)
  console.log(8)
  //for(let i; i < myArray.length; i++){
    //if(myArray[i].player1ID.includes("dYtvzTYHZvfsxK74geWkgxQt3aj1") || myArray[i].player2ID.includes("dYtvzTYHZvfsxK74geWkgxQt3aj1")){
      //gameID = []
      //gameID.push(myArray[i].gameID)
    //}
  //}

  //res.render('history', myArray[i].gameID)

  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})