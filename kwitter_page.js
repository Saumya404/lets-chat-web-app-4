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
  room_name=localStorage.getItem("room_name");
  
  function send(){
    msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

