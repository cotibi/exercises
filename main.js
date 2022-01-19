const container = document.getElementsByClassName("container")[0]
const headerEl = document.createElement("h1");
const formEl = document.createElement("form");
const labelElName = document.createElement("label");
const labelElGender = document.createElement("label");

const genderElement = document.createElement("p")

const labelRadioBttnMale = document.createElement("label");
const labelRadioBttnFemale = document.createElement("label");

const inputElName = document.createElement("input");
const inputElGender = document.createElement("input");
const inputElAge = document.createElement("input");

const radioBttnMale = document.createElement("input");
const radioBttnFemale = document.createElement("input");
const labelElAge = document.createElement("label");

const button = document.createElement("button");

let state = [];

function createForm() {

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
    const labelTextName = document.createTextNode("Name");
    labelElName.appendChild(labelTextName);
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
    //-----------------------------------------------------------------------------------------------------------------------------
    //Gender <p> element >>>
    const pElGenderText = document.createTextNode("Gender");
    genderElement.appendChild(pElGenderText);
    Object.assign(genderElement, {
        id: "genderElement"
    });
    formEl.appendChild(genderElement);

    //Radio Button for Male >>>
    formEl.appendChild(radioBttnMale);
    Object.assign(radioBttnMale, {
        className: "radio",
        id: "radioM",
        name: "radioBttn",
        type: "radio",
        defaultValue: ""
    })

    // Label for Radio Button Male >>>
    const radioBttnTextMale = document.createTextNode("Male");
    labelRadioBttnMale.appendChild(radioBttnTextMale);
    Object.assign(labelRadioBttnMale, {
        className: "radioL",
        htmlFor: "radioBttn"
    });
    formEl.appendChild(labelRadioBttnMale);

    //Radio Button for Female >>>
    formEl.appendChild(radioBttnFemale);
    Object.assign(radioBttnFemale, {
        className: "radio",
        id: "radioF",
        name: "radioBttn",
        type: "radio",
        defaultValue: ""
    })

    // Label for Radio Button Female >>>
    const radioBttnTextFemale = document.createTextNode("Female");
    labelRadioBttnFemale.appendChild(radioBttnTextFemale);
    Object.assign(labelRadioBttnFemale, {
        className: "radioL",
        htmlFor: "radioBttn"
    });
    formEl.appendChild(labelRadioBttnFemale);

    //----------------------------------------------------------------------------------------------------------------
    // Age Label >>>
    const labelTextAge = document.createTextNode("Age");
    labelElAge.appendChild(labelTextAge);
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
//Check wich radio button is checked and assign respective value:

const checkedMale = () => {
    if (radioBttnMale.checked) 
    {return radioBttnMale.value = "Male"} 
    else return radioBttnMale.value = ""
};
radioBttnMale.onclick = checkedMale;

const checkedFemale = () => {
    if(radioBttnFemale.checked){
        return radioBttnFemale.value = "Female"
    } else return radioBttnFemale = ""
}
radioBttnFemale.onclick = checkedFemale;

const setData = (event) => {
    event.preventDefault();

    let nodeList = document.forms[0].elements;
    let flatNodeList = [...nodeList].map(x => x.value).filter(x => x !== "Submit");

    let objData = {
        userName: flatNodeList[0],
        userGenderMale: flatNodeList[1],
        userGenderFemale: flatNodeList[2],
        userAge: flatNodeList[3]
    };

    console.log(objData);
    state.push(objData);

    radioBttnMale.value = "";
    radioBttnFemale.value = "";
    
};

const logState = () => console.log(state);


const resetForm = () => formEl.reset();

window.onload = createForm;
formEl.addEventListener("submit", setData);
formEl.addEventListener("submit", resetForm);
formEl.addEventListener("submit", logState);