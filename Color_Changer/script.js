// Body Element - because we need to change the background color of body.
const bodyElement = document.querySelector("body");
const bodyBgColor = bodyElement.style.backgroundColor;



// Now, we need to apply event listener to all the color boxes.
const boxesList = document.querySelectorAll(".box");
// console.log(boxesList);
boxesList.forEach(function(currBox){
    // console.log(currBox);
    currBox.addEventListener('click', function(event){
        let targetBox = event.target;
        let targetBoxColor = targetBox.id;
        if(bodyElement.style.backgroundColor == targetBoxColor)
        {
            bodyElement.style.backgroundColor = bodyBgColor;
        }
        else{
            bodyElement.style.backgroundColor = targetBoxColor;
        }
    })
});


