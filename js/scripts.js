// ===== INDEX =====
function paginaIndex() {
    const progressao = document.getElementById("progressao")
    const recrutamento = document.getElementById("recrutamento")

    if (!progressao || !recrutamento)return;
    /*
    Significa: "Se não existir a variavel (progressao) OU não existir a variavel(recrutamento), pare a função aqui". Isso evita de outras páginas do projeto executarem esse script atoa e até ocasionar erros por causa disso. 
    */

    // if (progressao) serve para "se o elemento progressao existir, então executa o código dentro do bloco {bloco}"
    if (progressao) {
        progressao.addEventListener("click", (e) => {
            e.preventDefault(); // Evita do link abrir outra página, mesmo sendo um <a>
            alert("📜 Progressão em breve")
        })
    }

    if (recrutamento) {
        recrutamento.addEventListener("click", (e) => {
            e.preventDefault();
            alert("📢 Recrutamento em breve")
        })
    }
}
paginaIndex() /* Chama a função para ser executada, sem isso tudo que está dentro da função não vai funcionar. Essa função foi criada para separar o conteudo de js da pagina index do js das outras páginas, isso será feito para outras páginas também como a paginaGuias e etc. Outro detalhe, o código funciona sem estar "envelopado" nessa function */

// ===== GUIAS =====
function paginaGuias() {
    const botoes = document.querySelectorAll(".classe")
    const conteudo = document.getElementById("conteudo")

    if (!botoes.length || !conteudo) return; 
    /* 
    Aqui é o mesmo caso da função da página Index, porém utilizamos o .length em (botoes) pois se trata de uma lista de botões (querySelectorAll) e sem isso o comando não funcionaria. 
    */

    // Essa primeir linha significa: “Para cada botão dentro de botoes, execute uma função usando esse (botao) atual.”
    // forEach = percorre cada item da lista botoes
    botoes.forEach((botao) => {
        botao.addEventListener("click", () => {
            const classe = botao.dataset.classe; 

            /* 
            Tradicional	(antigo)    Arrow Function (moderno)
            function()	            ()=>
            mais longa	            mais curta 

            Não precisa mais escrever function apenas o atributo e depois a seta (arrow).
            */

            /* 
            O dataset.classe pega o valor de um atributo HTML do elemento no seu caso, ele está lendo o valor que você colocou em data- que é classe:"guerreiro" no caso do botão guerreiro.
            Você está dizendo:
            “Ei botão quando eu clicar, me dá o valor do atributo data-classe que está aí em você ex: "guerreiro".”
            Esse valor que colocamos no data-classe é os nomes de cada objeto criado como guerreiro, druida, então você vincula seu botão com um objeto js que contém as irformações sobre ele (um mini banco de dados).
            */

            conteudo.innerHTML = ` 
            <h3> ${guias[classe].titulo} </h3>
            ${guias[classe].texto} 
            ` 
            // <h3> ${guias[classe].titulo} </h3> usa tag porque não existe no objeto e nem é recomendado em caso de titulos.

            // ${guias[classe].texto} não precisa usar tag <p> aqui, pois já existe dentro do objeto

            // innerHTML coloca html dentro de um elemento, no caso "conteudo" que é um id de uma div
            
            /*  
            ${...} → significa: “executa esse JavaScript aqui dentro”
            guias → é um objeto (tipo um banco de dados simples)
            [classe] → acessa dinamicamente uma chave (ex: "guerreiro")
            .titulo → pega o título daquela classe 
            .texto → pega o texto daquela classe
            */

            // Adicionando funcionalidade mover tela ao conteúdo
            conteudo.scrollIntoView ({
                behavior: "smooth",
                block: "start"    
            })
            /* 
            🔹 scrollIntoView()
            👉 Move a tela até o elemento (conteudo)
            🔹 behavior: "smooth"
            👉 Faz a rolagem suave (fica profissional)
            🔹 block: "start"
            👉 Alinha o topo do conteúdo com o topo da tela
            */
        })
    })
}
paginaGuias() 

    /* 
    botoes → lista de elementos
    botao → um elemento da lista
    forEach → percorre um por um 

    O parâmetro botao recebe cada elemento da lista botoes
    ----------------------||--------------------------------
    FLUXO COMPLETO:
    1 - Usuário clica no botão
    2 - O evento "click" é disparado
    3 - A função é executada
    4 - O JS pega o botão (botao)
    5 - Lê o data-classe
    6 - Guarda em classe
    7 - O JS usa classe para acessar o objeto guias
    8 - Pega o titulo e o texto da classe escolhida
    9 - Monta um HTML com essas informações (template string)
    10 - Usa innerHTML para inserir esse HTML dentro da <div id="conteudo">
    11 - O conteúdo da página é atualizado na tela
*/