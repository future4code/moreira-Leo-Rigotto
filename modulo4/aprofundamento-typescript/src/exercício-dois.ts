function obterEstatisticas(numeros: number[]): {
  maior: number
  menor: number
  media: number
} {
  const numerosOrdenados = numeros.sort((a, b) => a - b)

  let soma: number = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  }

  return estatisticas
}

type Amostra = {
    numeros: number[],
    obterEstatisticas(): {}
}