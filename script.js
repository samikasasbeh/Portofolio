function toggleMenu(){
    const menu = document.querySelector(".menu-lists");
    const icon = document.querySelector(".mobile-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open")
}

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const funModeToggle = document.getElementById('funModeToggle');

    funModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('fun-Mode');
    });
});

function notifyUserAndOpenResume() {
    const proceed = confirm("This will download a resume into your local drive. Do you wish to proceed?")
    if(proceed){
        window.open('./Assets/Resume_SamiKasasbeh.pdf');
    }
    else{
        return;
    }
}

// form here

function validateForm(){
    const form = document.getElementById("formContainer");
    const submit = document.getElementById("submit");

    form.addEventListener("submit", function validate(event){
        event.preventDefault();
        const name = document.getElementById("First").value;
        const lastName = document.getElementById("Last").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("number").value;

        if(!name || !lastName || !email || !phoneNumber){
            alert("Please fill in the form with your details!")
            return;
        }
        if(!(email.endsWith("@dal.ca") || email.endsWith(".ca") || email.endsWith(".com"))){
            alert("Incorrect Email!");
            return
        }

        if(phoneNumber.length<9 && phoneNumber.length>11){
            alert("incorrect phone Number!");
            return;
        }

        alert("Form Submitted!")
    });

    

}
validateForm();