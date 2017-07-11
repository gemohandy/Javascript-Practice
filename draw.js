update=false;

fillStyles = ["#000000", "#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FFFFFF"];
curStyle = 0;
mode = 0;
var prevMousePos, prevState;

sizes = [2,6,10];
size = 1;

function setupCanvas(){
  c = document.getElementById("drawScreen");
  context = c.getContext("2d");
  context.fillStyle = "#666666";
  context.fillRect(512,0,128,512);
  context.fillStyle = "#000000";
  context.fillRect(540,14,72,36);
  context.fillStyle = "#FF0000";
  context.fillRect(540,64,72,36);
  context.fillStyle = "#FFFF00";
  context.fillRect(540,114,72,36);
  context.fillStyle = "#00FF00";
  context.fillRect(540,164,72,36);
  context.fillStyle = "#00FFFF";
  context.fillRect(540,214,72,36);
  context.fillStyle = "#0000FF";
  context.fillRect(540,264,72,36);
  context.fillStyle = "#FF00FF";
  context.fillRect(540,314,72,36);
  context.fillStyle = "#FFFFFF";
  context.fillRect(540,366,72,36);
  context.fillRect(520,450,50,50);
  context.fillRect(580,450,50,50);
  context.fillStyle = "#000000";
  context.fillRect(590,465,30,20);
  context.moveTo(525,493);
  context.lineTo(525,480);
  context.lineTo(538,493);
  context.lineTo(525,480);
  context.lineTo(549,456);
  context.lineTo(564,473);
  context.lineTo(538,493);
  context.lineTo(525,493);
  context.stroke();
  context.beginPath();
  context.moveTo(525,493);
  context.lineTo(525, 488);
  context.lineTo(530, 493);
  context.closePath();
  context.fill();
}

function startupdate(event){
  update = true;
  prevMousePos = getMouseOnCanvas(event);
  c = document.getElementById("drawScreen");
  context = c.getContext("2d");
  prevState = context.getImageData(0,0,512,512);
  updateCanvas(event);
}

function stopUpdate(){
  update=false;
}

function updateCanvas(event){
  if(update){
    mousePos = getMouseOnCanvas(event);
    if(mousePos.x + 0.5 * sizes[size] < 512){
      c = document.getElementById("drawScreen");
      var context = c.getContext("2d");
      switch(mode){
        case 0:
          context.beginPath();
          context.moveTo(prevMousePos.x, prevMousePos.y);
          context.lineTo(mousePos.x, mousePos.y);
          context.lineCap = "round";
          context.lineWidth = 6;
          context.strokeStyle = fillStyles[curStyle];
          context.stroke();
          prevMousePos = mousePos;
          break;
        case 1:
          context.putImageData(prevState,0,0);
          context.fillStyle = fillStyles[curStyle];
          context.fillRect(prevMousePos.x, prevMousePos.y, mousePos.x-prevMousePos.x, mousePos.y-prevMousePos.y);
      }
    }
    else{
      //They clicked on the menu somewhere! We need to know where!
      mousePos.x -= 512;
      console.log(mousePos);
      switch(true){
        case mousePos.y > 14 && mousePos.y < 50 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 0;
          break;

        case mousePos.y > 64 && mousePos.y < 100 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 1;
          break;

        case mousePos.y > 114 && mousePos.y < 150 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 2;
          break;

        case mousePos.y > 164 && mousePos.y < 200 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 3;
          break;

        case mousePos.y > 214 && mousePos.y < 250 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 4;
          break;

        case mousePos.y > 264 && mousePos.y < 300 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 5;
          break;

        case mousePos.y > 314 && mousePos.y < 350 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 6;
          break;

        case mousePos.y > 364 && mousePos.y < 400 && mousePos.x>28 && mousePos.x < 100:
          curStyle = 7;
          break;

        case mousePos.y > 450 && mousePos.y < 500 && mousePos.x>10 && mousePos.x < 60:
          mode = 0;
          break;

        case mousePos.y > 450 && mousePos.y < 500 && mousePos.x>70 && mousePos.x < 120:
          mode = 1;
          break;
      }
    }
  }
}

function getMouseOnCanvas(event){
  parent = event.currentTarget;
  return {x:event.clientX-parent.offsetLeft, y:event.clientY-parent.offsetTop};
}
