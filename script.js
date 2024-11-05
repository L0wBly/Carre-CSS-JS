let bouton = document.getElementById("bouton");
let Bcolor = bouton.style.backgroundColor;
        function change() {
            if ( bouton.style.backgroundColor == Bcolor) {
                bouton.style.backgroundColor = "red";
            }
            else {
                bouton.style.backgroundColor = Bcolor
            }
        }  