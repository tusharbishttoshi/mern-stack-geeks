let reg = document.getElementsByClassName('register');
reg[0].addEventListener('submit', () => {
    
}); 

let fname = document.getElementsByClassName('fname');
let fname_err = document.getElementById('fname-err');
fname[0].addEventListener('keyup',(event)=>{
    if(event.target.value.length == 0){
        fname_err.innerHTML = "Name is required";
        fname_err.style.color = "#dc2222"
        
    }
    else if(event.target.value.length < 3){
        fname_err.innerHTML = "Not Accepted";
        fname_err.style.color = "#dc2222"
    }
    else{
        fname_err.innerHTML = "Accepted";
        fname_err.style.color = "#032D60"
    }
});

let uname = document.getElementsByClassName('uname');
let uname_err = document.getElementById('uname-err');
uname[0].addEventListener('keyup', (event_u)=>{
    if(event_u.target.value.length == 0){
        uname_err.innerHTML = "Username is required";
        uname_err.style.color = "#dc2222";
    }
    else if(event_u.target.value.length < 3 && event_u.target.value.length != 0){
        uname_err.innerHTML = "Username can't be small";
        uname_err.style.color = "#dc2222";
    }
    else{
        uname_err.innerHTML = "username accepted";
        uname_err.style.color = "#032D60";
    }
});