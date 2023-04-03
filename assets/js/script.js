let btn = document.querySelectorAll("button");
let inputs = document.querySelectorAll("input");
btn[1].addEventListener("click", calcular);

function calcular(){
    let imc = Number(inputs[1].value/(inputs[0].value*inputs[0].value));
    imc = imc.toFixed(1).replace('.',',');
    console.log(imc);
    if(imc<18.6){
        let result = document.querySelector("#result");
        result.innerHTML=`Seu Índicie de massa corporal (imc)
        é de ${imc} considerado muito abaixo do peso!`
    }
    else if(imc>=18.6&&imc<25.0){
            let result = document.querySelector("#result");
            result.innerHTML=`Seu Índicie de massa corporal (imc)
            é de ${imc} considerado muito bom!`
    }
    else if(imc>25.0&&imc<30.0){
            let result = document.querySelector("#result");
            result.innerHTML=`Seu Índicie de massa corporal (imc)
            é de ${imc} considerado levemente acima do peso!`
    }
    else if(imc>30.0&&imc<35.0){
        let result = document.querySelector("#result");
            result.innerHTML=`Seu Índicie de massa corporal (imc)
            é de ${imc} caracterizando obesidade de grau 1!`
    }
    else if(imc>35.0&&imc<40.0){
            let result = document.querySelector("#result");
            result.innerHTML=`Seu Índicie de massa corporal (imc)
            é de ${imc} caracterizando obesidade severa!`
    }
    else{
        let result = document.querySelector("#result");
            result.innerHTML=`Seu Índicie de massa corporal (imc)
            é de ${imc} caracterizando obesidade mórbida!`
    }
}

function reset(){
    let result = document.querySelector("#result");
    inputs.value="";
    result.innerHTML="";
}
