window.onload=function(){
    
    const auth = firebase.auth();
    // Status changes
    auth.onAuthStateChanged(user =>{
        if(user){
            console.log(user," has logged in.");
            btnLogout.classList.remove("hide");
            txtUser.classList.remove("hide");
            btnLogin.classList.add("hide");
            btnSignup.classList.add("hide");
            txtEmail.classList.add("hide");
            txtPassword.classList.add("hide");
            btnReset.classList.add("hide");

            console.log(firebase.auth().currentUser.email);
            txtUser.style = "font-weight: normal";
            txtUser.innerHTML = firebase.auth().currentUser.email;
        }
        else{
            console.log(user, " logged out.");
            btnLogout.classList.add("hide");
            txtUser.classList.add("hide");
            btnLogin.classList.remove("hide");
            btnSignup.classList.remove("hide");
            txtEmail.classList.remove("hide");
            txtPassword.classList.remove("hide");
            btnReset.classList.remove("hide");
        }
    });

    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignUp");
    const btnLogout = document.getElementById("btnLogOut");
    const txtUser = document.getElementById("user");
    const btnReset = document.getElementById("btnReset");
    const resetPass = document.getElementById("resetPass");
    const resetSubmit = document.getElementById("resetSubmit");
    
    btnLogin.addEventListener("click", e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        setTimeout(() => {
            window.parent.location.reload(true);
        }, 1500);
    });
    btnSignup.addEventListener("click", e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    })
    
    var opened = 0;
    btnReset.addEventListener("click", e => {
        if(opened == 0){
            resetPass.classList.remove("hide");
            opened = 1;
        }
        else{
            resetPass.classList.add("hide");
            opened = 0;
        }
    })

    var emailAddress = document.getElementById("resetEmail");
    resetSubmit.addEventListener("click", e =>{
        auth.sendPasswordResetEmail(emailAddress.value).then(function() {
            // Email sent.
            console.log("Email has been sent to "+emailAddress.value);
            document.getElementById("confirmation").innerHTML="An email has been sent to "+emailAddress.value+" with instructions on how to reset your password.";
            }).catch(function(error) {
            // An error happened.
            console.log("Email has not been sent. \n"+error);
            document.getElementById("confirmation").innerHTML= emailAddress.value+" is not a registered account. Please sign up.";
            });
        
    })
   
    // firebase.auth().onAuthStateChanged(firebaseUser =>{
    //     if(firebaseUser){
    //         console.log(firebaseUser);
    //         btnLogout.classList.remove("hide");
    //     }
    //     else{
    //         console.log("Not logged in.");
    //         btnLogout.classList.add("hide");
    //     }
    // })

    btnLogout.addEventListener("click", e =>{
        firebase.auth().signOut();
        window.parent.location.reload(true);
    })
}
