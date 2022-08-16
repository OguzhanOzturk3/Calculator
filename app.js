function calculator(){

    let previousText = document.querySelector('.previous')
    let currentText = document.querySelector('.current')
    let NumButons = document.querySelectorAll('.num')
    let OperationButtons = document.querySelectorAll('.operation')
    let deleteButton = document.querySelector('.delete')
    let clearButton = document.querySelector('.clear')
    let equalButton = document.querySelector('.equals')

    let currentOperand=""
    let previousOperand=""
    let operation = null

    function handleButtons(){

        NumButons.forEach(btn=>{
            btn.addEventListener('click',()=>{
                
                currentOperand == 0 ? currentOperand="":'';

                if(btn.textContent === "." && currentOperand.includes('.')) return
            currentOperand += btn.textContent
            upDateDisplay()


            })
            
        })

        OperationButtons.forEach(btn=>{
            btn.addEventListener('click',()=>{

                if(currentOperand=== "") return
                operation = btn.textContent
                operate()
                upDateDisplay()
            })
        })

        clearButton.addEventListener('click',()=>{

            currentOperand =0
            previousOperand=""
            operation=null
            upDateDisplay()

        })
        equalButton.addEventListener('click',()=>{
            calculateResults()
            upDateDisplay()
        })

        deleteButton.addEventListener('click',()=>{
            let temp
            if(currentOperand==='You cant divide by 0'){

                currentOperand = 0
                temp = currentOperand
            }else{
                temp=currentOperand.toString().slice(0,-1)
            }

            if(temp===''|| temp===0) {
                temp=0
                currentOperand = temp
                upDateDisplay()
            }
            else{
                currentOperand=parseFloat(temp)
                upDateDisplay()
            }
        })

    }
    function operate(){
        if(currentOperand==="") return
        if(previousOperand!==""){
            calculateResults()
            

        }

        previousOperand = `${currentOperand}${operation}`
        currentOperand =""
    }

    function calculateResults(){
        let curr = parseFloat(currentOperand)
        let prev = parseFloat(previousOperand)
        let results;
        if(isNaN(prev)||isNaN(curr)) return
        operation==="+" ? results = prev+curr
        :operation==="-" ? results = prev-curr
        :operation==="*" ? results = prev*curr
        :operation==="÷" && curr===0? results="You Can't divide by 0"
        :operation==="÷" ? results = prev/curr
        :'';

        currentOperand = results
        operation = null
        previousOperand =""

        
    }
    function upDateDisplay(){

        currentText.textContent = currentOperand
        previousText.textContent = previousOperand
    }

    handleButtons()

}

calculator()