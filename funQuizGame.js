
function game (){
    var score = 0;
    var userAns = " ";
    var randQuest = " ";
    var Question =  function (quest, ans, correctAns, index) {

        this.quest = quest;
        this.ans = ans;
        this.correctAns = correctAns;
        this.index = index;
    };
    
    Question.prototype.onScreen = function () {
        return this.quest + "\n" + "1) " + this.ans[0] + "\n" +"2) "+ this.ans[1] + "\n" +"3) "+ this.ans[2] + "\n" + "You can enter EXIT and and the game.";
    };
    
    
    Question.prototype.Check = function () {
        if (userAns == this.index){
            score++;
            return "The answer is correct. Your score is: " + score;
        }
        else if (userAns.toLocaleLowerCase() == 'exit'){
            return "Game over";
        }
        else {
            return "You are wrong. Your score is: " + score;
        }
    };
    
    var answers = [["Yes","No","Don\'t know yet"],["Yes, I learned them carefully","Not yet","I am ready to learn them"],["Angular","React","Vue.js"]];
    var question0 = new Question("Do you enjoy javascript?", answers[0], answers[0][0], 1);
    var question1 = new Question("Have you already learned closures?", answers[1], answers[1][2],3);
    var question2 = new Question("What is your favorite js library?", answers[2], answers[2][1],2);
    var questArr = [question0,question1,question2];
   


    function cycle (){
        randQuest = questArr[Math.floor(Math.random()*questArr.length)];
        alert(randQuest.onScreen());
        userAns = prompt("Please Enter correct answer:");
        alert(randQuest.Check());
        while (randQuest.Check() != "Game over"){
            return cycle();
        }
       
    }
    cycle();
}

game();