name = document.getElementById("name").value
function submit(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    document.cookie = `name=${name}, max-age=1000`;
    document.cookie = `email=${email}, max-age=1000`;
    document.cookie = `message=${message}, max-age=1000`;
    if (name == "" || email == "" || message == "") {
        alert("Please fill out all fields.");
        return false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
    
        alert("Thank you for your message, " + name + "! We will get back to you soon.");
        return true;
    }
}