// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyDLlalysOEMhmrUHxUUS8ZGDk6BEDwyIto",
  authDomain: "record-djt.firebaseapp.com",
  projectId: "record-djt",
  storageBucket: "record-djt.firebasestorage.app",
  messagingSenderId: "907107906667",
  appId: "1:907107906667:web:ec2e751cedaeb98396ad2e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
