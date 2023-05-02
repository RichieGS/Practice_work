let specified_username = "Ahmad website";
let specified_password = "richmond";

document.getElementById('login_btn').addEventListener('click', onLoginBtnClick);
let uname_el = document.getElementById("uname");
let pswd_el = document.getElementById("pswd");

function onLoginBtnClick(){
    let uname = uname_el.value;
    let pswd = pswd_el.value;

    // if(specified_username === uname && specified_password === pswd){
    //     window.location = "./Ahmad_home.html";
    // } else{
    //     alert("Invalid authentication details. Please try again.")
    //     uname_el.value = "";
    //     pswd_el.value = ""
    //     uname_el.focus();
    // }

    if(authenticate_user(uname, pswd, specified_username, specified_password)){
        window.location = "./Ahmad_home.html";
    } else{
        alert("Invalid authentication details. Please try again.")
        uname_el.value = "";
        pswd_el.value = ""
        uname_el.focus();
    }

}

function authenticate_user(supplied_uname, supplied_pswd, actual_uname, actual_pswd){
    if(supplied_uname.toUpperCase() === actual_uname.toUpperCase() && supplied_pswd === actual_pswd){
        return true;
    } else{
        return false;
    }
}


let even_no = (numbers) =>{
    if(numbers % 2 === 0){
        return "This is an even no"
    } else{
        return "This number is an odd number"
    }
}
console.log(even_no(092303))

// let arithmetic_progression = 



