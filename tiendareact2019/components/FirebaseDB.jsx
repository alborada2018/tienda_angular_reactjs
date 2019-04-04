import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

  const totalUsers : Object = [];
  const config = {
    apiKey: "AIzaSyC_qWerWekZ8qQtaxQvbosfod2mLCefNjw",
    authDomain: "reactproductos.firebaseapp.com",
    databaseURL: "https://reactproductos.firebaseio.com",
    projectId: "reactproductos",
    storageBucket: "reactproductos.appspot.com",
    messagingSenderId: "1412132498"

    
  };
  firebase.initializeApp(config);

const productosDb = firebase.database().ref().child('productos')
const usuariosDb = firebase.database().ref().child('usuarios')

usuariosDb.orderByChild("id").on("child_added", function(snapshot) {
  totalUsers.push(snapshot.key)
});



 
