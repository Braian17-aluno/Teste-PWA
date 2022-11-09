let formulario = document.querySelector("#formulario");
let erro1 = document.querySelector("#erro1");
let erro2 = document.querySelector("#erro2");
let erro3 = document.querySelector("#erro3");
let erro4 = document.querySelector("#erro4");
let erro5 = document.querySelector("#erro5");
let erro6 = document.querySelector("#erro6");
let erro7 = document.querySelector("#erro7");
let nome = document.querySelector("#nome");
let cpf = document.querySelector("#cpf");
let senha = document.querySelector("#senha");
let Csenha = document.querySelector("#Csenha");
let profissao = document.querySelector("#pro");
let estado = document.querySelector("#estado")
let exp = document.querySelector("#exp");
let botao1 = document.querySelector("#botao1");
let output = document.getElementById("output");
const radio = document.getElementsByName("est");
//let botao2 = document.querySelector("#botao2");
//let bot = document.querySelector("#botao1");
//let parent = bot.parentNode;
let teste = true;
let teste2 = true
let count=0;
let count2=0;

//botao1.addEventListener("click", (e)=>{verifica1(e)});


function verifica1(){
    //apaga as mensagens de erro

    if (document.querySelector("#erroNome") != null) {
        nome.style.borderColor = "black";
    }
    if (document.querySelector("#erroCpf") != null) {
        cpf.style.borderColor = "black";
    }
    if (document.querySelector("#erroSenha") != null) {
        senha.style.borderColor = "black"; 
    }
    if (document.querySelector("#erroCSenha") != null) {
        Csenha.style.borderColor = "black"; 
    }
    /*if (document.querySelector("#erroPro") != null) {
        profissao.style.borderColor = "black"; 
    }
    if (document.querySelector("#erroExp") != null) {
        exp.style.borderColor = "black"; 
    }
    */
    document.querySelector("#erro1").innerHTML="";
    document.querySelector("#erro2").innerHTML="";
    document.querySelector("#erro3").innerHTML="";
    document.querySelector("#erro4").innerHTML="";
    //document.querySelector("#erro5").innerHTML="";
    //document.querySelector("#erro6").innerHTML="";
    //document.querySelector("#erro7").innerHTML="";

    //Chama os testes
    count=0;
    vNome();
    vCpf();
    vSenha();
    vCSenha();
    //vProf();
    //vEst();
    //vEXP()
    if (count==0){
        if (teste == true){
            novoF();
            teste = false
        }
    }
}


function vNome() {
    
    if (nome.value == "") {
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroNome");
            let erroTexto = document.createTextNode("Preencha o campo 'nome'.");
            let br = document.createElement("br")
            erro1.appendChild(br)
            erroDiv.appendChild(erroTexto);
            erro1.appendChild(erroDiv);
            let ln = document.createElement("br");
            erro1.appendChild(ln);
            nome.style.borderColor = "red";
            nome.focus();
            count++;
    }
}
function vCpf() {
    
    if (cpf.value == "" || cpf.value.length != 11) {
        
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroCpf");
            let erroTexto = document.createTextNode("O campo cpf deve ter 11 caracteres.");
            let br = document.createElement("br")
            erro2.appendChild(br)
            erroDiv.appendChild(erroTexto);
            erro2.appendChild(erroDiv);
            let ln = document.createElement("br");
            erro2.appendChild(ln);
            cpf.style.borderColor = "red";
            cpf.focus();
            count++;
        }
    }
function vSenha() {
    
    if (senha.value == "" || senha.value.length != 8) {
        
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroSenha");
                let erroTexto = document.createTextNode("A senha deve ter 8 caracteres.");
                let br = document.createElement("br")
                erro3.appendChild(br)
                erroDiv.appendChild(erroTexto);
                erro3.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro3.appendChild(ln);
                senha.style.borderColor = "red";
                senha.focus();
                count++;
        }  
    }
    function vCSenha() {
    
    if (Csenha.value != senha.value) {
        
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroCSenha");
                let erroTexto = document.createTextNode("Os campos de senha são diferentes.");
                let br = document.createElement("br")
                erro4.appendChild(br)
                erroDiv.appendChild(erroTexto);
                erro4.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro4.appendChild(ln);
                Csenha.style.borderColor = "red";
                Csenha.focus();
                count++;
        }  
    }
    /*
    function vProf(e) {
    
        if (profissao.value == "") {
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroPro");
                let erroTexto = document.createTextNode("Preencha o campo 'profissão'.");
                let br = document.createElement("br")
                erro5.appendChild(br)
                erroDiv.appendChild(erroTexto);
                erro5.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro5.appendChild(ln);
                profissao.style.borderColor = "red";
                profissao.focus();
                count++;
        }
    }

    function vEst(e) {
        if (estado.checked == false) {
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroEst");
                let erroTexto = document.createTextNode("Preencha o campo 'estado'.");
                let br = document.createElement("br")
                erro6.appendChild(br)
                erroDiv.appendChild(erroTexto);
                erro6.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro6.appendChild(ln);
                estado.focus()
                count++;
        }
    }
    function vEXP(e) {
    
        if (exp.value == "" || exp.value < 0 || exp.value > 50) {
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroExp");
                let erroTexto = document.createTextNode("Você tem que ter entre 0 e 50 anos de experiência");
                erroDiv.appendChild(erroTexto);
                erro7.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro7.appendChild(ln);
                exp.style.borderColor = "red";
                exp.focus();
                count++;
            }  
        }
        */


