

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.getElementById('cover').style.display="none";
});

window.addEventListener("load", function(){
    setTimeout(
    
        function open(event){
            
            document.querySelector(".popup").style.display = "block";
            document.getElementById('cover').style.display='block';
        },
        2000
    )
});

function sendEmail(){
    var emailitems = {
        email: document.getElementById("email")
    }
    
const serviceID = "service_1hpmyna";
const templateID = "template_03o1mrq";

emailjs.send(serviceID,templateID,emailitems).then (
    res => {
        document.getElementById("email").value = "";
        console.log(res);
        window.location.href="successemail.html"
    }
)
.catch(error=>console.log(error));
}