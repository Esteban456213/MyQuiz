let preguntas = [
    {
        pregunta: "¿Qué representa un diagrama de flujo?",
        respuestas: ["Un lenguaje de programación", "Un sistema operativo", "Un algoritmo gráfico", "Una base de datos"],
        correcta: 2
    },
    {
        pregunta: "¿Qué lenguaje se usa para el diseño web?",
        respuestas: ["Python", "CSS", "C++", "Java"],
        correcta: 1
    },
    {
        pregunta: "¿Qué significa HTML?",
        respuestas: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Management Language", "Hyperlink Text Main Language"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es la función principal de JavaScript en una página web?",
        respuestas: ["Dar estilos a la página", "Crear interactividad", "Diseñar bases de datos", "Estructurar el contenido"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es la extensión de los archivos CSS?",
        respuestas: [".css", ".html", ".js", ".py"],
        correcta: 0
    }
];

let preguntaActual = 0;
let puntaje = 0;

function startGame() {
    preguntaActual = 0;
    puntaje = 0;
    document.getElementById("question-container").style.display = "block";
    document.getElementById("score").style.display = "block";
    mostrarPregunta();
}

function mostrarPregunta() {
    if (preguntaActual >= preguntas.length) {
        alert("Juego terminado. Puntaje final: " + puntaje);
        return;
    }

    let q = preguntas[preguntaActual];
    document.getElementById("question-text").innerText = q.pregunta;

    let botones = document.getElementsByClassName("answer-btn");
    for (let i = 0; i < botones.length; i++) {
        botones[i].innerText = q.respuestas[i];
        botones[i].setAttribute("onclick", "checkAnswer(" + i + ")");
    }
}

function checkAnswer(respuesta) {
    if (respuesta === preguntas[preguntaActual].correcta) {
        puntaje += 10;
        alert("✅ Respuesta correcta!");
    } else {
        alert("❌ Incorrecto.");
    }

    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        alert("Juego terminado. Tu puntaje es: " + puntaje);
        document.getElementById("question-container").style.display = "none";
    }

    document.getElementById("score").innerText = "Puntos: " + puntaje;
}
