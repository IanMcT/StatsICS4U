class Scores{
  //private variables
  #student;
  #score;



  //constructor
  constructor(line){
    var items = line.split(",");
    this.#student = items[0];
    this.#score = items[1];
  }

  getScore(){
    return parseInt(this.#score);
  }
  toString(){
    return this.#student + ": " + this.#score;
  }
}//end of Scores class

const stuScores = [];
/*var score2 = new Scores("Suzy,78");
console.log(score2.toString());*/
function readFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        processContents(reader.result);
    reader.close;
    }
}

function processContents(contents){
    var lines = contents.split('\n');
    var output = "";
    var lowestScore = Number.MAX_SAFE_INTEGER;
    var highestScore = Number.MIN_SAFE_INTEGER;
    var total = 0;
    var countScores = 0;

    for (line of lines){
        console.log(line);
        output += line + "<br />";
        stuScores.push(new Scores(line));
//        var studentInfo = line.split(",");    
        if(stuScores[stuScores.length-1].getScore()<lowestScore ){
          lowestScore = stuScores[stuScores.length-1].getScore();
        }
        if(stuScores[stuScores.length-1].getScore()>highestScore)
        {
          highestScore = stuScores[stuScores.length-1].getScore();
        }
        //console.log(total);
        total += stuScores[stuScores.length-1].getScore();
        countScores++;
    }
    output += "Lowest score: " + lowestScore + "<br />";
    output += "Highest score: " + highestScore + "<br />";
    output += "Average score: " + (total/countScores);
    document.getElementById("output").innerHTML += output;
}