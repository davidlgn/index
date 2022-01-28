var rep = new Array;

var faite = new Array;

var score = 0;
 
 


 
 

rep[1] = "a";

rep[2] = "b";

rep[3] = "d";

rep[4] = "a" || "c";

rep[5] = "b";

rep[6] = "c";

rep[7] = "c";

rep[8] = "a" && "b";

rep[9] = "c";

rep[10] = "a" || "b" || "c";
 


function truc(){
alert("breff");
}

function Engine(question, reponse) {

        if (reponse != rep[question]) {

                if (!faite[question]) {

                        faite[question] = -1;

                        alert("Faux !!   La bonne réponse était en - " + rep[question] + " -");

                        }

                else {

                        alert("Tu as déjà répondu à cette question !");

                        }

                }

        else {

                if (!faite[question]) {

                        faite[question] = -1;

                        score++;

                        alert("Bonne réponse !! ");

                        }

                else { 

                        alert("Tu as déjà répondu à cette question !");

                        }

                }

}



function NextLevel () {

        if (score > 10) {

                alert("Bravo !");

                }

        if (score > 8 && score <= 10) {

                alert(score + "/10. " + "Bien");

                }

        if (score > 6 && score <= 8) {

                alert(score + "/10. " + "Good");

                }
 
 

        if (score >= 4 && score < 6) {

                alert(score + "/10. " + "Passable");

                }

        if (score < 4) {

                alert(score + "/10. " + "Bel effort !");

                }
 
 
 


faite = new Array;

score = 0;



document.quest.reset();

}
 