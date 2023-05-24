const loginEl =document.querySelector("header a");

loginEl.addEventListener("click",()=>{

	const username = localStorage.getItem("username");
	const password = localStorage.getItem("password");
	
	if(username==null){
		window.location.href="http://localhost:3000/AdminLogin";
	}
	else{
		window.location.href="http://localhost:3000/AdminDashboard";
	}

})