const d = document,
inputName = d.querySelector("#name"),
inputEmail = d.querySelector("#email"),
inputPhone = d.querySelector("#tel"),
btnSend = d.querySelector("#send-btn");

function validate(formValues) {
    let res = formValues.every((value) => {
        return value !== ''
    })

    return res;
}

btnSend.addEventListener("click", (e) => {
    let formValues = [inputName.value, inputEmail.value, inputPhone.value];
    e.preventDefault();
    
    if (validate(formValues)) {
        console.log("Formulario lleno");
    } else {
        console.error("Se requiere llenar todo el formulario");
    }
});