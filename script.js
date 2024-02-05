function calculateBMI()
{
    
let w=document.getElementById("weight").value;
    let h=document.getElementById("height").value;
    let he=h/100;
    let bmi=(w/(he*he)).toFixed(2);
document.getElementById("result").innerHTML="<p>"+bmi+"</p>";
}