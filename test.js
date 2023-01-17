let fullName = prompt("Lütfen Adınızı Giriniz: ")

if(fullName.length <= 0){
    alert("Lütfen ilgili alanı doldurun !")
    window.location.reload();
}else{
    document.getElementById("myName").innerHTML = fullName.toUpperCase();
}


function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}
function showTime() {
    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var date = new Date()
    let saat = addZero(date.getHours());
    let dakika = addZero(date.getMinutes());
    let saniye = addZero(date.getSeconds());
    let day = weekday[date.getDay()];
    let time = saat + ":" + dakika + ":" + saniye + " - " + day;
    document.getElementById("myClock").innerHTML = time;
}
setInterval(showTime, 1000); 





