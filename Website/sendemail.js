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
