// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
var x = document.getElementById("guessField").ariaValueMax;

// contagem de tentativas
if(X == y)
{

alert("PARABÉNS!!!" + playername +", você acertou em "
+ guess + "Tentativa(s)!");
guess= 1


}
// até acerto    
  else if(x > y)
  {
guess++;
alert("Opa, resposta errada!! Tente um número menor")

  }
  else
  {
    guess++;
    alert("Opa, resposta errada!! Tente um número maior")


}
// função para o número enviado pelo usuário
