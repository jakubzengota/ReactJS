function show(respond, nr, tx1, tx2, tx3, v1, v2) {

    console.log(tx1 + v1);
    console.log(tx2 + v2);
    console.log(tx3 + respond);
};
//CALLBACK 1
function callback1(data) {
    console.log("*TAKS 1*");
    let y1 = data.works[0].year;
    let y2 = data.works[0].company[0].worktime;
    const sum = y2 + y1;
    show(sum, "1","Rok rozpoczęcia pracy: ", "Czas pracy: ", "Dodaj: ", y1, y2);
}
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    $.getJSON("https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/1", callback1);
});
//CALLBACK 2
function callback2(data) {
    console.log("*TAKS 2*");
     const x1 = data.name;
     const x2 = data.works[0].company[1].companyname;
     const text1 = `${x1} pracował w firmie ${x2}`;
     show(text1, "1", "Tekst 1: ", "Tekst 2: ", "Połączone: ", x1, x2);
}
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    $.getJSON("https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/1", callback2);
});

//PROMISE 1
function oblicz(x,y){
    return x*y;
};
function pomnoz(id, nr) {
    return new Promise((resolve, reject) => {
        if(id > 0 && id < 3) {
            fetch(`https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/${id}`)
                .then(response => response.json())
                .then(response => {
                    let workID = response.works[0].id;
                    let worktime = response.works[0].company[1].worktime;
                    console.log("*TAKS 1*");
                    console.log("ID pracy: " + workID);
                    console.log("Przepracowane lata: " + worktime);
                    resolve(oblicz(workID,worktime));
                })
        } else {
            reject("Nie ma takiej pracy");
        }
    })
};
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function(){
    pomnoz(1, 1)
        .then(data => console.log("Mnozenie: " + data))
        .catch(error => console.log("Blad", error))
        .finally(() => console.log("Finnally"))
});

//PROMISE 2
function newObject(x,y){
    return ({"companyname": x, "year": y});
};
function makeNewObject(id, nr) {
    return new Promise((resolve, reject) => {
        if(id > 0 && id < 3) {
            fetch(`https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/${id}`)
                .then(response => response.json())
                .then(response => {
                    let companyname = response.works[0].company[0].companyname;
                    let year = response.works[0].year;
                    console.log("Nazwa firmy: " + companyname);
                    console.log("Rok pracy: " + year);
                    resolve(newObject(companyname,year));
                })
        } else {
            reject("Nie ma takiej pracy");
        }
    })
};
                        //TWORZENIE NOWEGO OBIEKTU
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function(){
    makeNewObject(1, 1)
        .then(data => console.log("Nowy obiekt: ", data))
        .catch(error => console.log("Blad", error))
        .finally(() => console.log("Finally"))
});