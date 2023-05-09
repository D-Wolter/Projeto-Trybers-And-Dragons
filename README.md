# Projeto-Trybers-And-Dragons
Neste projeto foi desenvolvido os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG.

## Stack utilizada
Back-end: Javascript, Typescript, Node.js, POO, SOLID, Docker

## Rodando O Docker
Rode o serviço node com o comando ```docker-compose up -d```.

Esse serviço ira inicializar um container chamado ```trybers_and_dragons```.
A partir daqui você pode rodar o container ```trybers_and_dragons``` via CLI ou abri-lo no VS Code.
Use o comando ```docker exec -it trybers_and_dragons bash```.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
Instale as dependências "Caso existam" com ```npm install```

Atenção : Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

# Criando Batalhas
## Batalha PVP (Player vs Player)
Para criar uma Batalha PVP, voce precisa criar duas instancias de players. Dica: Voce pode upar o level dos personagens com o metodo `levelUp`.

```javascript
const player1 = new Character('Harold');
const player2 = new Character('Any');
player1.levelUp();
```
Criando a instancia de PVP, voce precisa instanciar a batalha PVP da seguinte forma:
```javascript
const pvp = new PVP(player1, player2);
```
## Batalha PVE (Player vs "Ambiente")
Para criar uma Batalha PVE, voce precisa ter um player e um `array` de monsters( no array pode ser inserido a quantidade que desejar de `monstros` e `dragons`). Dica: Voce pode upar o level dos personagens com o metodo `levelUp`.

```javascript
const player1 = new Character('Harold');
const monster = new Monster();
```
Criando a instancia de PVE, voce precisa instanciar a batalha PVE da seguinte forma:
```javascript
const pve = new PVE(player1, [monster]);
```
