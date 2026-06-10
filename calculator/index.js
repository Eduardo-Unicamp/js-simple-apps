const display = document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value="";

}

function calculate(){
    try {
        display.value=eval(display.value);//dangerous to use in real applications can execute code
    } catch (error) {
        
    }
}