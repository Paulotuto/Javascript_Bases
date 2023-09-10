// Définition de la fonction helloWorld qui affiche "hello world !" dans la console.
function helloWorld() {
  console.log('hello world !');
}

// Définition de la fonction helloPrenom qui prend un paramètre prenom et affiche "hello " suivi du prénom.
function helloPrenom(prenom) {
  console.log(`hello ${prenom}`);
}

// Définition de la fonction calculPrixTTC qui calcule le prix TTC en fonction de la TVA et du prix HT.
function calculPrixTTC(TVA = 20, prixHT) {
  TVA /= 100;
  return (prixHT + (prixHT * TVA));
}

// Appels de fonctions
helloWorld(); // Appel de la fonction helloWorld qui affiche "hello world !" dans la console.
helloPrenom('marc'); // Appel de la fonction helloPrenom avec le prénom "marc".

// Appels de la fonction calculPrixTTC avec différents arguments et affichage des résultats.
console.log(calculPrixTTC(20, 10)); // Appel avec TVA à 20% et prix HT de 10.
console.log(calculPrixTTC(5.5, 10)); // Appel avec TVA à 5.5% et prix HT de 10.

// Définition de fonctions fléchées (arrow functions) et appels de ces fonctions.
const testArrow = () => console.log('voici le texte de la fonction');
const testArrow2 = () => console.log(`voici le texte de la fonction${this}`); // Attention, "this" ne fonctionne pas comme attendu dans une fonction fléchée.

const multiPar10 = (x) => x * 10; // Fonction fléchée pour multiplier par 10.
const multiDeuxNombres = (x, y) => x * y; // Fonction fléchée pour multiplier deux nombres.

testArrow();
testArrow2(); // Notez que "this" dans une fonction fléchée se comporte différemment par rapport à une fonction normale.

console.log('Fonction multiPar10 : ', multiPar10(8)); // Appel de multiPar10 avec argument 8.
console.log('Fonction multiDeuxNombres : ', multiDeuxNombres(9, 5)); // Appel de multiDeuxNombres avec arguments 9 et 5.

// Définition des fonctions max et max3 pour trouver le maximum entre deux ou trois nombres.
function max(a, b) {
  return (a > b) ? a : b; // Retourne a si a > b, sinon retourne b.
}

function max3(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > c) {
    return b;
  }
  return c;
}

console.log('Fonction max : ', max(5, 10)); // Appel de la fonction max avec 5 et 10 comme arguments.
console.log('Fonction max3 : ', max3(55, 10, 35)); // Appel de la fonction max3 avec 55, 10 et 35 comme arguments.

// Définition de la fonction jour qui prend un numéro de jour et renvoie le nom du jour correspondant.
function jour(numeroJour) {
  let nomDuJour;

  switch (numeroJour) {
    case 1:
      nomDuJour = 'lundi';
      break;
    case 2:
      nomDuJour = 'mardi';
      break;
    case 3:
      nomDuJour = 'mercredi';
      break;
    case 4:
      nomDuJour = 'jeudi';
      break;
    case 5:
      nomDuJour = 'vendredi';
      break;
    case 6:
      nomDuJour = 'samedi';
      break;
    case 7:
      nomDuJour = 'dimanche';
      break;
    default:
      nomDuJour = 'Numéro de jour invalide';
  }

  return nomDuJour;
}

console.log(`Jour : ${jour(3)}`); // Appel de la fonction jour avec le numéro de jour 3.

// Définition de la fonction factorielleItFor pour calculer la factorielle d'un nombre en utilisant une boucle for.
function factorielleItFor(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

console.log(`FactorielleFor : ${factorielleItFor(5)}`); // Appel de factorielleItFor avec n = 5.

// Définition de la fonction factorielleItWhile pour calculer la factorielle d'un nombre en utilisant une boucle while.
function factorielleItWhile(n) {
  let res = 1;
  let i = 1;
  while (i <= n) {
    res *= i;
    i += 1;
  }
  return res;
}

// Définition de la fonction factorielleRec pour calculer la factorielle d'un nombre de manière récursive.
function factorielleRec(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorielleRec(n - 1);
}

console.log(`factorielleItWhile : ${factorielleItWhile(5)}`); // Appel de factorielleItWhile avec n = 5.
console.log(`factorielleRec : ${factorielleRec(5)}`); // Appel de factorielleRec avec n = 5.

// Définition de la fonction exposantRec pour calculer l'exposant de y élevé à la puissance x de manière récursive.
function exposantRec(x, y) {
  if (x === 0) {
    return 1; // Tout nombre élevé à la puissance de 0 est égal à 1.
  } if (x < 0) {
    return 1 / exposantRec(-x, y); // Gérer les exposants négatifs en inversant x.
  } if (x % 2 === 0) {
    const moitieResultat = exposantRec(x / 2, y);
    return moitieResultat * moitieResultat; // Si x est pair, utilisez l'exponentiation par carré.
  }
  return y * exposantRec(x - 1, y); // Si x est impair, réduisez x de 1 et multipliez par y.
}

// Exemple d'utilisation :
const resultat = exposantRec(3, 2); // Calcule 2^3 = 8.
console.log(`ExposantRec : ${resultat}`); // Le résultat devrait être 8.

// Définition de la fonction calcul qui calcule la moyenne des éléments passés en tant qu'arguments.
function calcul(...rest) {
  // 'rest' est maintenant un tableau contenant tous les arguments passés à la fonction.
  let somme = 0;
  for (let i = 0; i < rest.length; i++) {
    somme += rest[i];
  }

  if (rest.length === 0) {
    return 0; // Si aucun argument n'est passé, retourne 0 pour éviter une division par zéro.
  }
  return somme / rest.length; // Calcule la moyenne des éléments dans 'rest'.
}

// Appel de la fonction calcul avec des arguments multiples et affichage de la moyenne.
const moyenne = calcul(2, 4, 6, 8);
console.log(`Moyenne rest : ${moyenne}`); // Output devrait être 5, car (2 + 4 + 6 + 8) / 4 = 5.
