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
    setTimeout(checkLoadState, 100);
})
