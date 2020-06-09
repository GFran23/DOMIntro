let body = document.querySelector('body'); //create a variable and set it to html document body
body.setAttribute('style', 'color: teal'); // set the text color of the body (and all its elements)

let newButton = document.createElement('button'); // create a variable and set it to a new button
body.appendChild(newButton); // add button to the body
newButton.innerHTML = "ADD"; // adding text to the button 

let i = 0;

function addButtonCLicked() {
    // console.log('hit');    //:These two lines check if your function works
    // alert("Good job clicking the button")

    let newHeader = document.createElement('h2');
    newHeader.innerHTML = "The World Is Yours";
    newHeader.setAttribute('id', i);
    body.appendChild(newHeader);

    console.log(newHeader);    
}


newButton.addEventListener('click', addButtonCLicked);

let newButton2 = document.createElement('button'); // create a variable and set it to a new button
body.appendChild(newButton2); // add button to the body
newButton2.innerHTML = "Remove"; // adding text to the button 

function removeButtonCLicked() {
    // console.log('hit');    //:These two lines check if your function works
    // alert("Good job clicking the button")

    let newHeader = document.createElement('h2');
    newHeader.innerHTML = "The World Is Yours";
    body.appendChild(newHeader);
}

newButton2.addEventListener('click', removeButtonCLicked);


//   console.log(body);