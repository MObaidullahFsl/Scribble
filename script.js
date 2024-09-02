let grid = document.querySelector(".grid")




// const colorElement = document.querySelector(".color");
// const color = colorElement.getAttribute("colorData");
const colorPicker = document.querySelector("#colorPicker");
const close = document.querySelector(".closebtn")
const settings = document.querySelector(".hamburger")
const modal = document.querySelector(".modal")
let box = document.querySelector("#Box")
let heading = document.querySelector(".heading")
let size = document.querySelector("#sizer")


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
      
      
        a.style.backgroundColor = colorPicker.value; // Set the background color
  
      
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



