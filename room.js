var firebaseConfig = {
    apiKey: "AIzaSyCktZOF9ESddNA-lQZwUUhNoux_zR2fpSg",
    authDomain: "kwitter-prac-9e7f6.firebaseapp.com",
    databaseURL: "https://kwitter-prac-9e7f6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-prac-9e7f6",
    storageBucket: "kwitter-prac-9e7f6.appspot.com",
    messagingSenderId: "795145209128",
    appId: "1:795145209128:web:660d3cb33b57b331c3fc1d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+ user_name+"!";

  function  addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="chat_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name -"+Room_names);
      row="<div class='room_name' id='Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML=row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="chat_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="a.html"
}
