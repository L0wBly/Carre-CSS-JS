let bouton = document.getElementById("bouton");
let result = document.getElementById("cliquer")
let Bcolor = bouton.style.backgroundColor;
        function change() {
            if ( bouton.style.backgroundColor == Bcolor) {
                bouton.style.backgroundColor = "red";
                result.innerHTML = "Background Color changed";
            }
            else {
                bouton.style.backgroundColor = Bcolor
                result.innerHTML = "";
            }
        }  

