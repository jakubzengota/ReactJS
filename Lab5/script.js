function show(respond, nr, tx1, tx2, tx3, v1, v2) {

    console.log(tx1 + v1);
    console.log(tx2 + v2);
    console.log(tx3 + respond);
};
//CALLBACK 1
function callback1(data) {
    console.log("*TASK 1 CALLBACK*");
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
    console.log("*TASK 2 CALLBACK*");
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
            console.log("*TASK 1 PROMISE*");
            fetch(`https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/${id}`)
                .then(response => response.json())
                .then(response => {
                    let workID = response.works[0].id;
                    let worktime = response.works[0].company[1].worktime;
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
        .finally(() => console.log("Finally"))
});

//PROMISE 2
function newObject1(x,y){
    console.log("*TASK 2 PROMISE*");
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
                    resolve(newObject1(companyname,year));
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

// ASYNC 1
function obliczAsync(id, x, y) {
    console.log("*TASK 1 ASYNC*");
    return new Promise((resolve,reject) => {
        if(id === 1){
            console.log("id pracy: " + x);
            console.log("przepracowane lata: " + y);
            const sum = x+y;
            resolve(sum);
        } else {
            reject("nie ma takiej pracy");
        }
    })
};
async function getValuesAsync(id,a,b){
    try {
        const response = await fetch("https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/1");
        if (response.status === 200 && a >=0 && a <=1 && b >=0 && b<=4) {
            let jsonObj = await response.json();
            let workID = jsonObj.works[a].id;
            let worktime = jsonObj.works[a].company[b].worktime;
            const data = await obliczAsync(id,workID,worktime);
            console.log("dodaj: " + data);
        } else {
            if(a < 0 || b < 0 || a > 1 || b > 4) {
                console.log("Brak pracy lub nazwy firmy");
            } else {
                console.log("Blad: ", response.status, response.statusText);
            }
        }
    } catch(error) {
        console.log("Blad");
    } finally {
        console.log("Finally");
    }
};
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function(){
    getValuesAsync(1, 0, 1);
})

// ASYNC 2
function makeObjectAsync(id, x, y) {
    console.log("*TASK 2 ASYNC*");
    return new Promise((resolve,reject) => {
        if(id === 1){
            const obj = {"companyname": x, "worktime": y};
            console.log("Nazwa firmy: " + x);
            console.log("Czas pracy: " + y);
            resolve(obj);
        } else {
            reject("Nie ma usera o takim ID");
        }
    })
};
async function getObjectsAsync(id, b){
    try {
        const response = await fetch("https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/2");
        if (response.status === 200 && b >=0 && b<=5) {
            let jsonObj = await response.json();
            let companyname = jsonObj.works[0].company[b].companyname;
            let worktime = jsonObj.works[0].company[b].worktime;
            const data = await makeObjectAsync(id,companyname, worktime);
            console.log("Nowy obiekt: ", data);
        } else {
            if(b>5 || b<0){
                console.log("Nie ma takiej firmy");
            } else {
                console.log("Blad: ", response.status, response.statusText);
            }
        }
    } catch(error) {
        console.error(error);
    } finally {
        console.log("Finally");
    }
};
let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function(){
    getObjectsAsync(1,0);
});

//AJAX
function obliczAjax(id, num){
    let url = `https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/${id}`;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    console.log("*TASK 1 AJAX*");
    xhr.responseType = 'json';
    xhr.onload = function() {
        if(xhr.status === 200) {
            let responseObj = xhr.response;
            let workID = responseObj.works[0].id;
            let worktime = responseObj.works[0].company[0].worktime;
            show(oblicz(workID,worktime), num, "ID pracy: ", "Przepracowane lata: ", "Pomnoz: ", workID,worktime);
        } else {
            console.log("blad: ", xhr.statusText);
        }
    }
    xhr.onerror = function() {
        console.log("blad");
    }
    xhr.send();
};
let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", function(){
    obliczAjax(1,1);
});

