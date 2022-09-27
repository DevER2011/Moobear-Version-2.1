function Login(){
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location = "moobearrooms.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyAQP5eOnWgYg_Z05MEOvw63h9h3pDWTWnA",
    authDomain: "moobear-93d81.firebaseapp.com",
    databaseURL: "https://moobear-93d81-default-rtdb.firebaseio.com",
    projectId: "moobear-93d81",
    storageBucket: "moobear-93d81.appspot.com",
    messagingSenderId: "790451746488",
    appId: "1:790451746488:web:6e76f3be14279de4c9e64d"
  };
  
  