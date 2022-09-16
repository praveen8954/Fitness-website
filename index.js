let popup=document.getElementById('popup')
let cross=document.getElementById('cross')
console.log(popup)
// popup.style.display
function opens(event){
   setTimeout(popup.style.display='flex',5000)
 }
window.addEventListener('load',opens  )
function close(event){
   popup.style.display='none'
 }
cross.addEventListener('click',close  )
 
