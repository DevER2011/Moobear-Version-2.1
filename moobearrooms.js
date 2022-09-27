function Logout(){
window.location="index.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyAQP5eOnWgYg_Z05MEOvw63h9h3pDWTWnA",
    authDomain: "moobear-93d81.firebaseapp.com",
    databaseURL: "https://moobear-93d81-default-rtdb.firebaseio.com",
    projectId: "moobear-93d81",
    storageBucket: "moobear-93d81.appspot.com",
    messagingSenderId: "790451746488",
    appId: "1:790451746488:web:6e76f3be14279de4c9e64d"
  };
  function addroom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "moobear_page.html";
    }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id )'>#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();

  