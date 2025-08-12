line_edit = document.getElementById("input")
CtoF = document.getElementById("CtoF")
FtoC = document.getElementById("FtoC")
convert_button = document.getElementById("convert")
result = document.getElementById("display")
link = document.getElementById("link")
up = document.getElementById("up")
down = document.getElementById("down")

let temp

convert_button.onclick = function(){
    if(Boolean(line_edit.value) === true) {
        if(CtoF.checked){
            temp = Number(line_edit.value) * 9/5 + 32
            result.textContent = temp.toFixed(1) + "°C"
        }
        else if(FtoC.checked){
            temp = (Number(line_edit.value) - 32) * 5/9
            result.textContent = temp.toFixed(1) + "°F"
        }
        else{
            window.alert("Check Either Conversion Options to Continue")
        }
    }
    else{
        window.alert("Enter a Value To Continue")
    }
}

link.onclick = function(){
    window.open("https://github.com/ArjunAverineni", "_blank");
}

up.onclick = function(){
    window.alert("Thank You For Rating Our Service!")
}

down.onclick = function(){
    window.alert("We Are Sorry For Your Unpleasant Experience")
}
