// dane
"use strict";
var exText = "tekst";
var exTab = [1,2,3,4];
var pierwszy = 1;
var drugi = 2;
var imie = "Ala";
var miesiac = "styczen";
const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
var znakPodzialu = "|";
var arrayNames = ["Ania" , "Marcin" , "Bartek" , "Piotr"];
const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]
// funkcje
function zad1(myText) {
    return "ilość liter: " + myText.length;
}
function zad2(myTab) {
    let sum = myTab.reduce(function(a,b) {
        return a+b;
    }, 0)
    return sum;
}
function zad3(myText) {
    let zmienTekst = "";
    for (let i = 0; i<myText.length; i++) {
        if(Math.random() > 0.5) {
            zmienTekst += myText.charAt(i).toUpperCase();
        } else {
            zmienTekst += myText.charAt(i).toLowerCase();
        }
    }
    return zmienTekst;
}
function zad4(a, b) {
    if(typeof(b) == "number" && typeof(a) == "number") {
        return a*b;
    } else {
        return false;
    }
}
function zad5(i, m) {
    let wynik;
    switch(m) {
        case "grudzien":
        case "styczen":
        case "luty":
            wynik = i+" jezdzi na sankach";
            break;
        case "marzec":
        case "kwiecien":
        case "maj":
            wynik = i+" chodzi po kaluzach";
            break;
        case "czerwiec":
        case "lipiec":
        case "sierpien":
            wynik = i+" sie opala";
            break;
        case "wrzesien":
        case "pazdziernik":
        case "listopad":
            wynik = i+" zbiera liscie";
            break;
        default:
            wynik = i+" uczy sie JS";
    }
    return wynik;
}
function zad6(ciagZnakow,znakPodzialu) {
    let myArray = ciagZnakow.split(znakPodzialu);
    myArray.sort();
    let newText = myArray.join(znakPodzialu);
    return newText;
}
function zad7jeden(myTab) {
    let newTab =[];
    for(let i = 0; i < myTab.length; i++) {
        newTab[i] = myTab[i].toUpperCase();
    }
    return newTab;
}
function zad7dwa(myTab) {
    let newTab = [];
    for(let i=0; i < myTab.length; i++){
        newTab[i]="";
        for(let j = 0; j < myTab[i].length; j++) {
            if(Math.random() > 0.5) {
                newTab[i] += myTab[i].charAt(j).toLowerCase();   
            } else {
                newTab[i] += myTab[i].charAt(j).toUpperCase();
            }
        }
    }
    return newTab;
}
function checkFemale(name) {
    var lastCh = name.slice(-1);
    if(lastCh == "a") {
        return true;
    } else {
        return false;
    }
}
function countWomanInTable(arr) {
    var newArr = [];
    var count = 0;
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i].split(" ",1);
    }
    for(let i = 0; i < newArr.length; i++) {
        if(checkFemale(newArr[i].toString()) == true) {
            count ++;
        }
    }
    return count;
}


// konsola js
console.info("Tekst: " + exText);
console.info(zad1(exText));
console.info("Tablica: " + exTab);
console.info("Suma tablicy: " + zad2(exTab));
console.info("Rózna wielkosc liter: " + zad3(exText));
console.info("Pierwszy: " + pierwszy);
console.info("Drugi: " + drugi);
console.info("Iloczyn: " + zad4(pierwszy,drugi));
console.info("Imie: " + imie);
console.info("Miesiac: " + miesiac);
console.info(zad5(imie,miesiac));
console.info("Tekst: " + str);
console.info("Znak podziału: " +znakPodzialu)
console.info("Posegregowane: " + zad6(str,znakPodzialu));
console.info("Tablica imion: " + arrayNames);
console.info("Duże litery: " + zad7jeden(arrayNames));
console.info("Zmienna wielkość liter: " + zad7dwa(arrayNames));
console.info("Imie: " + imie);
console.info("czy kobieta: " + checkFemale(imie));
console.info("Ilosc kobiet: " + countWomanInTable(users));
