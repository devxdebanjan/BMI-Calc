const form= document.querySelector("form")

const selector = document.querySelector("#heightselect")
selector.addEventListener('change',(e)=>{
    console.log(e.target.value);
})


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
        conc.textContent="";
        if (output<18.6){
            conc.appendChild(document.createTextNode("Underweight"))
        }
        else if(output<24.9){
            conc.appendChild(document.createTextNode("Healthy"))
        }
        else{
            conc.appendChild(document.createTextNode("Overweight"))
        }
    }

})
