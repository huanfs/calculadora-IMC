let altura=document.querySelector('input#altura');
let peso=document.querySelector('input#peso');
let res=document.getElementsByTagName('article')[0];

function calcular(){
    let alt2=(Number(altura.value)*Number(altura.value));
    let imc=(Number(peso.value)/alt2);
    //ESTILIZAÇÕES PADRÕES DA CAIXA DE RESULTADO
    res.style.fontSize='18pt';
    res.style.width='100%';
    res.style.height='90%';
    res.style.borderRadius='5px';
    res.style.fontFamily='Arial';
    res.style.padding='10px';
    res.style.color='#000';
    res.style.textAlign='justify';
    //ESTILIZAÇÕES ALTERNATIVAS DA CAIXA DE RESULTADOS
    if(imc<18.5||imc>30&&imc<34.9||imc>35&&imc<39.9){
        res.style.backgroundColor='rgb(235, 53, 16)';
    }
    else if(imc>18.6&&imc<24.9||imc>25&&imc<29.9){
        res.style.backgroundColor='rgb(33, 236, 57)';
    }
    //PROCESSAMENTO E ESCRITA DOS RESULTADOS
    if(imc<18.5){
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Caracterizando Extrema magreza, Procure ajuda Médica!`;
        res.style.backgroundColor='#000';
        res.style.color='#fff';   
    }
    else if(imc>18.6&&imc<24.9){
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Parabens, você está no peso ideal`;
    }
    else if(imc>25&&imc<29.9){
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Você está levemente acima do peso`;
    }
    else if(imc>30&&imc<34.9){
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Caracterizando obesidade de grau 1`;
    }
    else if(imc>35&&imc<39.9){
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Caracterizando obesidade de grau 2(Severa)`;
    }
    else if(imc>40){
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Caracterizando obesidade de grau 3(Mórbida),Procure ajuda médica!`;
        res.style.backgroundColor='#000';
        res.style.color="#fff";
    }
}
//BOTÃO LIMPAR
function limpar(){
	// let res=document.getElementsByTagName('article')[0];
    altura.value=null;
    peso.value=null;
    res.innerHTML=null;
    res.style.backgroundColor='#fff';
}