let display=document.getElementId("calculatorInput")
let buttons=Array.from(document.getElementsByClassName("inputElements"))

buttons.map(inputElements => {
  inputElements.addEventListener('click', (e)=>{
    switch (e.target.innerHTML) {
      case 'AC':
      display.innerHTML=''

        break;
        case '=':
          try {
            display.innerHTML=eval(display.innerHTML)
          }
          catch {
            display.innerHTML=('Calculator Input Invalid')
          }
          break;
      default:
        display.append(e.target.innerHTML)
    }
  })
})