//AJAX 2
function newObject2(x,y){
    return ({"companyname": x, "workname": y});
};

function newObjectAjax(id, nr){
    let url = `https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/${id}`;
    let xhr = new XMLHttpRequest();
    console.log("*TASK 2 AJAX*");
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function() {
        if(xhr.status === 200) {
            let responseObj = xhr.response;
            let companyname = responseObj.works[0].company[1].companyname;
            let workname = responseObj.works[0].workname;
            show("", nr, "Nazwa firmy: ", "Zawód: ", "Nowy obiekt: ", companyname, workname);
            console.log(newObject2(companyname,workname));}
        else {
            console.log("blad", xhr.status, xhr.statusText);
        }
    }
    xhr.onerror = function() {
        console.log("blad");
    }
};
let btn8 = document.getElementById("btn8");
btn8.addEventListener("click", function(){
    newObjectAjax(1,1);
});

//FETCH 1
function obliczFetch(id, nr){
    if(id > 0 && id < 3) {
        console.log("*TASK 1 FETCH*");
        fetch(`https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/${id}`)
            .then(response => response.json())
            .then(response => {
                let workID = response.works[0].id;
                let worktime = response.works[0].company[1].worktime;
                show(oblicz(workID,worktime), nr, "ID pracy: ", "Przepracowany czas: ", "Pomnoz: ", workID, worktime);
            })
            .catch(error => console.log("blad", error))
    } else {
        console.log("Nie ma takiego usera");
    }
}
let btn9 = document.getElementById("btn9");
btn9.addEventListener("click", function(){
    obliczFetch(1,1);
})

//FETCH 2
function makeNewObjectFetch(id, nr){
    if(id > 0 && id < 3) {
        console.log("*TASK 2 FETCH*");
        fetch(`https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/${id}`)
            .then(response => response.json())
            .then(response => {
                let companyname = response.works[0].company[1].companyname;
                let workname = response.works[0].workname;
                show("", nr, "Nazwa firmy: ", "Nazwa zawodu: ", "Nowy obiekt: ", companyname, workname);
                console.log(newObject2(companyname,workname));
            })
            .catch(error => console.log("blad ", error))
    } else {
        console.log("Nie ma takiego usera");
    }
}
let btn10 = document.getElementById("btn10");
btn10.addEventListener("click", function(){
    makeNewObjectFetch(1,1);
})

//AXIOS 1
function calculateAxios(id,nr){
    console.log("*TASK 1 AXIOS*");
    axios.get(`https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/${id}`)
    .then(function (response) {
        let workID = response.data.works[0].id;
        let worktime = response.data.works[0].company[1].worktime;
        show(oblicz(workID,worktime), nr, "ID pracy: ", "Przepracowany czas: ", "Pomnoz: ", workID, worktime);
    })
    .catch (function (error) {
        if(id > 3 || id <0){
            console.log("Nie ma takiego usera");
        } else{
        console.log("blad ", error);
        }
    })
}
let btn11 = document.getElementById("btn11");
btn11.addEventListener("click", function(){
    calculateAxios(1,1);
})
//AXIOS 2
function makeNewObjectAxios(id,nr){
    console.log("*TASK 2 AXIOS*");
    axios.get(`https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/${id}`)
    .then(function (response) {
        let companyname = response.data.works[0].company[1].companyname;
        let workname = response.data.works[0].workname;
        show("", nr, "Nazwa firmy: ", "Zawód: ", "Nowy obiekt: ", companyname, workname);
        console.log(newObject2(companyname,workname));
    })
    .catch (function (error) {
        if(id > 3 || id <0){
            console.log("Nie ma takiego usera");
        } else{
        console.log("blad ", error);
        }
    })
}
let btn12 = document.getElementById("btn12");
btn12.addEventListener("click", function(){
    makeNewObjectAxios(1,1);
})