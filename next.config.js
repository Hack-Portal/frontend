/** @type {import('next').NextConfig} */


const config = {

}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}


module.exports = nextConfig

  