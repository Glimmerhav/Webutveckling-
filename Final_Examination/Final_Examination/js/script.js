// Get the modal
var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

function SaveName() {

    var uname = document.getElementById('userName').value;
    var upsw = document.getElementById('userPsw').value;

    console.log('Username: ' + uname + ', Password: ' + upsw);

    if (localStorage.getItem("name") == uname) {
        alert("accont already exist")
        return;
    }

    else {

        localStorage.setItem("name", uname);
        localStorage.setItem("Password", upsw);

        modal1.style.display = "none";

    }
}


function Login() {
    var uname2 = document.getElementById('userName2').value;
    var upsw2 = document.getElementById('userPsw2').value;

    console.log("hi" + uname2 + upsw2)

    if (uname2 == localStorage.getItem("name")) {

        console.log(uname2);

        if (upsw2 == localStorage.getItem("Password")) {

            var setUser = localStorage.setItem("User", uname2)

            user = localStorage.getItem("User")

            document.getElementById("User").innerText = uname2;

            modal2.style.display = "none";


        }
        else { alert("Hi!!!!!! Try angin") }

        console.log("worked")
    }

}
window.addEventListener("DOMContentLoaded",function(){
    if (localStorage.getItem("User")) {
        document.getElementById("User").innerText = localStorage.getItem("User");
    }
})