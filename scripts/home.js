
function slideCarousel(el, position){
  let elp= el.parentNode;
  let carousel= elp.parentNode.children[1];
  let op = position * -41;
  carousel.style.transform= `translateX(${ op }%)`;
  el.classList.add('active');
  if(position==1){
    elp.children[0].classList.remove('active');
    carousel.children[3].style.display=none;
  }
  else{
    elp.children[1].classList.remove('active');
  }
}


function hideShowElements(el, tipo) {
  let imgArrow=el.childNodes[1];
  let parentEl = el.parentNode;
  let liEl=parentEl.parentNode;
  if (liEl.classList.contains('invisible')) {
    if(tipo=='plus'){
      imgArrow.src="/assets/imgs/icon-circle-minus.svg";
    }
    else{
      imgArrow.src="/assets/imgs/down-arrow.svg";
    }
} else {
  if(tipo=='plus'){
    
    imgArrow.src="/assets/imgs/icon-circle-plus.svg";
  }
  else{  
    imgArrow.src="/assets/imgs/arrow-up.svg";
  }
  
}
  liEl.classList.toggle("invisible");
}



 

