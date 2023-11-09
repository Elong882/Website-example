
let uploadbutton = document.getElementById ("upload-button");
let imagechosen = document.getElementById("image-chosen");
let filename = document.getElementById("file-name");
let Checkoutbutton =document.querySelector("#buynowcheckout");

uploadbutton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadbutton.files[0]);
    console.log(uploadbutton.files[0]);
    reader.onload = () => {
        imagechosen.setAttribute("src",reader.result);
    }
    filename.textContent = uploadbutton.files[0].name;
}

Checkoutbutton.onclick = () =>{
    alert('You have successfully placed your order');
}
