let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box 
}
let direction = "rigth";

function criarBG() {
    context.fillStyle = "Lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}



function criarCobrinha(){
    for(i=0; i< snake.length; i++){
        SVGTextContentElement.fillStyle = "green";
        context.fillRect(snake[1].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left")  snakeX -= box;
    if(direction == "up")   snakey -= box;
    if (direction == "down") snakey += box;

    snake.pop();

    let newHead = {
        x: snekeX,
        y: snakey

    }

    snake.unshift(newHead);
}


let jogo = setInterval(iniciarJogo, 100);

