var reg = document.getElementsByClassName('register');
reg[0].addEventListener('click', () => {
    // console.log("button clicked");
}); 

var fname = document.getElementsByClassName('fname');
var fname_err = document.getElementById('fname-err');
fname[0].addEventListener('keyup',(event)=>{
    if(event.target.value.length <= 4 ){
        fname_err.innerHTML = "Hello";
        fname_err.style.color = "#dc2222"
    }
    else{
        fname_err.innerHTML = "byy";
        fname_err.style.color = "#032D60"
    }
});