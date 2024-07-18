const form= document.querySelector("form")

const hunits = document.querySelector("#hunits")
hunits.addEventListener('change',(e)=>{
    const height = document.querySelector("#height");
    height.placeholder=`in ${e.target.value}`
})

const wunits = document.querySelector("#wunits")
wunits.addEventListener('change',(e)=>{
    const weight = document.querySelector("#weight");
    weight.placeholder=`in ${e.target.value}`
})


form.addEventListener('submit',function (e) {
    e.preventDefault();
    let height = parseFloat(document.querySelector("#height").value)
    let weight = parseFloat(document.querySelector("#weight").value)
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
        if(hunits.value=='mt'){
            height=height*100;
        }
        else {if (hunits.value=='ft'){
            height=height*30.48;
        }}
        if(wunits.value=='pounds'){
            weight=weight*0.4536;
        }
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
