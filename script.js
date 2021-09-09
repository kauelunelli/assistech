let btn = document.querySelector('span');

btn.addEventListener('click', function() {
    let input = document.querySelector('#password');
    console.log(input)

    if(input.getAttribute('type') == 'password') {
        console.log('Senha')
        input.setAttribute('type', 'text');
        btn.className = 'bi bi-eye-slash-fill'
    } else {
        console.log('Não Senha')
        input.setAttribute('type', 'password');
        btn.classList.remove(".bi.bi-eye-slash-fill");
        btn.className = 'bi bi-eye-fill'
    }

});

// function changebtn(btn) {
//     btn.classList.toggle('bi bi-eye-slash-fill')
// }

// function mostrar1() {
//     var changeico = document.getElementById("password");

//     if (changeico.type == "password") {
//     changeico.type = "text";
//     } else {
//         changeico.type = "password";
//     }

//     changeico.type = changeico.type; //aplica o tipo que ficou no primeiro campo


//     var btn = document.querySelector(".bi-eye-fill"); //obter o botão

//     if (botao.classList.contains("glyphicon-eye-open")) { //se tem olho aberto
//       botao.classList.remove("glyphicon-eye-open"); //remove classe olho aberto
//       botao.classList.add("glyphicon-eye-close"); //coloca classe olho fechado
//     } else { //senão
//       botao.classList.remove("glyphicon-eye-close"); //remove classe olho fechado
//       botao.classList.add("glyphicon-eye-open"); //coloca classe olho aberto
//     }

//   }