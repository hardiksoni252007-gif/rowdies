function Login(){
    let user = document.getElementById("userName").value;
    let pass = document.getElementById("passWord").value;
    let face = document.getElementById("face");
    let lock = document.getElementById("lock");
    let msg = document.getElementById("msg");

    let username = "Logic";
    let password = "@000";

    if(user == username && pass == password){
        window.location.href = "main.html";
        face.style.color="darkgreen";
        lock.style.color="darkgreen";
        msg.innerHTML="Login";
        msg.style.color="darkgreen";
    }
    
    else if(user == username && pass != password){
        face.style.color="darkgreen";
        lock.style.color="maroon";
    }
    
    else if(user != username && pass == password){
        lock.style.color="darkgreen";
        face.style.color="maroon";
    }
    
    else if(user == "" && pass == ""){
        face.style.color="maroon";
        lock.style.color="maroon";
        msg.innerHTML="Enter Details";
        msg.style.color="maroon";
        
    }
    
    else if(user != username && pass != password){
        lock.style.color="maroon";
        face.style.color="maroon";
        msg.innerHTML="Wrong Details";
        msg.style.color="maroon";
    }
}

let contain = document.getElementById("contain")
contain.style.background="linear-gradient(345deg,rgba(255, 0, 55, 1) 0%,rgba(255, 75, 0, 0.9) 35%,rgba(255, 135, 75, 0.9) 70%,rgba(105, 0, 75, 1) 100%)";

// const button = document.getElementById("login");

//     document.addEventListener("mousemove", (e) => {
//       const rect = button.getBoundingClientRect();
//       const distanceX = e.clientX - (rect.left + rect.width / 2);
//       const distanceY = e.clientY - (rect.top + rect.height / 2);
//       const distance = Math.sqrt(distanceX**2 + distanceY**2);

//       // If cursor is too close, move the button
//       if (distance < 100) {
//         const offsetX = (Math.random() - 0.5) * 300;
//         const offsetY = (Math.random() - 0.5) * 300;
//         button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
//       }
//     });
