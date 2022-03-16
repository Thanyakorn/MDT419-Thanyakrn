// var input1;
// var input2;
// var input3;

// window.onload = setupVar;

// function setupVar() { 
//     input1 = document.getElementById("topic1")
//     input2 = document.getElementById("comment1")
//     input3 = document.getElementById("comment2")
// }

// function postFunction(){

//     var post1 = document.getElementById("teat1").value;
//     if(input1.innerHTML == ""){
//         input1.innerHTML = post1;

//     }
//     else if(input2.innerHTML == ""){
//         input2.innerHTML = post1;
//     }
//     else if (input3.innerHTML == ""){
//         input3.innerHTML = post1;
//     }
//     document.getElementById("text1").value = "";
    
// }
// var link = document.getElementById("tw-link");
// link.innerHTML = "twitter";

// window.onload = twitterLink;
// function twitterLink(){
//     var link = document.getElementById("tw-link");
//     link.innerHTML = "twitter";
// }

function clearFunction(){
    input1.innerHTML = null;
    input2.innerHTML = null;
    input3.innerHTML = null;
}

var numCount=0;

function postFunction()
{
    var text=document.getElementById("text1").value;
    var text_x=document.getElementById("topic1");
    var text_y=document.getElementById("topic2");
    var text_z=document.getElementById("topic3");

   numCount++;

   if(numCount == 1)
   {
       text_x.textContent=text;
   }

   else if(numCount == 2)
   {
       text_y.textContent=text;
   }

   else if(numCount == 3)
   {
       text_z.textContent=text;
   }

}

window.onload=clearFunction;
function clearFunction()
{
    document.getElementById("topic1").innerHTML="";
    document.getElementById("topic2").innerHTML="";
    document.getElementById("topic3").innerHTML="";

    numCount=0;
}

window.onload= facebook;
function facebook(){
    var link = document.getElementById("fb-link");
    link.innerHTML = "facebook";
}

