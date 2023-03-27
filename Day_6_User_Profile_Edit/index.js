
function handleEditProfile(){
    var name = document.getElementById("name")
    var inputName = document.getElementById("input-name").textContent
    inputName.value = name

var email = document.getElementById("email")
var inputEmail = document.getElementById("input-email").textContent
inputEmail.value = email

var interest = document.getElementById("interest")
var inputInterest = document.getElementById("input-interest").textContent
inputInterest.value = interest 

document.getElementById("display-view").style.display = "none"
document.getElementById("edit-view").style.display = "block"

}

function handleUpdateProfile(){
var updateName = document.getElementById("input-name").value
var Name = document.getElementById("name")
Name.textContent = updateName

var updateEmail = document.getElementById("input-email").value
var Email = document.getElementById("email")
Email.textContent = updateEmail

var updateInterest = document.getElementById("input-interest").value
var Interest = document.getElementById("interest")
Interest.textContent = updateInterest


    document.getElementById("display-view").style.display = "block"
document.getElementById("edit-view").style.display = "none"



}