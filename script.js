console.log(window.innerWidth);
console.log(window.innerHeight);

let imageNames = ["x90.png",
  "xb90.png",
  "x97.png",
  "y700.png",
  "j1.png",
  "ar.png",
  "l.png",
  "xb97.png",
  "x1m.png",
  "jo.png",
  "hrg.png",
  "hrgroen.png"];

let tumbs = document.getElementById('tumbs');
let display = document.getElementById('display');
let left = document.getElementById('left');
let right = document.getElementById('right');
selectImage(Math.floor(Math.random()*imageNames.length));

for(let i=0; i<imageNames.length; i++){
  let tumb = new Image();

  tumb.src = "images/small/" + imageNames[i];
  tumb.id = i;
  tumbs.appendChild(tumb);
  tumb.addEventListener("click",function(e){
      selectImage(e.target.id);
  });
}

function selectImage(id){
  display.src = "images/big/" + imageNames[id];
  console.log(id);
}
//event click left
//left.addEventListener('click',function(e){selectImage(e.target.id)