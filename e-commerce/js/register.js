var reg = document.getElementsByClassName('register');
reg[0].addEventListener('click', () => {
    // console.log("button clicked");
}); 

var fname = document.getElementsByClassName('fname');
var fname_err = document.getElementsByClassName('fname-err');
fname[0].addEventListener('keyup',()=>{
    // console.log(fname[0].value);
    if(fname[0].value.minlength = 4){
        fname_err.innerHTML = "not accepted"
    }
});