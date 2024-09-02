let grid = document.querySelector(".grid")
const colorPicker = document.querySelector("#colorPicker");
const close = document.querySelector(".closebtn")
const settings = document.querySelector(".hamburger")
const modal = document.querySelector(".modal")
let box = document.querySelector("#Box")
let heading = document.querySelector(".heading")
let size = document.querySelector("#sizer")
let normal = document.querySelector("#normal")
let rainbow = document.querySelector("#rainbow")
let shading = document.querySelector("#shading")
let buttons = document.querySelectorAll(".buttons *")
let picker = document.querySelector(".picker")
let mode = "normal";

console.log(colorPicker.value)






// ```making the grid ```


function makeGrid(Size){

  grid.innerHTML="";

for (let i = 0; i < Size; i++) {
    let row = document.createElement("div")
    row.classList.add(`row${i}`,"row")
    grid.appendChild(row);

    for (let j = 0; j < Size; j++) {
      let cell =  document.createElement("div")
        cell.classList.toggle(`cell`)
        row.appendChild(cell);
    }

  }
  
  let cells = document.querySelectorAll(".cell")
  
  cells.forEach(a => {
    a.addEventListener("mouseenter", () => { // Use "mouseenter" or "mouseover"
      if (mode == "normal") {
        
        a.style.backgroundColor = colorPicker.value; // Set the background color
      } else if (mode =="rainbow")   
      {
        let r = getRandomInt(0, 255);
        let g = getRandomInt(0, 255);
        let b = getRandomInt(0, 255);

          a.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


      }else if (mode =="shading")   
        {
          let computedStyle = window.getComputedStyle(a);
          let opacity = computedStyle.opacity;
            a.style.backgroundColor = `rgb(0, 0, 0,${opacity--})`;
            opacity = opacity-10
            
  
  
        }
  
      
    });
  });

  if (box.checked) {
    cells.forEach(a => {
      a.classList.add("gridactive")
    });

  }

}
makeGrid(size.value)



size.addEventListener('input', function() {
  
  makeGrid(this.value)
});

box.addEventListener("input", () =>{
  
  console.log(box.checked)
  
  let cells = document.querySelectorAll(".cell")
    
 if (box.checked) {
  
  cells.forEach(a => {
    a.classList.add("gridactive")
  });

 }else{
  cells.forEach(a => {
    a.classList.remove("gridactive")
  });
 }

})


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

heading.addEventListener("mouseenter",()=>{
  heading.classList.toggle("headingdata");
})

heading.addEventListener("mouseleave",()=>{
  heading.classList.toggle("headingdata");
})




colorPicker.addEventListener('input', function() {
    this.style.backgroundColor = this.value;
});

close.addEventListener("click",()=>{
  modal.classList.remove("active");
})
settings.addEventListener("click",()=>{
  modal.classList.add("active");
})



buttons.forEach(a=>{
  a.addEventListener("click",()=>{

    if (a.getAttribute("clicked")=="false") {
      
    
     a.style.color="#19c7f3"
     a.style.backgroundColor="white";
     a.setAttribute("clicked","true");

      mode = a.id;
      
      buttons.forEach(b=>{
        if (b.id != a.id && b.getAttribute("clicked") == "true") {
          b.setAttribute("clicked","false");
       
          b.style.color="white"
          b.style.backgroundColor="#19c7f3";
        }
      })

    }

  })
})