update=false;

function startupdate(event){
  update = true;
  updateCanvas(event);
}

function stopUpdate(){
  update=false;
}

function updateCanvas(event){
  if(update){
    console.log(event);
    mousePos = getMouseOnCanvas(event);
    console.log(mousePos);
    c = document.getElementById("drawScreen");
    var context = c.getContext("2d");
    context.beginPath();
    context.arc(mousePos.x, mousePos.y, 3, 0, 2*Math.PI);
    context.fill();
  }
}

function getMouseOnCanvas(event){
  parent = event.currentTarget;
  return {x:event.clientX-parent.offsetLeft, y:event.clientY-parent.offsetTop};
}
