let bar_icon = document.getElementById("bar_icon");
let cancel_btn = document.getElementById("cancel_btn");
let list = document.querySelector("ul");
let body = document.querySelector("body");
let li = document.querySelectorAll("li a");

bar_icon.onclick = ()=>{
    list.classList.add("show");
    bar_icon.style.display = "none";
    
}
cancel_btn.onclick = ()=>{
    list.classList.remove("show");
    bar_icon.style.display = "block";
}

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", scrollY > 0)
})

let tp = document.getElementById("top");
window.addEventListener("scroll",function(){
  if(document.body.scrollTop > 51 || document.documentElement.scrollTop > 51){
      tp.style.display = "block"
  }else{
      tp.style.display = "none"
  }
})
 /*tp.addEventListener("click",function(){
      window.scroll({
          top: 0,
          behaviour: "smooth"
      })
  })*/

let bigb = document.getElementById("pointa");
let bb = document.getElementsByClassName("benefit_box");
for(let p = 0; p < bb.length ; p++){
  var points = document.createElement("div");
  points.classList.add("point");
  bigb.appendChild(points);
}
if(window.innerWidth < 700){
    let li = document.querySelectorAll("li a");
    for(l = 0; l < li.length; l++){
        li[l].onclick = ()=>{
            list.classList.remove("show");
            bar_icon.style.display = "block"; 
        };
      }
}
if(window.innerWidth < 599){
    btn = document.getElementById("prevbtn");
    let nextbtn = document.getElementById("nextbtn");

    prevbtn.onclick = ()=>{
        controller(-1);
    }
    nextbtn.onclick =()=>{
        controller(1);
    }
    let fog = 0;
    function controller(y){
        fog += y;
        slideshow(fog)
    }
    slideshow(fog);
    function slideshow(hello){
        let benefit_box = document.getElementsByClassName("benefit_box");
        let p = document.getElementsByClassName("point");
        if(hello == benefit_box.length){
            fog = 0;
            hello = 0;
        }
        if(hello < 0){
            fog = benefit_box.length-1;
            hello = benefit_box.length-1;
        }
        for(let y of benefit_box){
            y.style.display = "none";
        }
        for(let y of p){
            y.style.backgroundColor = "white";
        }
        benefit_box[hello].style.display = "block";
        p[hello].style.backgroundColor = "black";
    }
}
window.onresize = ()=>{
    function sM(){
        if(window.innerWidth == 599 ||window.innerWidth<=599 && window.innerWidth >= 550){
            window.location.reload();
        }else if(window.innerWidth == 600 || window.innerWidth <= 800 && window.innerWidth >= 700){
            window.location.reload();
        }
    }
    sM();
}

var question = document.getElementsByClassName("question")
var i;
for(var i = 0; i < question.length; i++){
    question[i].addEventListener("click",function(){
    this.classList.toggle("active")
    var answer = this.nextElementSibling;
    if(answer.style.maxHeight){
        answer.style.maxHeight = null;
    }else{
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
})
}

var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");
let x = 0;
upArrow.style.visibility = "hidden";
upArrow.onclick = function(){
    if(x < 0){
      x = x + 300;
      slide.style.top = x + "px";
      console.log(x);
    }
    if(x == 0){
       upArrow.style.visibility = "hidden";
    }
    if(x > -1500){
        downArrow.style.visibility = "visible"
    }
}
downArrow.onclick = function(){
    if(x > "-1500"){
       x = x - 300;
       slide.style.top = x + "px";
       console.log(x);
    }
    if(x == -1500){
        downArrow.style.visibility = "hidden";
    }
    if(x < 0){
       upArrow.style.visibility = "visible"
    }
}

var form = document.getElementById("form");
var usn = document.getElementById("USN");
var email = document.getElementById("email");
var mobile_no = document.getElementById("mobile_no");
var submitbtn = document.getElementById("submit");
var submit = 1;

 function checkInputs(){
   var text = usn.value.trim();
   var emailValue = email.value.trim();
   let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let pattern2 = /^[6-9][0-9]{9}$/;
   var mobile_noValue = mobile_no.value.trim();

   if(text == ""){
    seterrorfor(usn, "please enter your name");
    submit = 0;
   }else if(text.length < 2){
    seterrorfor(usn, "please enter full name");
    submit = 0;
   }else{
     setsuccessfor(usn);
     submit = 1;
   }

  if(emailValue == ""){
    seterrorfor(email, "Please enter your email");
    submit = 0;
  }else if(!(emailValue.match(pattern))){
    seterrorfor(email, "please enter valid email");
    submit = 0;
  }else if(emailValue.match(pattern)){
    setsuccessfor(email)
    submit = 1;
  }
  if(mobile_noValue == ""){
    setsuccessfor(mobile_no)
  }else if(!(mobile_noValue.match(pattern2))){
    seterrorfor(mobile_no, "please enter correct mobile no.");
    submit = 0;
  }else if(mobile_noValue.match(pattern2)){
    setsuccessfor(mobile_no)
    submit = 1;
  }

 function seterrorfor(index, message){
   const form = index.parentElement;
   const small = form.querySelector('small');
   small.innerText = message
   form.className = "form_control error"
   return false;
 }
 function setsuccessfor(index){
   const form = index.parentElement;
   const small = form.querySelector('small');
   small.innerText = '';
   form.className = "form_control success"  
   return true;
  }
  if(submit){
    return true;
  }else{
    return false;
  }
}
 function sends(){
  let body = "name: " + usn.value + "<br>email: " + email.value + "<br>Mobile No." + mobile_no.value;
  submitbtn.classList.add("loading")
  submitbtn.innerHTML = "Sending Mail...";
  Email.send({
  SecureToken : "400196c9-0143-48b4-be1b-a216e9f395ee",
  To : 'mindmath21@gmail.com',
  From : email.value,
  Subject : "Join Mindmath community",
  Body : body
  }).then(
  message =>{
      if(message == "OK"){
        let forhide = document.getElementById("forhide");
        let sendEnd = document.getElementById("sendEnd");
        forhide.style.display = "none";
        sendEnd.style.display = "block";
      }else{
          alert("Sorry some error occur please contact us at mindmath21@gmail.com or call us at 9610860895. Thankyou");
          submitbtn.classList.remove("loading");
          submitbtn.innerHTML = "Send";
      }
  });
}
