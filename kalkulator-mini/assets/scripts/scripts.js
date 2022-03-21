// btn numbers
document.getElementById("one").onclick = () =>{
    document.getElementById("inputnumber").value += document.getElementById("one").value;
}
document.getElementById("two").onclick = () =>{
    document.getElementById("inputnumber").value += document.getElementById("two").value;
}
document.getElementById("three").onclick = () =>{
    document.getElementById("inputnumber").value += document.getElementById("three").value;
}
document.getElementById("four").onclick = () =>{
    document.getElementById("inputnumber").value += document.getElementById("four").value;
}
document.getElementById("five").onclick = () =>{
    document.getElementById("inputnumber").value += document.getElementById("five").value;
}
document.getElementById("six").onclick = () =>{
    document.getElementById("inputnumber").value += document.getElementById("six").value;
}
document.getElementById("seven").onclick = () =>{
    document.getElementById("inputnumber").value += document.getElementById("seven").value;
}
document.getElementById("eigth").onclick = () =>{
    document.getElementById("inputnumber").value += document.getElementById("eigth").value;
}
document.getElementById("nine").onclick = () =>{
    document.getElementById("inputnumber").value += document.getElementById("nine").value;
}
document.getElementById("zero").onclick = () =>{
    document.getElementById("inputnumber").value += document.getElementById("zero").value;
}


//btn operators
document.getElementById("plus").onclick = () =>{
    if (!(document.getElementById("inputnumber").value === "")) {
        const input = document.getElementById("inputnumber").value;
        const last = input[input.length - 1];
        if(!(last == "+")){
            document.getElementById("inputnumber").value += "+";
        }
    }
}
document.getElementById("minus").onclick = () =>{
    if (!(document.getElementById("inputnumber").value === "")) {
        const input = document.getElementById("inputnumber").value;
        const last = input[input.length - 1];
        if(!(last == "-")){
            document.getElementById("inputnumber").value += "-";
        }
    }
}
document.getElementById("multi").onclick = () =>{
    if (!(document.getElementById("inputnumber").value === "")) {
        const input = document.getElementById("inputnumber").value;
        const last = input[input.length - 1];
        if(!(last == "x")){
            document.getElementById("inputnumber").value += "x";
        }
    }
}
document.getElementById("deviden").onclick = () =>{
    if (!(document.getElementById("inputnumber").value === "")) {
        const input = document.getElementById("inputnumber").value;
        const last = input[input.length - 1];
        if(!(last == "/")){
            document.getElementById("inputnumber").value += "/";
        }
    }
}
document.getElementById("equal").onclick = () => {
    const input = document.getElementById("inputnumber").value.toString();
    const operator = ["+","-","x","/"];
    let sepText = [];
    let hasil = "";
    Array.prototype.forEach.call( input ,char =>{
        if(char == "+"){
            sepText.push("+");
            sepText.push("");
        }else if (char == "-") {
            sepText.push("+");
            sepText.push("-");
        }else if (char == "x") {
            sepText.push("x");
            sepText.push("");
        }else if (char == "/") {
            sepText.push("/");
            sepText.push("");
        }else{
            if(!(sepText == "")){
                sepText[sepText.length - 1] += char;
            }else{
                sepText.push(char);
            }
        }
    });
    console.log(sepText);
    while (true) {
        if(sepText.includes("+") || sepText.includes("-") || sepText.includes("x") || sepText.includes("/")){
            if (sepText.includes("x")) {
                sepText[sepText.indexOf("x")-1] = (parseFloat(sepText[sepText.indexOf("x")-1]) * parseFloat(sepText[sepText.indexOf("x")+1])).toString();
                sepText.splice(sepText.indexOf("x")+1, 1);
                sepText.splice(sepText.indexOf("x"), 1);
            }else if (sepText.includes("/")) {
                sepText[sepText.indexOf("/")-1] = (parseFloat(sepText[sepText.indexOf("/")-1]) / parseFloat(sepText[sepText.indexOf("/")+1])).toString();
                sepText.splice(sepText.indexOf("/")+1, 1);
                sepText.splice(sepText.indexOf("/"), 1);
            }else{
                if (sepText.includes("+")) {
                    sepText[sepText.indexOf("+")-1] = (parseFloat(sepText[sepText.indexOf("+")-1]) + parseFloat(sepText[sepText.indexOf("+")+1])).toString();
                    sepText.splice(sepText.indexOf("+")+1, 1);
                    sepText.splice(sepText.indexOf("+"), 1);
                }else if (sepText.includes("-")) {
                    sepText[sepText.indexOf("-")-1] = (parseFloat(sepText[sepText.indexOf("-")-1]) - parseFloat(sepText[sepText.indexOf("-")+1])).toString();
                    sepText.splice(sepText.indexOf("-")+1, 1);
                    sepText.splice(sepText.indexOf("-"), 1);
                } 
            }
        }else{
            hasil = sepText[0].toString();
            console.log(hasil);
            break;
        }
    }
    document.getElementById("inputnumber").value = hasil;
}

//btn ac del
document.getElementById("ac").onclick = () =>{
    document.getElementById("inputnumber").value = "";
}
document.getElementById("del").onclick = () =>{
    let input = document.getElementById("inputnumber").value.toString();
    const myArray = input.split("");
    myArray.pop();
    const final = myArray.join('');
    document.getElementById("inputnumber").value = final;
}

//btn comma
document.getElementById("comma").onclick = () =>{
    if (!(document.getElementById("inputnumber").value === "")) {
        // const input = document.getElementById("inputnumber").value;
        // const last = input[input.length - 1];
        // if(!(last == "/")){
        //     document.getElementById("inputnumber").value += ".";
        // }
        const input = document.getElementById("inputnumber").value.toString();
        const operator = ["+","-","x","/"];
        let sepText = [];
        let hasil = "";
        Array.prototype.forEach.call( input ,char =>{
            if(char == "+"){
                sepText.push("+");
                sepText.push("");
            }else if (char == "-") {
                sepText.push("+");
                sepText.push("-");
            }else if (char == "x") {
                sepText.push("x");
                sepText.push("");
            }else if (char == "/") {
                sepText.push("/");
                sepText.push("");
            }else{
                if(!(sepText == "")){
                    sepText[sepText.length - 1] += char;
                }else{
                    sepText.push(char);
                }
            }
        });
        if(!(sepText[sepText.length - 1].includes("."))){
            document.getElementById("inputnumber").value += ".";
        }
    }else{
        document.getElementById("inputnumber").value += "0.";
    }
    if(etnumber.text.length == 0){
        etnumber.setText("0.")
        etnumber.setSelection(etnumber.text.length)
    }
}