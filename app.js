const icons=document.querySelector('#menu-bars');
const UL = document.querySelector('ul');
icons.addEventListener('click',function(){
  icons.classList.toggle('fa-times');
  UL.classList.toggle('active');
})


var modalBtns=document.querySelectorAll('.btn');

modalBtns.forEach(function(btn){
  btn.addEventListener('click', function(){
    var modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.transform="translateY(0%)";
  })

})

var Closebtns=document.querySelectorAll('.modal-close');
Closebtns.forEach(function(btns){
  btns.addEventListener('click', function(){
    var modal=btns.closest('.full-image').style.transform="translateY(-110%)";
  })
})
