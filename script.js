// funsçao para inserir os cliques no Input
function insert(num)// num avisa que esta esperando numeros
{
    //  Este codigo apenas adiciona um numero de cada vez
    // document.getElementById('resultado').innerHTML = num;


    // é aqui que fazemos os click's inserirem numeros q vão se acumulando 
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado)
    {
    document.getElementById('resultado').innerHTML = eval(resultado).toFixed(2);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Empty..."
    }
}

