var opened = 0;
function removeHide(){

    const loginModal = document.getElementById("login-modal");
    const pageMask = document.getElementById("page-mask");

    if(opened == 0){
        loginModal.classList.remove("hide");
        pageMask.classList.remove("hide");
        opened = 1;
        console.log("login opened", opened);
        loginModal.style.height="300px";
    }
    else{
        loginModal.classList.add("hide");
        pageMask.classList.add("hide");
        opened = 0;
        console.log("login closed", opened);
    }
}
