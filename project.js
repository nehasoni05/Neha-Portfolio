var modalInfo = {
    1: {
      title: "Tetris Game",
      info: "The player should be able to rotate each Tetrimino about its own axis. If a line is completed it should be removed and you will receive 10 points.The game should stop if a Tetrimino fills the highest row of the game board",
      link: "https://nehasoni05.github.io/Tetris_Game/tetris.html",
      github: "https://github.com/nehasoni05/Tetris_Game"
    },
    2: {
      title: "Scratch and Win",
      info: "This Flutter app allows the user to select any 5 block from the total 25 present out of which only one has the prize.If you figure out which block it is on or before 5th try then you win, else you lose and the game will reset itself. It's a game of Luck.",
      link: "https://drive.google.com/file/d/1bqUqcRDjlXNdMyJhOhRn7uc7ZCf4Aq25/view",
      github: "https://github.com/nehasoni05/Scratch_and_Win"
    },
    3: {
      title: "Personal Portfolio",
      info: "Created my Persnal Portfolio😀 using HTML,CSS and JS.",
      link: "https://nehasoni05.github.io/Neha-Portfolio/",
      github: "https://github.com/nehasoni05/Neha-Portfolio"
    },
    4: {
      title: "UCSD Unfolding Maps",
      info: "This project is an interactive visualization of a large dataset tagged by geospatial information. Both powerful and challenging, data visualization is one of the hot topics of modern computer science - as well as something that influences our world every day! It makes use of a package called Unfolding Maps, which is a library for interactive maps.",
      link: "https://github.com/nehasoni05/Coursera-Object-Oriented-Programming-in-Java",
      github: "https://github.com/nehasoni05/Coursera-Object-Oriented-Programming-in-Java"
    },
    5: {
      title: "Tic Tac Toe Game",
      info: "The application runs the basic tic-tac-toe game in a digital form. It enables the user to play the game against the computer in single player mode. Like every other game it has three parameters for result i.e. Win, Lose, Tie which are decided at the end of each game accordingly.",
      link: "https://github.com/nehasoni05/Tic-Tac-Toe-Game-Flutter",
      github: "https://github.com/nehasoni05/Tic-Tac-Toe-Game-Flutter"
    },
   
  };
  
  // Get the modal
  var modal = document.getElementById('preview');
  
  // button that opens the modal
  var btn = document.getElementsByClassName("button");
  
  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // open modal 
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].parentElement;
      openModal(project);
    })
  };
  
  function openModal(project){
    var id = project.id;
    var img = project.getElementsByTagName("img")[0].src;
    fillOut(id, img);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }
  
  function fillOut(id, img){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("img").src = img;
    document.getElementById("live").onclick = function(){
      window.open(modalInfo[id].link,'_blank');
    }
    document.getElementById("github").onclick = function(){
      window.open(modalInfo[id].github,'_blank');
    }
  }
  
  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }