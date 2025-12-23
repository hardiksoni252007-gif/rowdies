function Login(){
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let user_logo = document.getElementById('userLogo');
    let user_pass = document.getElementById('userPass');

    let user_name = "7-Brains"
    let pass_word = "logic@000"

    if(user == user_name && pass == pass_word){
        user_logo.style.color = "green";
        user_pass.style.color = "green";
        window.location = "main.html";
    }
    else if(user == "" && pass == ""){
        user_logo.style.color = "blue";
        user_pass.style.color = "blue";
    }
    else if(user != user_name && pass == pass_word){
        user_logo.style.color = "red";
        user_pass.style.color = "green";
    }
    else if(user == user_name && pass != pass_word){
        user_logo.style.color = "green";
        user_pass.style.color = "red";
    }
    else if(user != user_name && pass != pass_word){
        user_logo.style.color = "red";
        user_pass.style.color = "red";
    }
}