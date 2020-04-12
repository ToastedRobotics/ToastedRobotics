var app_firebase = {};
(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyAy5OdnvAIw8En9N6wYkhaZIXUOiEYcTgU",
        authDomain: "toasted-robotics.firebaseapp.com",
        databaseURL: "https://toasted-robotics.firebaseio.com",
        projectId: "toasted-robotics",
        storageBucket: "toasted-robotics.appspot.com",
        messagingSenderId: "563134463615",
        appId: "1:563134463615:web:e1aeaac654dc20bde6094a",
        measurementId: "G-K6HGG19DS6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    app_firebase = firebase; 
})()
