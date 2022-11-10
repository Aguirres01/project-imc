import { Modal } from './modal.js'
import { AlertError} from "./alert-error.js"
import {calculateIMC, notNumber} from "./utils.js"


// variáveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



//função event.preventDefault faz com que a página não recarregue por padrão

form.onsubmit = event => {
   event.preventDefault()
   
   const weight = inputWeight.value
   const height = inputHeight.value
   
   const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

   if (weightOrHeightIsNotANumber) {
      AlertError.open()
      return;

   }

   AlertError.close()

   
   //oninput fecha a mensagem de erro assim que começo a digitar
   inputWeight.oninput = () => AlertError.close()
   inputHeight.oninput = () => AlertError.close()


   const result = calculateIMC(weight, height)
   displayResultMessage(result)
}

function displayResultMessage(result) {
   const message = `Seu IMC é de ${result}`
   
   
   Modal.message.innerText = message
   Modal.open()
   
}
