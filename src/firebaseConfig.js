import Firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAMV8-P9mboXv55ICv7cS3ElqaAKDp4kyw",
    authDomain: "website-da27b.firebaseapp.com",
    databaseURL: "https://website-da27b.firebaseio.com",
    projectId: "website-da27b",
    storageBucket: "website-da27b.appspot.com",
    messagingSenderId: "816955501982",
    appId: "1:816955501982:web:bc1ffc673cbf0b05ecba8f"
  };
  // Initialize Firebase
  const firebaseApp = Firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.database()
  export const dbTicketRef = db.ref('Website')