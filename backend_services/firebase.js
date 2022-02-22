import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBYRWQbpKQc-4s5bCEcppBV5jacdFol_cc',
  authDomain: 'retro-mart.firebaseapp.com',
  projectId: 'retro-mart',
  storageBucket: 'retro-mart.appspot.com',
  messagingSenderId: '128684784930',
  appId: '1:128684784930:web:0cac86a4bba85600ae397b',
  measurementId: 'G-R7TJRD18NS'
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
const creds = app.auth()
const store = app.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { creds, store, provider }
