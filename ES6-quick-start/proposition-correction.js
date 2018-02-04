const players = [
  { number: 6, name: "Verratti", age: 25 },
  { number: 10, name: "Neymar Jr.", age: 26 },
  { number: 29, name: "Mbappe", age: 19 },
  { number: 9, name: "Cavani", age: 30 }
];

// Ex 0 : Logger la liste des joueurs
console.log(players);

// Ex 1 : Ajouter un identifiant à chaque joueur
const addId = players.map((p, i) => ({ ...p, id: i }));
console.log("Ex1 : ", addId);

// Ex 2 : Retourner le nom d'un joueur en fonction de son nom, 'NOT_EXIST' sinon
const numPlayer = nb => {
  const player = players.find(p => p.number === nb);
  return player ? player.name : "NOT_EXIST";
};
console.log("Ex2 : ", numPlayer(1));
console.log("Ex2 : ", numPlayer(10));

// Ex 3 : Retourner un tableau contenant les noms de joueurs dont le numéro
// est inférieur à 10
const infTen = players.filter(p => p.number < 10).map(p => p.name);
console.log("Ex 3 : ", infTen);

// Ex 4 : Calculer la moyenne d'âge des joueurs
const size = players.length;
const ageAve = players.reduce((acc, p) => (acc += p.age / size), 0);
console.log("Ex 4 : ", ageAve);

// Ex 5 : Afficher l'ensemble des attributs du Xème joueur du tableau, 'NOT_EXIST' sinon
const attr = i => (i < size ? Object.keys(players[i]).reduce((_, v) => _ + `${players[i][v]} `, "") : "NOT_EXIST");
console.log("Ex 5 : ", attr(2));
console.log("Ex 5 : ", attr(5));
