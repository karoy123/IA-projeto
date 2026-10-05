const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " A batalha de rima (BDA10) vai começar e terá varios Mcs da geração antiga, que estavam aposentados e é sua primeira vez rimando.",
        alternativas: [
            {
                texto: "estou nervoso(a)!",
                afirmacao: "afirmacao"
            },
            {
                texto: "isso vai ser maravilhoso!",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "com isso seu nome é chamado é a primeira vez que você rima vocês tiram par ou impar e você perde eles começam atacando. qual você escolhe?.",
        alternativas: [
            {
                texto:" começar com uma resposta assim que o adverario atacar, mesmo não sabendo direitofazer uma punch.",
                afirmacao:"afirmacao"
            },
            {
                texto: "deixar para o vetereno do trio responder o ataque, já que ele tem mais experiencia.",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Após a batalha começar, o adversário fala sobre o desemprego aumentar por causa da IA e joga a culpa na sua geração. o que você faz?",
        alternativas: [
            {
                texto:"deixar que o companheiro fassa esse verso defendendo a sua geração e a importancia da tecnologia.",
                afirmacao:"afirmacao"
            },
            {
                texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Ao final do roud,foi pro empate a plateia vibra querendo 4 roud dependendo dos jurados os pontos podem ser seus, o que você faz ?",
        alternativas: [
            {
                texto:"aceita o quarto roud, mesmo sabendo que pode perder se caso não tiver uma construção ou rimas boa.",
                afirmacao:"afirmacao"
            },
            {
                texto:"simplesmente aceita o resultado e diz que não aceita mais um roud.",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: " È a grande final. o nome do seu trio é chamado a plateia vibra o que você faz?",
        alternativas: [
            {
                texto: "comemora primeiramente com seu trio curtindo o momento, depois comprimenta os outros .",
                afirmacao:"afirmacao"
            },
            {
                texto: "sai correndo pelo octócno e comprimenta os adversarios, antes de voltar e comemorar com o trio.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta( );
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049 você se consagrou um(a) grande mc de batalha...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "aquele dia você ganhou porém acabou desistindo de ser mc."; 
}

function aleatorio (lista){
    const posicao = math.floor(random()* lista.length);
    return[posicao];
}

mostraPergunta();























































































































