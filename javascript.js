window.onload = function(){
  document.getElementById('tester').innerHTML="This is a basic test of Javascript";
  setTimeout(diffMess, 3000);
};

diffMess = function(){
  document.getElementById('tester').innerHTML = "I changed the message!";
};
