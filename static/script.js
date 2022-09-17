const { format } = require("express/lib/response")

const name= document.getElementById('name')
const phone= document.getElementById('phone')
const email= document.getElementById('email')
const address= document.getElementById('address')
const desc= document.getElementById('desc')
const errorElement= document.getElementById('error')
form.addEventListener('submit', (e)=>{
    let messages= []
    if(name.value===''|| name.value==null){
        messages.push('Name is required')
    }
    if(phone.value.length>=10){
        messages.push('Phone No. should be less than 10')

    }
    if(email.value==null){
        messages.push('Email is requires')
    }
    if(address.value==null){
        messages.push('Address is required')

    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText= messages.join(',')
    }
})