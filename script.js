// const TIMER = document.querySelector(".timer").innerHTML;
////const RESET = document.querySelector("#reset2")
const HOUR = document.querySelector(".hour");
const MINUTE = document.querySelector(".minute");
const SECOND = document.querySelector(".second");
const MILISECOND = document.querySelector(".milisecond");
const textArea = document.querySelector("#textplace");
const MAIN = document.querySelector(".main");
const EXAMPLETEXT = document.querySelector("#example-text").innerHTML;
const RESET = document.querySelector("#reset2");
var milisaniyeh=0;
var saniyeh = 0;
var dagige = 0;
var saat = 0;
var shart2=false;
var instervalMain;


function INTERVAL(){
    let shart=textArea.value.length;
    if(shart == 0 && shart2==false){
        shart2=true;
        instervalMain=setInterval(runTimer,9)
    }
};




function match(){
    let membertext = textArea.value;
    let origintext = EXAMPLETEXT.substring(0,membertext.length);

    if(membertext==EXAMPLETEXT){

        clearInterval(instervalMain);
        MAIN.style.borderColor="green";
    }else{

        if(membertext==origintext){
            MAIN.style.borderColor="yellow";
        }
        else{
            MAIN.style.borderColor="red";

        }
    }
}


function runTimer(){


    milisaniyeh++;
    if(milisaniyeh < 9){
        MILISECOND.innerHTML="0"+milisaniyeh;
          }

    if(milisaniyeh > 9){
        MILISECOND.innerHTML=milisaniyeh;
          }

    if(milisaniyeh > 99){
            milisaniyeh=0;
            saniyeh++;
            SECOND.innerHTML="0" + saniyeh;
          }
    
    if(saniyeh < 9){
        SECOND.innerHTML="0" + saniyeh;
    };
    if(saniyeh > 9){
        SECOND.innerHTML=saniyeh;
    };

   if( saniyeh > 59){
    saniyeh=0;
    SECOND.innerHTML="0"+"0";
    dagige++;
    MINUTE.innerHTML="0" + dagige;
   };

   if(dagige > 9){
    MINUTE.innerHTML=dagige;
   };

    if(dagige > 59){
        saat++;
        HOUR.innerHTML="0"+ saat;
        saniyeh=0;
        SECOND.innerHTML="0"+"0";
        dagige=0;
        MINUTE.innerHTML="0" + "0";
    }

    if(saat > 59){
        clearInterval(INTERVAL);
        saniyeh=0;
        SECOND.innerHTML="0"+"0";
        dagige=0;
        MINUTE.innerHTML="0" + "0";
        saat=0;
        HOUR.innerHTML="0" + "0";
    }
}

function reset(){

clearInterval(instervalMain);
shart2=false;
// instervalMain=null;
textArea.value="";
MAIN.style.borderColor="gray";
HOUR.innerHTML="00";
MINUTE.innerHTML="00";
SECOND.innerHTML="00";
MILISECOND.innerHTML="00";
milisaniyeh=0;
saniyeh=0;
dagige=0;
saat=0;

}

textArea.addEventListener('keypress',INTERVAL);
textArea.addEventListener('keyup',match);
RESET.addEventListener('click',reset);

