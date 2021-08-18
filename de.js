let hea=document.getElementById('head');
let topk=document.getElementById('top-btn');
let di=document.getElementById('color');
window.onscroll=function(){
    if(scrollY==0){
        hea.style.backgroundColor= null;
         topk.style.display='none';
        di.style.display='none';
    }else if(window.scrollY>='220'){  
        hea.style.backgroundColor='deeppink' ;
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
   col.style.setProperty('--maincolor',' purple');
     
}

bl.onclick=function(){
   col.style.setProperty('--maincolor','hsl(186deg 80% 46%)');
    
}

let mainImage=document.getElementById('block');
let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');
let img4=document.getElementById('img4');

img1.onmouseover=function(){
   mainImage.src=img1.src 
    
}

img2.onmouseover=function(){
   mainImage.src=img2.src 
    
}

img3.onmouseover=function(){
   mainImage.src=img3.src 
    
}

img4.onmouseover=function(){
   mainImage.src=img4.src 
    
}

/////////////////////////////////////////طريقة ثانية
//function getImage(element){
//    mainImage.src=element.src
//}

// var exper=document.getElementById('Experiance');
// var ho=document.getElementById('Home');
// var About=document.getElementById("About");
// var Work=document.getElementById("Work");
// var Contant=document.getElementById("contant");

// var intro=document.getElementById('in');
// var ex=document.getElementById('ex');
// var wor=document.getElementById('wor');
// var con=document.getElementById('con');
// var foo=document.getElementById('foo');



// ho.onclick=function(){
//     window.scrollTo({
        
//      top: 550,
//      behavior:'smooth'
        
//     } );
       
    
// }

// exper.onclick=function(){
//     window.scrollTo({
        
//      top:1020,
//      behavior:'smooth'
        
//     } );
       
    
// }

// Contant.onclick=function(){
    
//     window.scrollTo({
        
//      top:2420,
//      behavior:'smooth'
        
//     } );
       
   
// }



// About.onclick=function(){
    
//     window.scrollTo({
        
//      top:2920,
//      behavior:'smooth'
        
//     } );
       
    
// }

// Work.onclick=function(){
//     window.scrollTo({
        
//      top:1550,
//      behavior:'smooth'
        
//     } );
       
    




