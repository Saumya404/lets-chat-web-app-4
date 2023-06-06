var firebaseConfig = {
    apiKey: "AIzaSyCC79gj5ZfZbhWkKagcWZJ39E2yqqvk4rw",
    authDomain: "kwitter-b4a5a.firebaseapp.com",
    databaseURL: "https://kwitter-b4a5a-default-rtdb.firebaseio.com",
    projectId: "kwitter-b4a5a",
    storageBucket: "kwitter-b4a5a.appspot.com",
    messagingSenderId: "235648142045",
    appId: "1:235648142045:web:0542bc4e5b21451ef06934"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
 
 function addRoom()
 {
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"addinh room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
 }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room_Name-"+Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;


   //End code
   });});}
getData();
function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name",name);
   window.location="kwitter_page.html";
}

function logout(){
   localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";}
