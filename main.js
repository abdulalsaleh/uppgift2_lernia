let btn = document.querySelector(".btn");
let input = document.querySelector("#inputTodo");
let counter = document.querySelector(".counter");

let counterShow = 0;
let arr = [];



let div = document.createElement("div");
div.setAttribute("class","divContainer");
let childDiv = document.createElement("div");
childDiv.setAttribute("class","childDiv");
let ul1 = document.createElement("ul");
childDiv.appendChild(ul1);
div.appendChild(childDiv);
document.body.appendChild(div);




btn.addEventListener("click",handleclick)

function handleclick(){
   if(input.value=== null || input.value ==="")
   {
    alert("you need to write something")
   }
   else  {
    let liDiv = document.createElement("div");
    liDiv.setAttribute("class","lidiv");
    let newLi = document.createElement("li");
    newLi.setAttribute("id","newLi");
    newLi.innerText=input.value;
    let icon = document.createElement("i");
    icon.setAttribute("class","fa fa-close");
    icon.setAttribute("id","icon");
    let icon1 = document.createElement("i");
    icon1.setAttribute("class","fa fa-check-square");
    icon1.setAttribute("id","icon1");
    liDiv.appendChild(newLi);
    liDiv.appendChild(icon);
    liDiv.appendChild(icon1);

    
    ul1.appendChild(liDiv);
    arr.push(newLi.innerHTML);
   
    if(ul1.appendChild(liDiv)){
      counterShow++;
      counter.innerHTML =   counterShow + " things to do !";
    }
    
    
    icon.addEventListener("click", ()=> ul1.removeChild(liDiv) )
    
  
    icon1.addEventListener("click",()=>{
      liDiv.removeChild(icon1)
    })
  
    
   
   }
   
  
  }