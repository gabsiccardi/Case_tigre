var clicks = 0;

        function botao_click(){
            clicks++;
            document.querySelector("#clicks").innerHTML = "Você clicou " +clicks+ " vezes no botão."
        }