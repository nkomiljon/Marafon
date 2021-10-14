// let helloWorld = 'Hello world!';
// console.log(helloWorld);


const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['k47'],
    attac: function() {
        console.log(`${this.name} Fight`);
    }
}

const player2 = {
    name: 'Zubsero',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['sword'],
    attac: function() {
        console.log(`${this.name} Fight`);
    }
}

function createPlayer(player, player, obj) {
    const arenas = document.querySelector('.arenas');
    const player1 = document.createElement('div');
    const progressbar = document.createElement('div');
    const life = document.createElement('div');
    const name = document.createElement('div');
    const character = document.createElement('div');
    const img = document.createElement('img');

    player1.classList.add('player1');
    progressbar.classList.add('progressbar');
    life.classList.add('life');
    life.style.width = player.hp + '%';
    life.style.width = '100%';
    name.classList.add('name');
    name.textContent = `${player.name}`;
    character.classList.add('character');
    img.src = `${player.img}`;

    arenas.appendChild(player1);
    player1.appendChild(progressbar);
    progressbar.appendChild(life);
    progressbar.appendChild(name);

    player1.appendChild(character);
    character.appendChild(img);


}
createPlayer('player1', player1);
createPlayer('player2', player2);