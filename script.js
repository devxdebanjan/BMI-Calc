const form= document.querySelector("form")


form.addEventListener('submit',function (e) {
    e.preventDefault();
    const height = parseFloat(document.querySelector("#height").value)
    const weight = parseFloat(document.querySelector("#weight").value)
    const res=document.querySelector(".bmi")
    

    if(height==''||height<0||isNaN(height))
    {
        res.textContent="Enter a valid height";
    }
    else if(weight==''||weight<0||isNaN(weight))
    {
        res.textContent="Enter a valid weight";
    }
    else{
        res.textContent="BMI output ";
        const output = (weight/((height/100)*(height/100))).toFixed(2);
        res.appendChild(document.createTextNode(`=>${output}`));
        const conc = document.querySelector(".con")
        conc.textContent="Conclusion ";
        if (output<18.6){
            conc.appendChild(document.createTextNode("Kuch khale bkl patlu"))
        }
        else if(output<24.9){
            conc.appendChild(document.createTextNode("Wow you kinda sexy bro"))
        }
        else{
            conc.appendChild(document.createTextNode("Get on the treadmill FATSO!"))
        }
    }

})
