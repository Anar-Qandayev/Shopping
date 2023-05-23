const BASE_URL="https://fakestoreapi.com";

document.querySelector("#register-btn").addEventListener("click",()=>{
    const userName = document.querySelector("#fullName").value;
    const userEmail = document.querySelector("#email").value;
    const userPassword = document.querySelector("#password").value;
    
    let fullName=document.querySelector("#fullName");
    let email=document.querySelector("#email");
    let password=document.querySelector("#password");
    let errorMessage=document.querySelector("#error-message");
    let regularExpression  = /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    let emailRegex  = /^(.+)@(.+)$/;
    
    if(password.value.trim().length==0 || fullName.value.trim().length==0 || email.value.trim().length==0){
        checkErrorMessage(errorMessage,"Xanalari bosh saxlamayin","error-message");
    }
    else if(!emailRegex.test(email.value)){
        checkErrorMessage(
            errorMessage,
            "Email-da  @ işarəsi mütləqdir",
            "error-message"
        )
        email.value=""; email.style.borderColor="red"; 
    }
    else if(!regularExpression.test(password.value)){
        checkErrorMessage(
            errorMessage,
            "Parolda ən azı bir rəqəm , bir böyük və bir kiçik hərfdən ibarət olmalıdır.",
            "error-message"
        )
        password.value=""; password.style.borderColor="red";
    }
    else if(password.value.trim().length<8 || password.value.trim().length>=16){
        checkErrorMessage(
            errorMessage,
            "Parol 8den kichik ve 16dan boyuk ola bilmez",
            "error-message"
        )
        password.value="";fullName.value="";email.value=""
    }
    else{
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
        errorMessage.classList.remove("error-message");
        errorMessage.innerHTML="";
        password.style.borderColor="green"; email.style.borderColor="green"; 
        password.value=""; fullName.value=""; email.value=""
    }
    const data = {
        userName,
        userEmail,
        userPassword,
    };
    axios.post(`${BASE_URL}/products`,data)
    .then((res)=>{
        if(res.status == 200){
            console.log("successful");
        }else if(res.status == 404){
            console.log("error");
        }
    });

})

const checkErrorMessage=(element,message,className)=>{
    console.log(element,message);
    element.innerHTML=`${message}`;
    element.classList.add(`${className}`)
}
let clickBtn=document.querySelector(".clickBtn");
clickBtn.addEventListener("click",()=>{
    let eye=document.querySelector(".fa-eye");
    let eyeSlash=document.querySelector(".fa-eye-slash");
    let text=document.querySelector("#password");
    if(eye.style.visibility=="visible"){
        eye.style.visibility="hidden";
        eyeSlash.style.visibility="visible";
        text.type="password";
    }else{
        eye.style.visibility="visible";
        eyeSlash.style.visibility="hidden";
        text.type="text";
    }
})
