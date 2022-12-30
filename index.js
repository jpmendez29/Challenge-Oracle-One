function GetInput(x){
    let input = document.getElementById("input")
    let output = document.getElementById("output")
    let inp = [...input.value]
    let enc = []
    switch (x){
        case 0:
            enc = inp.map((x) => Encriptar(x))
            input.value = ""
            output.style.backgroundImage = "none"
            return output.value = enc.join("")

        case 1:
            enc = Desencriptar(inp)
            input.value = ""
            output.style.backgroundImage = "none"
            return output.value = enc.join("")
    }
}

function Encriptar(x){
        switch (x){
            case "a":
                return "ai"

            case "e":
                return "enter"

            case "i":
                return "imes"

            case "o":
                return "ober"

            case "u":
                return "ufat"

            default:
                return x        
        }
}

function Desencriptar(ar){
    for (let i = 0; i < ar.length; i++) {
        if(ar[i].match(/[aeiou]/)){
            switch (ar[i]){
                case "a":
                    ar.splice(i+1,1)
                    break
    
                case "e":
                    ar.splice(i+1,4)
                    break

                case "i":
                    ar.splice(i+1,3)
                    break
    
                case "o":
                    ar.splice(i+1,3)
                    break
    
                case "u":
                    ar.splice(i+1,3)
                    break

            }
        }
        
    }
    return ar
}

function Copy(){
    let output = document.getElementById("output")
    output.select()
    navigator.clipboard.writeText(output.value)
}

function email(){
    navigator.clipboard.writeText('juan.pablomendez@hotmail.com')
    window.alert('Email copiado')
}