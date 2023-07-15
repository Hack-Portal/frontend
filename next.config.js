/** @type {import('next').NextConfig} */


const config = {

}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
module.exports = nextConfig

  