function novoF() {
    let i = 0;
    while (i < 14) {
    document.getElementsByClassName("Null").remover.removeAttribute("class","Null");
    i++
    }
}
        /*
        //profissão
        let prof = document.createElement("label");
        prof.setAttribute("for","pro");
        let ProTexto = document.createTextNode("Profissão:");
        prof.appendChild(ProTexto);
        let inp1 = document.createElement("input");
        inp1.setAttribute("type","text");
        inp1.setAttribute("id","pro");
        inp1.setAttribute("name","profissão");
        let erro5 = document.createElement("div");
        erro5.setAttribute("id","erro5");
        formulario.appendChild(prof);
        formulario.appendChild(inp1);
        formulario.appendChild(erro5);
        let ln = document.createElement("br");
        formulario.appendChild(ln);
        //Estado
        let div1 = document.createElement("div")
        let divEst = document.createElement("div")
        let EstTexto = document.createTextNode("Estado (onde trabalha):");
        divEst.appendChild(EstTexto);
        div1.appendChild(divEst);
        div1.appendChild(ln);
        //RS
        let inp2 = document.createElement("input");
        inp2.setAttribute("type","radio");
        inp2.setAttribute("id","estado");
        inp2.setAttribute("name","est");
        let RS = document.createElement("label");
        RS.setAttribute("for","estado");
        let EstTexto2 = document.createTextNode("RS");
        RS.appendChild(EstTexto2);
        div1.appendChild(inp2);
        div1.appendChild(RS);
        //SC
        let inp3 = document.createElement("input");
        inp3.setAttribute("type","radio");
        inp3.setAttribute("id","estado");
        inp3.setAttribute("name","est");
        let SC = document.createElement("label");
        SC.setAttribute("for","estado");
        let EstTexto3 = document.createTextNode("SC");
        SC.appendChild(EstTexto3);
        div1.appendChild(inp3);
        div1.appendChild(SC);
        //PR
        let inp4 = document.createElement("input");
        inp4.setAttribute("type","radio");
        inp4.setAttribute("id","estado");
        inp4.setAttribute("name","est");
        let PR = document.createElement("label");
        PR.setAttribute("for","estado");
        let EstTexto4 = document.createTextNode("PR");
        PR.appendChild(EstTexto4);
        div1.appendChild(inp4);
        div1.appendChild(PR);
        //erro6
        let erro6 = document.createElement("div");
        erro6.setAttribute("id","erro6");
        div1.appendChild(erro6);
        formulario.appendChild(div1);
        formulario.appendChild(ln);
        //Anos de Exp
        let exp = document.createElement("label");
        exp.setAttribute("for","exp");
        let EXPTexto = document.createTextNode("Anos de Experiência");
        exp.appendChild(EXPTexto);
        let inp5 = document.createElement("input");
        inp5.setAttribute("type","number");
        inp5.setAttribute("id","exp");
        inp5.setAttribute("name","AExp");
        let erro7 = document.createElement("div");
        erro7.setAttribute("id","erro7");
        formulario.appendChild(exp);
        formulario.appendChild(inp5);
        formulario.appendChild(erro7);
        let inpENV = document.createElement("input");
        inpENV.setAttribute("type","button");
        inpENV.setAttribute("id","botao2");
        inpENV.setAttribute("onclick","verifica2()")
        inpENV.setAttribute("class","Envio");
        inpENV.setAttribute("value","Enviar");
        formulario.appendChild(inpENV);
        */

