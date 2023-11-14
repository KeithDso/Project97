var firebaseConfig = {
      apiKey: "AIzaSyBXAPJFq3-IPT9x-mmmSp5DvzwFoBwTsPI",
      authDomain: "lets-chat-firebase-8b77d.firebaseapp.com",
      databaseURL: "https://lets-chat-firebase-8b77d-default-rtdb.firebaseio.com",
      projectId: "lets-chat-firebase-8b77d",
      storageBucket: "lets-chat-firebase-8b77d.appspot.com",
      messagingSenderId: "673896296416",
      appId: "1:673896296416:web:bc786319319106a08d4585"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name" 
      })
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Romm name - " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' ># "+Room_names+" </div><hr> ";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName() {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}
   