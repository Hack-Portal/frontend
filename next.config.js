/** @type {import('next').NextConfig} */
import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
module.exports = nextConfig