/*
if (teste == true) {
    let removed = parent.removeChild(bot);
    removed.removeAttribute("id");
    removed.setAttribute("id","botao2");
    removed.addEventListener("click", verifica2);
    formulario.appendChild(removed);
}
*/
    function verifica2(){
        let teste2 = true;
    if (document.querySelector("#erroNome") != null) {
        nome.style.borderColor = "black";
    }
    if (document.querySelector("#erroCpf") != null) {
        cpf.style.borderColor = "black";
    }
    if (document.querySelector("#erroSenha") != null) {
        senha.style.borderColor = "black"; 
    }
    if (document.querySelector("#erroCSenha") != null) {
        Csenha.style.borderColor = "black"; 
    }
    if (document.querySelector("#erroPro") != null) {
        profissao.style.borderColor = "black"; 
    }
    if (document.querySelector("#erroExp") != null) {
        exp.style.borderColor = "black"; 
    }
    document.querySelector("#erro1").innerHTML="";
    document.querySelector("#erro2").innerHTML="";
    document.querySelector("#erro3").innerHTML="";
    document.querySelector("#erro4").innerHTML="";
    document.querySelector("#erro5").innerHTML="";
    document.querySelector("#erro6").innerHTML="";
    document.querySelector("#erro7").innerHTML="";
    count=0;
    count2=0;
    vNome();
    vCpf();
    vSenha();
    vCSenha();
    vProf();
    vEst();
    vEXP();
    if (count2==0 && count == 0){
        let nomeF = nome.value;
        let cpfF = cpf.value;
        let senhaF = senha.value;
        let profF = profissao.value;
        let estadoF;
        if (radio[0].checked == true && radio[1].checked == false && radio[2].checked == false) {
            estadoF = "RS";
        }
        if (radio[0].checked == false && radio[1].checked == true && radio[2].checked == false) {
            estadoF = "SC";
        }
        if (radio[0].checked == false && radio[1].checked == false && radio[2].checked == true) {
            estadoF = "PR";
        }
        let Axp = exp.value;
        output.innerHTML =  "Seus dados:" + "<br>" + "Nome: " + nomeF + "<br>" + "CPF: " + cpfF +"<br>" + "Senha: " + senhaF + "<br>" + "Profissão: " + profF + "<br>" + "Estado: " + estadoF + "<br>" + "Anos de Exp.: " + Axp;

    }
}


function vProf() {
    
        if (profissao.value == "") {
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroPro");
                let erroTexto = document.createTextNode("Preencha o campo 'profissão'.");
                let br = document.createElement("br")
                erro5.appendChild(br)
                erroDiv.appendChild(erroTexto);
                erro5.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro5.appendChild(ln);
                profissao.style.borderColor = "red";
                profissao.focus();
                count2++;
        }
    }

    function vEst() {
        if (radio[0].checked == false && radio[1].checked == false && radio[2].checked == false) {
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroEst");
                let erroTexto = document.createTextNode("Preencha o campo 'estado'.");
                let br = document.createElement("br")
                erro6.appendChild(br)
                erroDiv.appendChild(erroTexto);
                erro6.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro6.appendChild(ln);
                estado.focus()
                count2++;
        }
    }
    function vEXP() {
    
        if (exp.value == "" || exp.value < 0 || exp.value > 50) {
                let erroDiv = document.createElement("div");
                erroDiv.setAttribute("id","erroExp");
                let erroTexto = document.createTextNode("Você tem que ter entre 0 e 50 anos de experiência");
                erroDiv.appendChild(erroTexto);
                erro7.appendChild(erroDiv);
                let ln = document.createElement("br");
                erro7.appendChild(ln);
                exp.style.borderColor = "red";
                exp.focus();
                count2++;
            }  
    }
        /*
            <label for="pro">Profissão:</label>
            <input type="text" id="pro" name="profissão"> <br>
            <div id="erro5"></div><br>

            <div> div1
            <div>Estado (Onde trabalha):</div> divEst 
            <br> ln
            <input type="radio" id="estado" name="est"> inp2
            <label for="estado">RS</label> RS

            <input type="radio" id="estado" name="est">
            <label for="estado">SC</label>

            <input type="radio" id="estado" name="est">
            <label for="estado">PR</label>
            <div id="erro6"></div>
            </div>
            <br>
            <label for="exp">Anos de Experiência:</label>
            <input type="number" id="exp" name="AExp"><br>
            <div id="erro7"></div>
            <input type="button" id ="botao" onclick="verifica2()" class="Envio" value="Enviar">
*/
