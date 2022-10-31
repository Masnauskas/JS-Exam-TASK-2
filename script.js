/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let clicks = 0;

const clickButton = document.getElementById("btn__element");
const clickCounter = document.getElementById("btn__state");

clickButton.addEventListener("click", () => {
  clicks++;
  clickCounter.textContent = clicks;
});
