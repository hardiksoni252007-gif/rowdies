window.onload = function() {
    // Show "Login successful" initially
    document.getElementById("detail").innerText = "Login successful";
    document.getElementById("detail").style.color = "green";
      
    // After 3 seconds
    setTimeout(function() {
        document.getElementById("detail").innerText = "Welcome to our website dashboard";
        document.getElementById("detail").style.color = "#87cefa"
    }, 1000); // 1000 milliseconds = 1 seconds

};