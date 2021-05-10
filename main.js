"use strict";

{
  const open =document.getElementById("open");
  const close =document.getElementById("close");
  const overlay =document.querySelector(".overlay");
  const a =document.querySelector(".a");
  const b =document.querySelector(".b");
  const c =document.querySelector(".c");
  const d =document.querySelector(".d");
  const e =document.querySelector(".e");
  
  

  open.addEventListener("click",()=>{
    overlay.classList.add("show");
    open.classList.add("hide");
  })
  close.addEventListener("click",()=>{
    overlay.classList.remove("show");
    open.classList.remove("hide");
  })
  a.addEventListener("click",()=>{
    overlay.classList.remove("show");
    open.classList.remove("hide");
  })
  b.addEventListener("click",()=>{
    overlay.classList.remove("show");
    open.classList.remove("hide");
  })
  c.addEventListener("click",()=>{
    overlay.classList.remove("show");
    open.classList.remove("hide");
  })
  d.addEventListener("click",()=>{
    overlay.classList.remove("show");
    open.classList.remove("hide");
  })
  e.addEventListener("click",()=>{
    overlay.classList.remove("show");
    open.classList.remove("hide");
  })
  
  

  function changeColor(){

    let scrollY=window.pageYOffset;
    let body=document.body;
    const SideNavi=document.getElementById("side-navi")

    const trigger1=document.querySelector(".top");
    const trigger2=document.getElementById("survice");

    let trigger1Y=trigger1.getBoundingClientRect().top;
    let trigger2Y=trigger2.getBoundingClientRect().top;

    if( 0>=trigger1Y+430){
      body.classList.remove("show-navi");
      

    }else{
      body.classList.add("show-navi")
    }

  }
  window.addEventListener("scroll" , changeColor)



  













}

