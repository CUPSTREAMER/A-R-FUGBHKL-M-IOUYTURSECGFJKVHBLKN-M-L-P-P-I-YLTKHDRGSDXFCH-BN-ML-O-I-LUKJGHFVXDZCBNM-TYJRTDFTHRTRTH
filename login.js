// Crie a função login aqui.
function Login() {

player_name = document.getElementById("playername").ariaValueMax;
localStorage.setItem("playername", player_name);
window.location = "gamepage.html";

}