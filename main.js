window.onload = function() {
    // Show "Login successful" initially
    document.getElementById("detail").innerText = "Login successful";
    document.getElementById("detail").style.color = "green";
      
    // After 3 seconds
    setTimeout(function() {
        document.getElementById("detail").innerText = "Welcome to our website dashboard";
        document.getElementById("detail").style.color = "black"
    }, 1000); // 1000 milliseconds = 1 seconds

};
let dash = document.getElementById('dash');
let link = document.getElementById('link');
let dev = document.getElementById('dev');
let port = document.getElementById('port');

if(window.innerWidth < 921){
    dev.innerText = "Dashboard"
}
else{
    dev.addEventListener('click', ()=>{
        window.location = "portfolio.html"
    });
}

dev.addEventListener('click', ()=>{
    if (window.innerWidth < 921) {
        port.style.display = "flex"
        dash.style.display = "flex"
        link.style.display = "none"
    } 

})


