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
window.addEventListener('load', function loader(){
    console.log("loaded");
    console.time("Load Time");
    const preload = document.getElementById("preload");
    const mask = document.getElementById("mask");
    const wrapper = document.getElementById("wrapper");
    function checkLoadState(){
        if(document.readyState === "complete"){
            preload.classList.add("hide");
            mask.classList.add("displayup");
            setTimeout(hideMask,500);
            function hideMask(){
                mask.classList.add("hide");
            }
            
            console.log("complete")
            console.timeEnd("Load Time");
        }
    }
    setTimeout(checkLoadState, 500);
})
