var email =document.querySelector(".email");
var user =document.querySelector(".user");
var emailsgin =document.querySelector(".email-sgin");
var passsgin =document.querySelector(".pass-sgin");
var pass =document.querySelector(".pass");
var submit =document.querySelector(".submit");
var login =document.querySelector(".login");
var par =document.querySelector(".par");
var username =document.getElementById("username");
var logout =document.getElementById("logout");
 
if(logout !=null){
    logout.addEventListener('click',function(){
    location.href="sign.html"
    localStorage.removeItem("name")
})
}

var allarry = [];

if(localStorage.getItem("allarry") ==null ){
    allarry=[];
}else{
allarry = JSON.parse(localStorage.getItem("allarry"));
}
function savedata(){

if(user.value ==="" || email.value ==="" || pass.value ===""){
   par.innerText=" ALL inputs required";
   par.classList.add("red");
}
else if(user.value !== null && email.value !== null  && pass.value !== null && vaildmail()){
    var elemnt ={
        user:user.value,
        email:email.value,
        pass:pass.value,
    }
par.innerText= "success";
par.classList.remove("red");
par.classList.add("green");
allarry.push(elemnt); 
localStorage.setItem("allarry",JSON.stringify(allarry));
window.location.href="sign.html";


}else{
    par.innerText="incoreect email";
par.classList.add("red");
}


}
if(submit !=null){
    submit.addEventListener('click',function(){
        
            savedata();
     
   
    });
}
   
if(login !=null){
    login.addEventListener('click',function(){
        checkperson();
        
    });
}
   
function checkperson(){
    
        if(emailsgin.value != "" || passsgin.value != ""){
            par.innerText= "";
            if(check()){
location.href="./log-in-main/home.html";

}else{
 par.innerText=" incorrect is email or password";
par.classList.add("red");
 }
           
}else{
   
 par.innerText=" ALL inputs required";
 par.classList.add("red");
}
    
}
function check(){
for(var i =0;i < allarry.length;i++){
if(allarry[i].email.toLowerCase() === emailsgin.value.toLowerCase() && allarry[i].pass.toLowerCase() === passsgin.value.toLowerCase()){
 localStorage.setItem("name",JSON.stringify(allarry[i].user))
return true;
}
}
}


function adname(){
    var usernam=JSON.parse( localStorage.getItem("name"));
    username.innerHTML=`welcome ${usernam}`;

}

function vaildmail(){
    var emailregex =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    var testing =emailregex.test(email.value);
if(testing===true){
 email.style.color="green";
  return true;
}else{
    return false
}
}

function checksub(){
 for(var i =0;i < allarry.length;i++){
if(allarry[i].email.toLowerCase() === email.value.toLowerCase()){
 par.innerText=" email is exist";
 par.classList.add("red");
        }
    }
}

  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth , GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

  
  const firebaseConfig = {
    apiKey: "AIzaSyDrPeXjk319EX80pgzBgoclvolNzDZ0kiE",
    authDomain: "login-aedf0.firebaseapp.com",
    projectId: "login-aedf0",
    storageBucket: "login-aedf0.appspot.com",
    messagingSenderId: "1047900516267",
    appId: "1:1047900516267:web:a79934339c529e54dd2cee"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth  = getAuth(app);
  auth.languageCode ='en'
  const provider = new GoogleAuthProvider();

  const googlelogin = document.getElementById("google");
googlelogin.addEventListener("click" , function() {
    signInWithPopup(auth, provider)
  .then((result) => {
   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
  console.log(user);
  window.location.href="./log-in-main/home.html";
  
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
    
})