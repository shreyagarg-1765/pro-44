class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("white");
        text(code,300,300)

        if(actualCode===enteredCode.toUpperCase()){
            return true
        }else{
            return false
        }
    }
    

}