document.getElementById("cta").addEventListener("click", doThing);


function doThing(){
    document.getElementById("about").scrollIntoView(
        {behavior: "smooth"});
}