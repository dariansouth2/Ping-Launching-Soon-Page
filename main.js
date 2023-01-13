const btn = document.querySelector('#notify-btn');
const input = document.querySelector('#input-box')

const errorCheck = 


btn.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(input.value === "example@email.com"){
        console.log(input.value)
    }else{
        const errMessage = document.querySelector('.error-message')
        errMessage.innerHTML("Please provide a valid email address")
        errMessage.color = 'red';
        input.borderColor = 'red';
    }
})