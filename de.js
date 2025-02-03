new WOW().init();
let hea=document.getElementById('head');
let topk=document.getElementById('top-btn');
let di=document.getElementById('color');
let body=document.querySelector('body');
let lo=document.getElementsByClassName('loading');
      
 window.onscroll=function(){
    if(scrollY==0){
        hea.style.backgroundColor= null;
         topk.style.display='none';
        di.style.display='none';
    }else if(window.scrollY>='220'){  
        hea.style.backgroundColor='rgba(184, 137, 247, 0.897)' ;
        topk.style.display='block';
        di.style.display='flex';
    }
     
}

topk.onclick=function(){
  window.scrollTo({
      
    top:0,
    behavior:'smooth'
      
  });
    
}
////استدعاء متغير
let col=document.querySelector(':root');
let deep=document.getElementById('deep');
let pi=document.getElementById('pi');
let bl=document.getElementById('blue');
deep.onclick=function(){
   col.style.setProperty('--maincolor','lawngreen');
   
}

pi.onclick=function(){
   col.style.setProperty('--maincolor','purple');
     
}

bl.onclick=function(){
   col.style.setProperty('--maincolor','hsl(186deg 80% 46%)');
    
}
