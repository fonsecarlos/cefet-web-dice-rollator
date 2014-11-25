// Fa�a seu exerc�cio neste arquivo


// Alguns elementos importantes na p�gina (index.html):
// #rolar: Bot�o rolar
//	 - voc� deve atribuir um _handler_ de evento a ele para fazer o c�lculo da rolagem dos dados
// #resultado: Elemento cujo conte�do deve ser uma string com os resultados
//	 - voc� deve definir seu conte�do (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados: 
//	 - voc� deve torn�-lo vis�vel removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade


var rolar = document.getElementById('rolar');
var quantidades = document.getElementsByClassName('dado');

rolar.addEventListener('click', function(){
    var soma = 0;
    var frase = "";
    for(var i = 0; i < quantidades.length; i++){
        var max = 0;
        if(i == 5){
            max = 20
        }else{
            max = 4+(i*2);
        }
        var dado = document.getElementById('quantidadeD'+max.toString());
        var qntde = dado.value;
        for(var j = 0; j<qntde; j++){
            if(frase != ""){
                 frase += ' + '
            }
            var resultado = Math.ceil(Math.random() * max);
            soma += resultado;
            frase += resultado;  
        }
        
    }
    if(frase != ""){
            
        frase+=" = "+soma;
        var container = document.getElementById('recipienteResultados');
        container.classList.remove('oculto');
        
        var resultadoFrase = document.getElementById('resultado');
        resultadoFrase.innerHTML = frase;
    }
    
    
});



