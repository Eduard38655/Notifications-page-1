/*https://medium.com/zurvin/ejercicios-javascript-para-potenciar-tus-conocimientos-eb8b889a8621#:~:text=Ejercicios%20Javascript%20para%20potenciar%20tus%20conocimientos%201%201.,cero%20...%205%205.%20Mayor%20al%20opuesto%20*/




 function remove_notice(params) {
 
  let mark =document.getElementById("mark")
  mark.style.background="none"
   
  let angela =document.getElementById("angela")
  angela.style.background="none"
 
  let jacob =document.getElementById("jacob")
  jacob.style.background="none"


let counter=document.getElementById("counter")

counter.innerHTML=0
   
 }
 
 function begin_counter() {
    let numb = [2, 1, 3];
    let counter = document.getElementById("counter");
    let mark = document.getElementById("mark");
    let angela = document.getElementById("angela");
    let jacob = document.getElementById("jacob");
    
  for (let i = 0; i < numb.length; i++) {
    

    mark.addEventListener("click",counter_mark,{ once: true })
    function counter_mark(){  
    
    mark.style.background = "none";
      if (numb[i] > 0) {
        counter.innerHTML = --numb[i];
      }
    };

    angela.addEventListener("click",counterangela,{ once: true })
 
 function counterangela(){ 
      angela.style.background = "none";
      if (numb[i] > 0) {
        counter.innerHTML = --numb[i];
      }
    };

    jacob.addEventListener("click",counter_jacob,{ once: true })

    function counter_jacob(){ 
      jacob.style.background = "none";
      if (numb[i] > 0) {
        counter.innerHTML = --numb[i];
      }
    };
  }

}


begin_counter();