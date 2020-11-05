//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function(sentence) {

    return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function(sentence) {
    //     La méthode replace() renvoie une nouvelle chaîne de caractères dans laquelle tout ou partie des correspondances à un modèle sont remplacées par un remplacement. Le modèle utilisé peut être une RegExp et le remplacement peut être une chaîne ou une fonction à appeler pour chaque correspondance. Si modèle est une chaîne de caractères, seule la première correspondance sera remplacée.

    // La chaîne de caractère originale reste inchangée.
    return sentence.replace('e', ' ');
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function(firstSentence, secondSentence) {
    return firstSentence + secondSentence;
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function(sentence) {
    return sentence.charAt(4);
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function(sentence) {
    return sentence.substring(0, 9);
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function(sentence) {
    return sentence.toUpperCase(sentence);
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function(sentence) {
    return sentence.toLowerCase(sentence);
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function(sentence) {
    return sentence.trim();
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function(sentence) {
    if (typeof sentence === 'string')
        return true;
    else
        return false;
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function(fileName) {
    //split pour découper après le '.' et pop pour afficher ce qu'il reste
    return fileName.split('.').pop();
    // La méthode pop() supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function(sentence) {
    return sentence.split(' ').length - 1;
    // On retire 1 car on commence à zero
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function(sentence) {
    // la méthode split va transformer la chaine de caractère en tableau, si on fait ('') il va séparer toutes les chaines de caractère 'b''o''n' etc .. donc ici on fait split() sans rien dedans
    return sentence.split('').reverse().join('');
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function(sentence) {
    // La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.
    return sentence.includes("La Manu");
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function(number) {
    return Math.abs(number);
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function(numbersArray) {
    // La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.

    // callback:
    // La fonction à utiliser pour chaque élément du tableau. Elle prend en compte trois arguments :
    // valeurCourante:
    // La valeur de l'élément du tableau en cours de traitement.

    // index Facultatif:
    // L'indice de l'élément du tableau en cours de traitement.

    // array Facultatif:
    // Le tableau sur lequel la méthode forEach est appliquée.

    // thisArg Facultatif:
    // Paramètre optionnel. La valeur à utiliser pour this lors de l'exécution de callback.


    numbersArray.forEach(function(element, index) {
        numbersArray[index] = Math.abs(element);
    });
    return numbersArray;
}


//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function(radius) {
    return Math.round(Math.PI * radius * radius);
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function(a, b) {
    return Math.floor(Math.hypot(a, b));
    // Ou 
    let reponse = Math.floor(Math.sqrt(aa + bb));
    return reponse;
    car sqrt est compatible avec les navigateurs depuis le version 1
}