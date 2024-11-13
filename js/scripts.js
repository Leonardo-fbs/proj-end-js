var size = parseInt(window.screen.width);
var sizeHeight = parseInt(window.screen.height);

//Ajustes Icones
if(size <= 360){
    window.onload = function alterarIcon(){
        
        var icons = document.querySelectorAll("#social_network i ");

        for (i = 0; i < icons.length; i++) {
            icons[i].classList.remove("fa-5x");
        }
    }

}else if(size >= 360 && size <= 768){
    window.onload = function alterarIcon(){
        
        var icons = document.querySelectorAll("#social_network i ");

        for (i = 0; i < icons.length; i++) {
            icons[i].classList.remove("fa-3x");
            icons[i].classList.add("fa-5x");
        }

    }

   
} else {
    window.onload = function alterarIcon(){
        
        var icons = document.querySelectorAll("#social_network i ");

        for (i = 0; i < icons.length; i++) {
            icons[i].classList.remove("fa-3x");
            icons[i].classList.remove("fa-5x");
            icons[i].classList.add("fa-4x");
        }

    }
}

function esconderAtalhos() {
    document.getElementById('shortcut').style.display = 'none';
} 
 
function mostrarAtalhos() {
    document.getElementById('shortcut').style.display = 'block';
} 

function expandirCard(id){
    var title = "#"+id+" h2"
    var card = "#"+id+" p";
    var customTitle = document.querySelectorAll(title);
    var customSon = document.querySelectorAll(card);


    if(size < 768){

        document.getElementById(id).style.padding = "0px 0px 20px 0px";
        document.getElementById(id).style.backgroundColor = "rgba(210, 210, 210)";
        document.getElementById(id).style.Color = "green";

        for (i = 0; i < customTitle.length; i++) {
            customTitle[i].style.color = "rgb(0,50,0)";
        }

        for (i = 0; i < customSon.length; i++) {
            customSon[i].style.display = "block";
            customSon[i].style.width = "100%";
            customSon[i].style.color = "rgb(0,50,0)";
        }
    } else {}
}

function retrairCard(id) {
    var title = "#"+id+" h2"
    var card = "#"+id+" p";
    var customTitle = document.querySelectorAll(title);
    var customSon = document.querySelectorAll(card);

    if(size < 768){
        

        document.getElementById(id).style.padding = "0px";
        document.getElementById(id).style.backgroundColor = "black";

        for (i = 0; i < customTitle.length; i++) {
            customTitle[i].style.color = "white";
        }

        for (i = 0; i < customSon.length; i++) {
            customSon[i].style.display = "none";
        }
    } else{}
}

function validar() { 

    var warning = new Array(0);
    var warningStyle = new Array(0);
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var birth = document.getElementById('birth').value;
    var cell = document.getElementById('cell').value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value;
    var road = document.getElementById('road').value;
    var n = document.getElementById('n').value;
    var uf = document.getElementById('uf').value;
    var information = document.getElementById('information').value;
    var proof = document.getElementById('proof').value;
    var proof_img = document.getElementById('file_img').value;
    var nickname = document.getElementById('nickname').value;
    var password = document.getElementById('password').value;

    if(name != "" && age != "" && cell != "" && email != "" && city != "" && road != "" && n != "" && uf != "" && proof != "" && nickname != "" && password != ""){
        window.alert('Bem vindo ao sistema, você pode preencher os campos opcionais depois.');
    }else{
        document.getElementById("birth").style.borderBottom = 'solid 2px #004684';
        document.getElementById("information").style.borderBottom = 'solid 2px #004684';
        document.getElementById("proof_img").style.borderBottom = 'solid 2px #002A9D';

        
        if(name == ""){
            warning.push("nome");
            document.getElementById("name").style.borderBottom = 'solid 2px darkred';
        }
        if(age == "" || age<0 && age>100){
            warning.push("idade");
            document.getElementById("age").style.borderBottom = 'solid 2px darkred';
        }
        if(cell == ""){
            warning.push("celular");
            document.getElementById("cell").style.borderBottom = 'solid 2px darkred';
        }
        if(email == ""){
            warning.push("email");
            document.getElementById("email").style.borderBottom = 'solid 2px darkred';
        }
        if(city == ""){
            warning.push("cidade");
            document.getElementById("city").style.borderBottom = 'solid 2px darkred';
        }
        if(road == ""){
            warning.push("rua");
            document.getElementById("road").style.borderBottom = 'solid 2px darkred';
        }
        if(n == ""){
            warning.push("n");
            document.getElementById("n").style.borderBottom = 'solid 2px darkred';
        }
        if(uf == ""){
            warning.push("uf");
            document.getElementById("uf").style.borderBottom = 'solid 2px darkred';
        }
        if(proof == ""){
            warning.push("comprovante");
            document.getElementById("proof").style.borderBottom = 'solid 2px darkred';
        }
        if(nickname == ""){
            warning.push("nickname");
            document.getElementById("nickname").style.borderBottom = 'solid 2px darkred';
        }
        if(password == ""){
            warning.push("senha");
            document.getElementById("password").style.borderBottom = 'solid 2px darkred';
        }

        if(warning != ""){
            alert("É necessário preencher o campo" + warning.join(", ") + ". \n\nOs campos em azul são opcionais.");
        }
    }
}

function abrirModal() {
    var curtain = document.getElementById('curtain');
    curtain.style.backgroundColor = 'rgba(0,0,0,0.5)';
    curtain.style.height = sizeHeight+'px';
    curtain.style.marginTop = '-118%';
    curtain.style.position = 'fixed';
    curtain.style.Top = '0';
    curtain.style.zIndex = '100';
    curtain.style.display = 'block';




    document.querySelector('form').style.transform = 'transalteX(-50%) transalteY(-50%)';
    document.querySelector('form').style.top = '50%';
    document.querySelector('form').style.left = '50%';
    document.querySelector('form').style.transform = 'scale(0.9)';
    document.querySelector('form').style.zIndex = '100';




    function removerPalavra(){
        
        document.getElementById("proof").innerHTML = '&#128193; ';
        document.getElementById("labelBirth").innerHTML = 'Nascimento:';
        document.querySelector("#file_img img").setAttribute('src', 'img/user_green.png');

    } removerPalavra();
}

function fecharModal() {
    var curtain = document.getElementById('curtain');
    curtain.style.backgroundColor = '';
    curtain.style.height = '';
    curtain.style.marginTop = '';
    curtain.style.position = '';
    curtain.style.Top = '';
    curtain.style.zIndex = '';
}