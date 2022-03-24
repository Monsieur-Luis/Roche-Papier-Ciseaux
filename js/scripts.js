const buttons = document.querySelectorAll("button");


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const choixDeLutilisateur = buttons[i].innerHTML;
    
    const numeroHasard = Math.floor(Math.random() * buttons.length);
    const choixDuRobot = buttons[numeroHasard].innerHTML;
    
    /* Logique */
    var result = "";
    if (choixDeLutilisateur === choixDuRobot) {
      result = "Egalité";
    } else if (
      //La roche bat ciseaux
      (choixDeLutilisateur === "Roche" && choixDuRobot === "Ciseaux") ||
      //La roche se fait battre par le papier
      (choixDeLutilisateur === "Papier" && choixDuRobot === "Roche") ||
      //le papier se fait battre par des ciseaux
      (choixDeLutilisateur === "Ciseaux" && choixDuRobot === "Papier")
    ) {
      result = "Gagné";
    } else {
      result = "Perdu";
    }

    document.querySelector(".result").innerHTML = `
      Joueur: ${choixDeLutilisateur} <br/>
      Robot: ${choixDuRobot} <br/>
      ${result} !
  `;
  });
}