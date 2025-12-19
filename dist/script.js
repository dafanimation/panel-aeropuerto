var newLine;
var travelsFrom = [
  {
    "date": "22-NOV", 
    "destination": "MENORCA"
  }, 
  {
    "date": "22-NOV", 
    "destination": "NAUGHTY NOISE"
  },
  {
    "date": "31-DIC", 
    "destination": "NEWYEAR"
  },
    {
    "date": "31-DIC", 
    "destination": "NEWYEAR"
  },
    {
    "date": "31-DIC", 
    "destination": "NEWYEAR"
  }
];

var travelsTo = [
  {
    "date": "22-MAY", 
    "destination": "ENERO LACASA"
  }, 
  {
    "date": "24-DIC", 
    "destination": "CLASES"
  },
  {
    "date": "06-DIC", 
    "destination": "TALLER"
  }
];

loadBoard(travelsFrom, true);
loadBoard(travelsTo, false);

function loadBoard(board, isFrom){
  for(let i = 0; i< board.length; i++){
    newLine = $('<div class="Board-line"></div>');
    let date = $('<div class="Line-date"></div>');
    for(let j = 0; j< board[i].date.length; j++){
      date.append('<div class="Line-pane">'+ board[i].date[j]+'</div>');
    }
    newLine.append(date);
    let destination = $('<div class="Line-destination"></div>');
    for(let j = 0; j < 13; j++){
      if(j >= board[i].destination.length){
        destination.append('<div class="Line-pane"></div>');
      } 
      else {
        destination.append('<div class="Line-pane">'+ board[i].destination[j]+'</div>');
      }
    }
    newLine.append(destination);
    if(isFrom){
      $(".Board-lines--from").append(newLine);
    }
    else{
      $(".Board-lines--to").append(newLine);
    }
  }
}



$(".Airport").click(function(){
  init("onGround");
  animate("onGround", "departure");
  setTimeout(function(){
    init("inAir");
    animate("inAir", "arrival");
  }, 5000);
});

function init(from) {
  $(".Plane").addClass("Plane--" + from);
  $(".Plane--" + from).fadeIn();
  setTimeout(function(){
    $(".Plane--" + from).fadeOut();
    $(".Plane").removeClass("Plane--" + from);
  }, 5000);
}

function animate(from, way) {
  $(".Plane").addClass("Plane--" + way);
  setTimeout(function(){
    $(".Plane").removeClass("Plane--" + way);
  }, 5500);
}