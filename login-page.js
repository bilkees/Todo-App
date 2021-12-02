
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "12345") {
        alert("You have successfully logged in");
        window.location.href = "main.html";

       // location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})




// $(document).ready(function(){
//     var flag;
//     function validateLogin(u,p,callback){
//         if(u=="admin" && p=="12345"){
//             flag=1;
//             callback(flag);
//         }
//         else{
//             flag =0;
//             callback(flag);
//         }
//     }
//     $("#login-form-submit").click(function(){
//         var uname = $("username-field").val();
//         var pwd = $("password-field").val();
//         console.log(uname,pwd);
//         validateLogin(uname,pwd,(res)=>{
//             if (res==1) window.location.href="main.html";
//             else alert("incorrect username or password");
//         })
//     })
// })