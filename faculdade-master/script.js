document.getElementById("CPF").addEventListener("input", function() {
    var i = document.getElementById("CPF").value.length;
    var str = document.getElementById("CPF").value
    if (isNaN(Number(str.charAt(i-1)))) {
        document.getElementById("CPF").value = str.substr(0, i-1)
    }
});

document.getElementById("CPF").addEventListener("keyup", function(e) {
    e.preventDefault();
    var val = e.target.value;
    val = val.replace(/\D/g, '');
    val = val.replace(/(\d{3})(\d)/, '$1.$2');
    val = val.replace(/(\d{3})(\d)/, '$1.$2');
    val = val.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = val;
});

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Para prevenir o envio do formulário

    var nome = document.getElementById("nome").value;
    var RA = document.getElementById("RA").value;
    var date = document.getElementById("date").value;
    var CPF = document.getElementById("CPF").value;
    var RG = document.getElementById("RG").value;
    var nota = document.getElementById("nota").value;
    var email = document.getElementById("email").value;
    var curso = document.getElementById("curso").value;
    var Logadouro = document.getElementById("Logadouro").value;
    var Numero = document.getElementById("Numero").value;
    var Bairro = document.getElementById("Bairro").value;
    var Complemento = document.getElementById("Complemento").value;
    var CEP = document.getElementById("CEP").value;
    var Estado = document.getElementById("Estado").value;
    var Cidade = document.getElementById("Cidade").value;

    console.log("Nome: " + nome);
    console.log("RA: " + RA);
    console.log("Data de Nascimento: " + date);
    console.log("CPF: " + CPF);
    console.log("RG: " + RG);
    console.log("Nota no vestibular: " + nota);
    console.log("Email: " + email);
    console.log("Curso: " + curso);
    console.log("Logadouro: " + Logadouro);
    console.log("Número: " + Numero);
    console.log("Bairro: " + Bairro);
    console.log("Complemento: " + Complemento);
    console.log("CEP: " + CEP);
    console.log("Estado: " + Estado);
    console.log("Cidade: " + Cidade);
});
