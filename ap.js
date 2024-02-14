window.onload = function () {
    adjustDropdownHeight(); 
}


document.getElementById("conBtn").onclick = function () {
    var input = parseFloat(document.getElementById("input").value);
    var unit = document.getElementById('unitOfConversion').value;


    var answer = 0;

    if (unit === "ftcm") {
        answer = 30.48 * input;
        let round = Math.round(answer);

        document.getElementById("Dispay").textContent = isNaN(answer) ? "" : `${answer}cm`;
        document.getElementById("round").textContent = isNaN(answer) ? "" : `${round}cm when rounded off to the nearest whole number`;
        document.getElementById("showCon").textContent = isNaN(answer) ? "" : "Feet to Centimeters Conversion";
    } else if (unit === "cm") {
        answer = input / 30.48;
        let round = Math.round(answer);

        document.getElementById("Dispay").textContent = isNaN(answer) ? "" : `${answer} ft`;
        document.getElementById("round").textContent = isNaN(answer) ? "" : `${round}ft when rounded off to the nearest whole number`;
        document.getElementById("showCon").textContent = isNaN(answer) ? "" : "Centimeters to Foot Conversion";

      
    } else if (unit === "in") {
        let answer = input / 12;
        let round = Math.round(answer);

        document.getElementById("Dispay").textContent = isNaN(answer) ? "" : `${answer} ft`;
        document.getElementById("round").textContent = isNaN(answer) ? "" : `${round}ft when rounded off to the nearest whole number`;
        document.getElementById("showCon").textContent = isNaN(answer) ? "" : "Inches to Foot Conversion";

    } else if (unit === "ftm") {
        let answer = input * 0.3048;
        let round = Math.round(answer);

        document.getElementById("Dispay").textContent = isNaN(answer) ? "" : `${answer} m`;
        document.getElementById("round").textContent = isNaN(answer) ? "" : `${round}m when rounded off to the nearest whole number`;
        document.getElementById("showCon").textContent = isNaN(answer) ? "" : "foot to meter Conversion";

    } else if (unit === "cmk") {
        let answer = input / 100000;
        let round = Math.round(answer);

        document.getElementById("Dispay").textContent = isNaN(answer) ? "" : `${answer} km`;
        document.getElementById("round").textContent = isNaN(answer) ? "" : `${round}km when rounded off to the nearest whole number`;
        document.getElementById("showCon").textContent = isNaN(answer) ? "" : "Centimeters to Kilometers Conversion";

    } else if (unit === "mk") {
        let answer = input / 1000;
        let round = Math.round(answer);

        document.getElementById("Dispay").textContent = isNaN(answer) ? "" : `${answer} km`;
        document.getElementById("round").textContent = isNaN(answer) ? "" : `${round}km when rounded off to the nearest whole number`;
        document.getElementById("showCon").textContent = isNaN(answer) ? "" : "meter to Kilometers Conversion";

    } else if (unit === "kkm") {
        let answer = input * 100000;
        let round = Math.round(answer);

        document.getElementById("Dispay").textContent = isNaN(answer) ? "" : `${answer} cm`;
        document.getElementById("round").textContent = isNaN(answer) ? "" : `${round}cm when rounded off to the nearest whole number`;
        document.getElementById("showCon").textContent = isNaN(answer) ? "" : "Kilometers to Centimeters Conversion";

    } else if (unit === "inc") {
        let answer = input * 2.54;
        let round = Math.round(answer);

        document.getElementById("Dispay").textContent = isNaN(answer) ? "" : `${answer} cm`;
        document.getElementById("round").textContent = isNaN(answer) ? "" : `${round}cm when rounded off to the nearest whole number`;
        document.getElementById("showCon").textContent = isNaN(answer) ? "" : "Inches to Centimeters Conversion";


    } else if (unit === "inm") {
        let answer = input * 0.0254;
        let round = Math.round(answer);

        document.getElementById("Dispay").textContent = isNaN(answer) ? "" : `${answer} m`;
        document.getElementById("round").textContent = isNaN(answer) ? "" : `${round}m when rounded off to the nearest whole number`;
        document.getElementById("showCon").textContent = isNaN(answer) ? "" : "inches to meter Conversion";

    } else if (unit === "min") {
        let answer = input * 39.37007874;
        let round = Math.round(answer);

        document.getElementById("Dispay").textContent = isNaN(answer) ? "" : `${answer} in`;
        document.getElementById("round").textContent = isNaN(answer) ? "" : `${round}in when rounded off to the nearest whole number`;
        document.getElementById("showCon").textContent = isNaN(answer) ? "" : "meter to Inches Conversion";

    } else if (unit === "cmm") {
        let answer = input / 100;
        let round = Math.round(answer);


        document.getElementById("Dispay").textContent = isNaN(answer) ? "" : `${answer} m`;
        document.getElementById("round").textContent = isNaN(answer) ? "" : `${round}m when rounded off to the nearest whole number`;
        document.getElementById("showCon").textContent = isNaN(answer) ? "" : "Centimeter to Meter Conversion";



    } else {
        document.getElementById("round").textContent = `You did not select any unit of convert `
        document.getElementById("showCon").textContent = `Kindly select a Unit of convert`
    }

    if (isNaN(answer)) {
        document.getElementById("Dispay").textContent = "Enter a number";
        document.getElementById("round").textContent = "You did not enter any number for conversion";
        document.getElementById("showCon").textContent = "Kindly Enter your number for conversion";
    }
   
    adjustDropdownHeight();
};


function adjustDropdownHeight() {
    var select = document.getElementById('unitOfConversion');
    var viewportHeight = window.innerHeight;
    var selectHeight = select.getBoundingClientRect().height;
    var maxHeight = viewportHeight - select.getBoundingClientRect().top - 10; // Adjust as needed

    if (selectHeight > maxHeight) {
        select.style.maxHeight = maxHeight + 'px';
    }
}
document.getElementById("unitOfConversion").onchange = function () {
    var unit = document.getElementById('unitOfConversion').value;
    if (!unit) {
        document.getElementById("showCon").textContent = "Please select a unit of conversion";
    }
};