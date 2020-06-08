
const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
//Write a loop to check if the inner HTML includes my findInput
function getCellElements (currentRowElement) {
     currentRowElement=document.querySelectorAll(".cell")
    return currentRowElement
}
replaceAllButton.addEventListener("click",function(){
    let searchTerm=findInput.value
    let newTerm=replaceInput.value
    for(let count=0;count<rowElements.length;count+=1){
        let m=rowElements[count]
        let get=getCellElements(m)
        for(let count2=0;count2<get.length; count2+=1){
            if(get[count2].innerHTML.includes(searchTerm)){
                get[count2].innerHTML=get[count2].innerHTML.replace(searchTerm,newTerm)
            }
        }

    }
})

// YOUR CODE GOES HERE


// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
