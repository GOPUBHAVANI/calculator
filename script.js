// accessing the elements
let result=document.querySelector(".result")
let contEle=document.querySelector(".container")
console.log(contEle)

//adding the functionality for button click with mouse
contEle.addEventListener("click",(e)=>{
    let target=e.target
    // checking the condition only button elements are child
    if(target.tagName === "INPUT" && target.type === "button"){
        handleInput(target.value)
    }
})

//adding the functionality for buttons when keyboard is pressed
contEle.addEventListener("keydown",(e)=>{
        let Key = e.Key
if((Key>="0" && Key<=9) || ["+","-","*","=",".","%","/","backspace","enter","delete"].includes(Key)){
   // passing the values to function to get result
   handleInput(Key)
}
})

// function to handle calculation
function handleInput(input){
    
    console.log(input)
    if(input=="C" || input=="delete"){
          result.value=""
    }else if(input=="❌" || input=="backspace"){
        result.value = result.value.slice(0,-1)
    }else if (input=="=" || input=="enter"){
        HandleResult(result.value)
    }else{
        result.value += input
    }

}

function HandleResult(val){
    console.log(val)
    result.value=eval(val)
}