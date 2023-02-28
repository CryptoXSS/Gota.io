// ==UserScript==
// @name        Auto Cambiar skins
// @namespace   https://github.com/CryptoXSS/Gota.io/
// @version     1.0.1
// @author      CryptoXSS
// @match       *://gota.io/*
// @icon        https://i.imgur.com/ejxjYj4.gif
// @grant       none
// ==/UserScript==


let interval;

document.addEventListener("keydown", function(event) {
  if (event.code === "KeyF") {
    if (!interval) {
      interval = setInterval(changeSkin, 1000);
      alert("Activado");
    } else {
      clearInterval(interval);
      interval = null;
      alert("Desactivado");
    }
  }
});

const skins = ["n0t1", "n0t2", "n0t3", "n0t4", "bass", "tom", "error", "xzv3", "xzv2", "xzv4", "xzv5", "xzv6", "troll", "super", "error1", "anonymous", "Crypto", "lol", "Uruguay", "messi", "Colombia", "Venezuela", "Argentina", "brasil", "peru", "chile", "russia", "ukraine", "fargetta", "777", "luna1", "github", "123", "stopwar", "passddos", "pika", "pikachu"];
let currentSkin = 0;

function changeSkin() {
  console.log("Checking skins")
  document.getElementsByClassName("gota-input")[0].value = skins[currentSkin];
  currentSkin = (currentSkin + 1) % skins.length;
}
