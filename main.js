const container = document.getElementsByClassName("container")[0]
const headerEl = document.createElement("h1");
const formEl = document.createElement("form");
const labelElName = document.createElement("label");
const labelElGender = document.createElement("label");
const labelElAge = document.createElement("label");
const inputElName = document.createElement("input");
const inputElGender = document.createElement("input");
const inputElAge = document.createElement("input");
const button = document.createElement("button");

let state = [];

window.onload = function createForm () {

    // Form header >>>>
    const formHeaderText = document.createTextNode("Form");
    headerEl.appendChild(formHeaderText);
    container.appendChild(headerEl);

    // Form element >>>
    Object.assign(formEl, {
        name: "inputForm",
        id: "myForm"
    });
   container.appendChild(formEl);

    // Name Label >>>
    const nameLabelTextName = document.createTextNode("Name");
    labelElName.appendChild(nameLabelTextName);
    Object.assign(labelElName, {
        htmlFor: "iname",
    });
    formEl.appendChild(labelElName);

    // Name Input element >>>
    formEl.appendChild(inputElName);
    Object.assign(inputElName, {
        className: "inputs",
        id: "iname",
        name: "name",
        type: "text",
        placeholder: "Name",
        defaultValue: ""
    })

    //Gender Label >>>
    const nameLabelTextGender = document.createTextNode("Gender");
    labelElGender.appendChild(nameLabelTextGender);
    Object.assign(labelElGender, {
        htmlFor: "igender",
    });
    formEl.appendChild(labelElGender);

    //Gender Input element >>>
    formEl.appendChild(inputElGender);
    Object.assign(inputElGender, {
        className: "inputs",
        id: "igender",
        name: "igender",
        type: "text",
        placeholder: "Gender",
        defaultValue: ""
    })

    // Age Label >>>
    const nameLabelTextAge = document.createTextNode("Age");
    labelElAge.appendChild(nameLabelTextAge);
    Object.assign(labelElAge, {
        htmlFor: "iage",
    });
    formEl.appendChild(labelElAge);

    //Age Input element >>>
    formEl.appendChild(inputElAge);
    Object.assign(inputElAge, {
        className: "inputs",
        id: "iage",
        name: "iage",
        type: "number",
        placeholder: "Age",
        defaultValue: ""
    })

    //Button >>>
    const buttonText = document.createTextNode("Submit");
    button.appendChild(buttonText);
    formEl.appendChild(button);
    Object.assign(button, {
        className: "submitbutton",
        id: "formbutton",
        type: "submit",
        defaultValue: "Submit"
    })
};

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


const resetForm = () => formEl.reset();


formEl.addEventListener("submit", setData);
formEl.addEventListener("submit", resetForm);
formEl.addEventListener("submit", logState);