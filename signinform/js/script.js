const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const userDiv= document.getElementById('user_div');
const signinDiv= document.getElementById('signin_div');


firebase.initializeApp(config);

function signIn() {
    firebase.database().ref("user").set({
        email: userEmail.value,
        password: userPassword.value
        
    })
}