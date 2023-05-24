const buttonEl = document.querySelector("button");
const usernameEl = document.getElementById('mail');
const passwordEl = document.getElementById('pass');

// console.log(buttonEl,usernameEl,passwordEl)

buttonEl.addEventListener('click',(event)=>{
	
     const username= usernameEl.value;
     const password=passwordEl.value;
      
      console.log(username,password);

      localStorage.setItem("username",username);
      localStorage.setItem("password",password)
});

