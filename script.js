var verificaAlerta = false;

function verificaEncomenda() {
    verificaAlerta = false;
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    
    verificaEmail();
    verificaCamposObrigatorios();
    verificaDadosEncomenda();

    if (verificaAlerta == false){
        alert (nome + " sua encomenda foi realizada. Acompanhe atualizações pelo telefone "+ telefone);
    }
}

function verificaCamposObrigatorios() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if (!nome || !telefone) {
        verificaAlerta = true;
        alert("Preencha todos os campos obrigatórios.");
    }

    if (isNaN(telefone)) {
        verificaAlerta = true;
        alert("Preencha um número de telefone válido.");
    }
}

function verificaEmail() {
    var email = document.getElementById("email").value;
    var regex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/i;
    var correto = email.match(regex);

    if ((email != correto) && (email)){
        verificaAlerta = true;
        alert("Insira um e-mail válido");
    }
}

function verificaDadosEncomenda(){

    var massa = document.querySelector('.ingrediente-massa input[type="radio"]:checked')
    var recheio = document.querySelector('.ingrediente-recheio input[type="radio"]:checked')
    var classeRecheio = document.querySelector(".ingrediente-recheio")


    if (!massa || ((getComputedStyle(classeRecheio).visibility == "visible") && !recheio)) {
        verificaAlerta = true;
        alert("Preencha as informações obrigatórias.");
    }
}


function ingredienteCategoria() {
    var categoria = document.getElementById("produto");
    var tipo = categoria.value;
    
    if (tipo != 'cupcake'){
        const saborMassa = document.getElementsByClassName('saborMassa3');
    
       for (let i = 0; i < saborMassa.length; i++) {
            saborMassa[i].style.visibility = "visible";
        }

        const saborRecheio = document.getElementsByClassName('saborRecheio5');
    
       for (let i = 0; i < saborRecheio.length; i++) {
            saborRecheio[i].style.visibility = "hidden";
        }

    }

    else{
        const saborMassa = document.getElementsByClassName('saborMassa3');
     
        for (let i = 0; i < saborMassa.length; i++) {
            saborMassa[i].style.visibility = "hidden";
         }

         const saborRecheio = document.getElementsByClassName('saborRecheio5');
    
       for (let i = 0; i < saborRecheio.length; i++) {
            saborRecheio[i].style.visibility = "visible";
        }
    } 

    if (tipo === 'doce'){
        const recheio = document.getElementsByClassName('ingrediente-recheio');
    
       for (let i = 0; i < recheio.length; i++) {
            recheio[i].style.visibility = "hidden";
        } 

    }

    else{
        const recheio = document.getElementsByClassName('ingrediente-recheio');
    
       for (let i = 0; i < recheio.length; i++) {
            recheio[i].style.visibility = "visible";
        }
    }
         
}
