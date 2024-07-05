"use script"
window.alert("Atv. 5.0");
window.alert("1º Enunciado.");

    //Variaveis do 1º Enunciado 
var noMe, dataDia, dataMes
    //Variaveis do 2º Enunciado 
var noTa1, noTa2, noTa3
    //Variaveis do 3º Enunciado. 

    //Variaveis do 4º Enunciado. 
var num1, num2

//Faça um programa que entre com um nome, um dia e um mês. Se o Nome de Celso Portiolli, do dia 11 e do mês 9, estampa "O Celso Portiolli não tem nada a ver com o 11 de Setembro". Se o dia e o mês corresponderem à data de hoje (04/07) e o nome do seu, imprima "Faça a prova com atenção".

noMe=prompt("Quem é você?");
dataDia=parseFloat(prompt("Informe dia:"));
dataMes=parseFloat(prompt("Informe mês:"));

if(noMe=="Celso Portiolli" && dataDia==11 && dataMes==9){
    window.alert("O Celso Portiolli não tem nada a ver com o 11 de Setembro.");
}else if(dataDia==4 && dataMes==7){
    window.alert("Faça a prova com atenção.");
}else{
    window.alert("Acertei?");
}
    
//Faça um programa que calcule a média de 3 notas e diga se a pessoa foi aprovada (média maior ou igual a 60) ou reprovada (média menor que 60). Não existe recuperação nesse enunciado.

window.alert("2º Enunciado")
    
noTa1=parseFloat (prompt("Digite a 1º nota:"));
noTa2=parseFloat (prompt("Digite a 2º nota:"));
noTa3=parseFloat (prompt("Digite a 3º nota:"));

if((noTa1+noTa2+noTa3)/2 >= 6.0){
    window.alert("Parabéns " + noMe + ", você está APROVADO!");
}else if((noTa1+noTa2+noTa3)/2 < 6.0){
    window.alert(noMe + ", você está Reprovado.");
}

//Faça um programa que calcule o peso de n gado, até que o peso informado seja 0 (não deve ser contabilizado). Ao final da leitura, imprima o peso do menor ou maior, do maior gado e a média do peso dos gados.

window.alert("3º Enunciado")
    // "while(){}" equivale a "enquanto"
    var peSo=0; var pesoMenor=Number.MAX_SAFE_INTEGER; pesoMaior=0; var soMa=0; var conTador=0; var inPut=0; var resuLtado=0; var pesoMedia=0;
        // "Number.MAX_SAFE_INTEGER;" Maior número seguro em JavaScript
    while (true) {
            // Solicita o peso do usuário
        inPut = prompt("Informe o peso do gado (0 para terminar):");
        peSo = parseFloat(inPut);
            // Verifica se a entrada é um número válido
        if (isNaN(peSo)) {
            alert("Por favor, insira um número válido.");
            continue;
        }
            // Termina se o peso for 0
        if (peSo === 0) {
            break;
        }
            // Atualiza os valores de menor e maior peso
        if (peSo < pesoMenor) {
            pesoMenor = peSo;
        }
        if (peSo > pesoMaior) {
            pesoMaior = peSo;
        }
            // Adiciona o peso à soma total e incrementa o contador
        soMa += peSo;
        conTador++;
    }   
        // Calcula a média
    mediaPeso = conTador > 0 ? soMa / conTador : 0;    
        // Exibe os resultados
    resuLtado = 'Menor peso: ' + (conTador > 0 ? pesoMenor : 'Nenhum gado registrado') + '\n';
    resuLtado += 'Maior peso: ' + (conTador > 0 ? pesoMaior : 'Nenhum gado registrado') + '\n';
    resuLtado += 'Média dos pesos: ' + (conTador > 0 ? mediaPeso.toFixed(2) : 'Nenhum gado registrado');
    
    alert(resuLtado);
    
//Faça um programa que peça dois números e imprima o valor do primeiro elevado ao segundo.

window.alert("4º Enunciado")

num1=parseFloat(prompt("Digite o 1º valor:"));
num2=parseFloat(prompt("Digite o 2º valor:"));
document.write(Math.pow(num1, num2));

// window.alert(num1 + " elevado a " + num2 + ", é igual a " + )