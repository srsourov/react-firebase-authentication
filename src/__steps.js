/*

    ----------------------------------
    INITIAL SETUP
    -----------------------------------
    1. visit console.firebase.google.com
    2. create project (skip google analytics)
    3. Register app (create config)
    4. Install firebase: npm install firebase
    5. add config file to your project
    6. DANGER: Do not publish or make firebase config to public by pushing those to github
    -----------------------------------
    INTEGRATION
    -----------------------------------
    7. Visit: Go to Docs > Build > Aunthentication > Web > Get Started
    8. export app from the firebase.config.js file: export default app
    9. login.jsx: import getAuth from firebase/auth
    10. create const auth = getAuth(app);
    11. import googleAuthProvider and create a new provider
    12. use signInWithPoUp and pass auth and provider
    13. Activate sign in method from firebase (google, facebook, github etc.)


    -----------------------------------
    More Auth Provider
    -----------------------------------
    1. activate the auth provider (create app, provide redirect url, client id, client secret)
    2.

*/