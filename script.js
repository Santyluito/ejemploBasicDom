const h1 = document.querySelector('h1')
const inpud1 = document.querySelector('#calculo1')
const inpud2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const result = document.getElementById('result')
const form = document.getElementById('form')

form.addEventListener('submit', btnOnClick)

function btnOnClick(e) {
  console.log(e)
  console.log({e})
  e.preventDefault()
  const suma =  Number(inpud1.value) + Number(inpud2.value)
  result.innerText = `Resultado: ${suma}`
}

