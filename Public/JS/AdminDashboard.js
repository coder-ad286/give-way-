const infoEl = document.querySelector(".information");
const viewEl = document.querySelector(".view");
const closeEl = document.querySelector(".information>a")
const logoutEl = document.getElementById('logout');
const rollnoEl = [...document.querySelectorAll(".rollno")];


//clear local storage when click logout
logoutEl.addEventListener('click',()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("password");
})

rollnoEl.forEach((rollno)=>{
	rollno.innerHTML = Number(rollno.innerHTML) + 1;
})


closeEl.addEventListener('click',()=>{
	infoEl.style.display="none";
    console.log("clicked close")
})

