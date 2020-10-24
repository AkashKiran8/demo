var firebaseConfig = {
    apiKey: "AIzaSyBsLb-2N3vYzjQDOxzF-JJZLYjclvcIFaU",
    authDomain: "trial-a8a7e.firebaseapp.com",
    databaseURL: "https://trial-a8a7e.firebaseio.com",
    projectId: "trial-a8a7e",
    storageBucket: "trial-a8a7e.appspot.com",
    messagingSenderId: "307362069241",
    appId: "1:307362069241:web:f44af5a40970ca456e4028",
    measurementId: "G-DQ6JHSHXJW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 let storage = firebase.storage()
      
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

fileButton.addEventListener('change', function(e) {
    var file = e.target.files[0];
    console.log (file.name)
    var storageRef =storage.ref('demo/' + file.name);

    var task = storageRef.put(file);
    localStorage.setItem("filename",file.name)
            task.on ('state_changed',
          function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
          },
          function error(err) {

          },
          function complete() {

          }
        ); 

})