// let body = document.querySelector('body'); //create a variable and set it to html document body
// body.setAttribute('style', 'color: teal'); // set the text color of the body (and all its elements)

// let newButton = document.createElement('button'); // create a variable and set it to a new button
// body.appendChild(newButton); // add button to the body
// newButton.innerHTML = "ADD"; // adding text to the button 

// let i = 0;

// function addButtonClicked() {
//     let newHeader = document.createElement('h2');

//     newHeader.innerHTML = "The World Is Yours";
//     newHeader.setAttribute('id', i);
//     body.appendChild(newHeader);

//     i++;
      
// }


// newButton.addEventListener('click', addButtonClicked);

// let newButton2 = document.createElement('button'); // create a variable and set it to a new button
// body.appendChild(newButton2); // add button to the body
// newButton2.innerHTML = "Remove"; // adding text to the button 

// function removeButtonClicked() {
//    toDelete = document.getElementById(i - 1);
//    console.log(toDelete);
//    body.removeChild(toDelete);

//    i--;
   
// }

// newButton2.addEventListener('click', removeButtonClicked);


// //   console.log(body);









let body = document.querySelector('body'); 
let newButton = document.createElement('button');
let newButton2 = document.createElement('button'); 
let i = 0;

body.setAttribute('style', 'color: teal'); 
body.appendChild(newButton); 
body.appendChild(newButton2); 
newButton.innerHTML = "ADD"; 
newButton2.innerHTML = "Remove"; 

newButton.addEventListener('click', addButtonClicked);
newButton2.addEventListener('click', removeButtonClicked);

function addButtonClicked() {
    let newHeader = document.createElement('h2');

    newHeader.innerHTML = "The World Is Yours";
    newHeader.setAttribute('id', i);
    body.appendChild(newHeader);

    i++;
      
}

function removeButtonClicked() {
   toDelete = document.getElementById(i - 1);
   console.log(toDelete);
   body.removeChild(toDelete);

   i--;
   
}




