// function imprimeTresCoresFavoritas(): void {
//     const cor1: string = prompt("Insira sua primeira cor favorita")
//     const cor2: string = prompt("Insira sua segunda cor favorita")
//     const cor3: string = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }

function imprimeTresCoresFavoritas (cor1: string, cor2: string, cor3: string): string[]{
    const arrayDeCores = []

    arrayDeCores.push(cor1,cor2,cor3) 
    
    return arrayDeCores
}
console.log(imprimeTresCoresFavoritas("Vermelho", "Azul", "Verde"))