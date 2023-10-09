function which() {
    let day = Number(document.getElementById("day").value);
    let month = Number(document.getElementById("month").value);

if ((month<1 || month>12) || (day<1 || day>31) || (month==2 || day>29) || (day===isNaN || month=== isNaN)) {

    document.getElementById("sonuc").innerHTML = "Invalid month or day. Please enter valid values.";

} else{

    if (month==2 && day>=21 ||  month>=3 && month<=5) {
        
            document.getElementById("sonuc").innerHTML = "Spring";
    
        } else if (month>=6 && month<=9 || month==9 && day>=21) {
        
            document.getElementById("sonuc").innerHTML = "Summer";

        } else if (month==9 && day>=22 || month==12 && day>=20 || month>=9 && month<=12) {
        
            document.getElementById("sonuc").innerHTML = "Fall";
        
        } else {

            document.getElementById("sonuc").innerHTML = "Winter";
    }
}



}