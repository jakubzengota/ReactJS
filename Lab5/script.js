function show(respond, nr, tx1, tx2, tx3, v1, v2) {
    console.log("Przykład " + nr + ":");
    console.log(tx1 + v1);
    console.log(tx2 + v2);
    console.log(tx3 + respond);
};

function callback1(data) {
    console.log("--Zadanie 1:");
    let y1 = data.works[0].year;
    let y2 = data.works[1].company[3].worktime;
    const sum = y2 + y1;
    show(sum, "1","Rok rozpoczęcia pracy", "Czas pracy: ", "Suma: ", y1, y2);
}
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    $.getJSON("https://my-json-server.typicode.com/jakubzengota/projektowanie-serwisow-www-21684-185ic/users/1", callback1);
});