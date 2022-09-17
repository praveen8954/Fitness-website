let popup=document.getElementById('popup')
let cross=document.getElementById('cross')
let body=document.getElementById('body')
console.log(popup)
// popup.style.display
function opens(event){
   setTimeout(function(){popup.style.flex='1'},20000)
   body.setAttribute('class','blur')
   popup.style.display='flex'
 }
window.addEventListener('load',opens  )
function close(event){
   popup.style.display='none'
   body.setAttribute('class','null')
 }
cross.addEventListener('click',close  )
 
