function handleChange(){
    let mat = document.getElementById("Matric").value;
    let fsc =document.getElementById("Fsc").value;
    let ec = document.getElementById("ec").value;
    let line = document.getElementById("agg");
    let agg = ((mat/1100)*25) + ((fsc/1100)*45) + ((ec/400)*30);
    line.innerHTML=`<h2>Your Calculated Aggregate is ${agg}</h2>`  
    };
    
    
    
