var verificaAlerta = false;

function verificaEncomenda() {
    verificaAlerta = false;
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    
    verificaEmail();
    verificaCamposObrigatorios();

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

function ingredienteCategoria() {
    var categoria = document.getElementById("produto");
    var tipo = categoria.value;


    if (tipo === 'cupcake'){
       const elementosClasse = document.getElementsByClassName('sabor3');
    
       for (let i = 0; i < elementosClasse.length; i++) {
            elementosClasse[i].style.visibility = "hidden";
        }
    }

    else{
        const elementosClasse = document.getElementsByClassName('sabor3');
    
       for (let i = 0; i < elementosClasse.length; i++) {
            elementosClasse[i].style.visibility = "visible";
        }
    }
}

