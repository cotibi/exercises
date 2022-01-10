let formBody = [
    " <h1>Form</h1>",
    '<form name="inputForm" id="myForm">',
    '<label for="iname">Name</label>',
    '<input class="inputs" id="iname" name="iname" type="text " placeholder="Name" value="">',
    '<label for="igender ">Gender</label>',
    '<input class="inputs" id="igender" name="igender" type="text" placeholder="Gender" value="">',
    '<label for="iage">Age</label>',
    '<input class="inputs" id="iage" name="iage" type="number" placeholder="Age" value="">',
    '<button class="submitbutton" id="formbutton" type="submit" value="Submit">Submit</button>',
    "</form>"
];

$(formBody.join('')).appendTo('.container');

const sbmt = document.getElementById('myForm');
const elName = document.getElementById("iname");
const elGender = document.getElementById("igender");
const elAge = document.getElementById("iage");
const elForm = document.getElementById("myForm");

let state = [];

const setData = (event) => {
    event.preventDefault();

    let nodeList = document.forms[0].elements;
    let flatNodeList = [...nodeList].map(x => x.value).filter(x => x !== "Submit");

    let objData = {
        userName: flatNodeList[0],
        userGender: flatNodeList[1],
        userAge: flatNodeList[2]
    };

    console.log(objData);
    state.push(objData);
};

const logState = () => console.log(state);


const resetForm = () => elForm.reset();


sbmt.addEventListener("submit", setData);
sbmt.addEventListener("submit", resetForm);
sbmt.addEventListener("submit", logState);