const loginEl =document.querySelector("header a");

loginEl.addEventListener("click",()=>{

	const username = localStorage.getItem("username");
	const password = localStorage.getItem("password");
	
	if(username==null){
		window.location.href="/AdminLogin";
	}
	else{
		window.location.href="/AdminDashboard";
	}

})
