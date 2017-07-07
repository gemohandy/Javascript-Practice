update=false;

fillStyles = ["#000000", "#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FFFFFF"];
curStyle = 0;
var prevMousePos;

function setupCanvas(){
  c = document.getElementById("drawScreen");
  context = c.getContext("2d");
  context.fillStyle = "#666666";
  context.fillRect(512,0,128,512);
  context.fillStyle = "#000000";
  context.fillRect(540,14,72,36);
  context.fillStyle = "#FF0000";
  context.fillRect(540,78,72,36);
  context.fillStyle = "#FFFF00";
  context.fillRect(540,142,72,36);
  context.fillStyle = "#00FF00";
  context.fillRect(540,206,72,36);
  context.fillStyle = "#00FFFF";
  context.fillRect(540,270,72,36);
  context.fillStyle = "#0000FF";
  context.fillRect(540,334,72,36);
  context.fillStyle = "#FF00FF";
  context.fillRect(540,398,72,36);
  context.fillStyle = "#FFFFFF";
  context.fillRect(540,464,72,36);
}

function startupdate(event){
  update = true;
  prevMousePos = getMouseOnCanvas(event);
  updateCanvas(event);
}

function stopUpdate(){
  update=false;
}

function updateCanvas(event){
  if(update){
    mousePos = getMouseOnCanvas(event);
    if(mousePos.x + 3 < 512){
      c = document.getElementById("drawScreen");
      var context = c.getContext("2d");
      context.beginPath();
      context.moveTo(prevMousePos.x, prevMousePos.y);
      context.lineTo(mousePos.x, mousePos.y);
      context.lineCap = "round";
      context.lineWidth = 6;
      context.strokeStyle = fillStyles[curStyle];
      context.stroke();
      prevMousePos = mousePos;
    }
    else{
      //They clicked on the menu somewhere! We need to know where!
      mousePos.x -= 512;
      console.log(mousePos);
      switch(true){
        case mousePos.y > 14 && mousePos.y < 50 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 0;
          break;

        case mousePos.y > 78 && mousePos.y < 114 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 1;
          break;

        case mousePos.y > 142 && mousePos.y < 178 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 2;
          break;

        case mousePos.y > 206 && mousePos.y < 242 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 3;
          break;

        case mousePos.y > 270 && mousePos.y < 306 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 4;
          break;

        case mousePos.y > 334 && mousePos.y < 370 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 5;
          break;

        case mousePos.y > 398 && mousePos.y < 434 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 6;
          break;

        case mousePos.y > 464 && mousePos.y < 500 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 7;
          break;
      }
    }
  }
}

function getMouseOnCanvas(event){
  parent = event.currentTarget;
  return {x:event.clientX-parent.offsetLeft, y:event.clientY-parent.offsetTop};
}
