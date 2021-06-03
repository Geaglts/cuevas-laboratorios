const $contactUsForm = document.querySelector("#contatUs-form");

async function handleContactus(evt) {
    evt.preventDefault();
    const form = new FormData(this);
    const formLabelState = document.getElementById("formLabelState");
    const valorAnterior = formLabelState.textContent;
    formLabelState.style.display = "block";
    formLabelState.textContent = "Enviando 📨...";
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            Accept: "application/json",
        },
    });
    if (response.status == 200) {
        $contactUsForm.reset();
        formLabelState.textContent = valorAnterior;
        setTimeout(() => {
            formLabelState.style.display = "none";
        }, 2000);
    }
}

$contactUsForm.addEventListener("submit", handleContactus);
