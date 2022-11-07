let altura=document.querySelector('input#altura')
let peso=document.querySelector('input#peso')

function calcular(){
    let alt2=(Number(altura.value)*Number(altura.value));
    let imc=(Number(peso.value)/alt2);

    if(imc<18.5){
        let res=document.getElementsByTagName('article')[0];
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Caracterizando Extrema magreza`;
        res.style.color='#E7720B';
        res.style.textAlign='center';
        res.style.backgroundColor='#E9F7F0';
        res.style.fontSize='18pt';
        res.style.marginTop='2em';
        res.style.width='500px';
        res.style.fontFamily='Arial';
        res.style.padding='10px';
    }
    else if(imc>18.6&&imc<24.9){
        let res=document.getElementsByTagName('article')[0];
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Parabens, você está no peso ideal`;
        res.style.color='#77C731';
        res.style.textAlign='center';
        res.style.backgroundColor='#E9F7F0';
        res.style.fontSize='18pt';
        res.style.marginTop='2em';
        res.style.width='500px';
        res.style.fontFamily='Arial';
        res.style.padding='10px';
    }
    else if(imc>25&&imc<29.9){
        let res=document.getElementsByTagName('article')[0];
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Você está levemente acima do peso`;
        res.style.color='#77C731';
        res.style.textAlign='center';
        res.style.backgroundColor='#E9F7F0';
        res.style.fontSize='18pt';
        res.style.marginTop='2em';
        res.style.width='500px';
        res.style.fontFamily='Arial';
        res.style.padding='10px';
    }
    else if(imc>30&&imc<34.9){
        let res=document.getElementsByTagName('article')[0];
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Caracterizando obesidade de grau 1`;
        res.style.color='#E7720B';
        res.style.textAlign='center';
        res.style.backgroundColor='#E9F7F0';
        res.style.fontSize='18pt';
        res.style.marginTop='2em';
        res.style.width='500px';
        res.style.fontFamily='Arial';
        res.style.padding='10px';
    }
    else if(imc>35&&imc<39.9){
        let res=document.getElementsByTagName('article')[0];
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Caracterizando obesidade de grau 2(Severa)`;
        res.style.color='#E7720B';
        res.style.textAlign='center';
        res.style.backgroundColor='#E9F7F0';
        res.style.fontSize='18pt';
        res.style.marginTop='2em';
        res.style.width='500px';
        res.style.fontFamily='Arial';
        res.style.padding='10px';
    }
    else if(imc>40){
        let res=document.getElementsByTagName('article')[0];
        res.innerHTML=`Seu índice de massa corporal (IMC) é de ${imc.toFixed(1)}, Caracterizando obesidade de grau 3(Mórbida),Procure ajuda médica!`;
        res.style.color='#E7720B';
        res.style.textAlign='center';
        res.style.backgroundColor='#E9F7F0';
        res.style.fontSize='18pt';
        res.style.marginTop='2em';
        res.style.width='500px';
        res.style.fontFamily='Arial';
        res.style.padding='10px';
    }
}

function limpar(){
	let res=document.getElementsByTagName('article')[0];
    altura.value=null;
    peso.value=null;
    res.innerHTML=null;
    res.style.backgroundColor='#BDF8E4';
}