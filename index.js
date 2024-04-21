let buttons = document.getElementsByTagName("button");
let answerEls = document.getElementsByTagName('h3');
let inputEl = document.getElementsByTagName('input');

let array = ['one', 'two', 'three', 'four', 'five'];

// Convert the array into string
buttons[0].onclick = () => {
    answerEls[0].innerHTML = `==> Before array is: [${array}]`;
    answerEls[1].innerHTML = `==> After converting string is: ${array.toString()}`;

    buttons[1].disabled = false;

    buttons[1].onclick = () => {
        answerEls[0].innerHTML = "";
        answerEls[1].innerHTML = "";
    }
}

// Delete last data from array
buttons[2].onclick = () => {

    answerEls[2].innerHTML = `==> Before deleting last index array is: [${array}]`;
    let deletedIndex = array.pop();
    answerEls[3].innerHTML = `==> After deleting last index array is: [${array}]`;
    answerEls[4].innerHTML = `==> Deleted index is: [${deletedIndex}]`;

    buttons[3].disabled = false;

    buttons[3].onclick = () => {
        answerEls[2].innerHTML = "";
        answerEls[3].innerHTML = "";
        answerEls[4].innerHTML = "";
    }

    if (array.length === 0) {
        alert("Refresh the page to get new array")
    }
}

// Delete first data from array
buttons[4].onclick = () => {

    answerEls[5].innerHTML = `==> Before deleting first index array is: [${array}]`;
    let deletedIndex = array.shift();
    answerEls[6].innerHTML = `==> After deleting first index array is: [${array}]`;
    answerEls[7].innerHTML = `==> Deleted index is: [${deletedIndex}]`;

    buttons[5].disabled = false;

    buttons[5].onclick = () => {
        answerEls[5].innerHTML = "";
        answerEls[6].innerHTML = "";
        answerEls[7].innerHTML = "";
    }

    if (array.length === 0) {
        alert("Refresh the page to get new array")
    }
}

// Insert input filed data into an array
buttons[6].onclick = () => {
    let inputVal = inputEl[0].value;
    let newArray = [];

    newArray.push(inputVal);

    answerEls[8].innerHTML = `==> Your converted array is: [${newArray}]`;

    buttons[7].disabled = false;

    buttons[7].onclick = () => {
        answerEls[8].innerHTML = "";
    }
}

// Insert $ sign in the place of ,
buttons[8].onclick = () => {
    answerEls[9].innerHTML = `==> Before inserting $ sign array is: [${array}]`;
    answerEls[10].innerHTML = `==> After inserting $ sign array is: [${array.join('$')}]`;

    buttons[9].disabled = false;

    buttons[9].onclick = () => {
        answerEls[9].innerHTML = "";
        answerEls[10].innerHTML = "";
    }
}

// Insert a value at first of an array
buttons[10].onclick = () => {
    answerEls[11].innerHTML = `==> Before inserting value at first array is: [${array}]`;
    let newArray = array.unshift("AHAD");
    answerEls[12].innerHTML = `==> After inserting value at first array is: [${array}]`;

    buttons[11].disabled = false;

    buttons[11].onclick = () => {
        answerEls[11].innerHTML = "";
        answerEls[12].innerHTML = "";
    }
}

// Merge three array
buttons[12].onclick = () => {
    let array2 = ['six', 'seven', 'eight', 'nine', 'ten'];
    let array3 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];

    answerEls[13].innerHTML = `==> First array is: [${array}]`;
    answerEls[14].innerHTML = `==> Second array is: [${array2}]`;
    answerEls[15].innerHTML = `==> Third array is: [${array3}]`;

    let mergeArray = array.concat(array2, array3);

    answerEls[16].innerHTML = `==> Merge array is: [${mergeArray}]`;

    buttons[13].disabled = false;

    buttons[13].onclick = () => {
        answerEls[13].innerHTML = "";
        answerEls[14].innerHTML = "";
        answerEls[15].innerHTML = "";
        answerEls[16].innerHTML = "";
    }
}

// Delete third index data
buttons[14].onclick = () => {
    answerEls[17].innerHTML = `==> Before Deleting array is: [${array}]`;
    array.splice(3, 1);
    answerEls[18].innerHTML = `==> After Deleting array is: [${array}]`;

    buttons[15].disabled = false;

    buttons[15].onclick = () => {
        answerEls[17].innerHTML = "";
        answerEls[18].innerHTML = "";
    }
}

// Write a new array using slice
buttons[16].onclick = () => {
    answerEls[19].innerHTML = `==> Before creating new array is: [${array}]`;
    let slicedArray = array.slice(2, 4);
    answerEls[20].innerHTML = `==> After creating new array is: [${slicedArray}]`;

    buttons[17].disabled = false;

    buttons[17].onclick = () => {
        answerEls[19].innerHTML = "";
        answerEls[20].innerHTML = "";
    }
}