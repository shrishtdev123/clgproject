// Script for navigation bar
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav= document.getElementById('navbar');
const btn=document.getElementById("btn");
const sign=document.getElementById("sign");

if (bar)
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })

if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');

    })
}

  const sumit=async (event)=>{
    //    alert("okay i am working as well");
       alert("kya kr rhe ho tm");
       
  }
  const getinfo=async(event)=>{
    alert("sign ho gya bhai");
}

btn.addEventListener("click",sumit);
sign.addEventListener("click",getinfo);