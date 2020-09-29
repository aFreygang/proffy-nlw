// Procurar o botão
document.querySelector("#add-time")
.addEventListener("click", cloneField)
// Quando clicar no botão
// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) // Node serve para se referir à estrutura HTML // Boolean é true ou false

    // Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    // Limpar os campos
    fields.forEach(function(field) {
        // Pegar o field do momento
        field.value = ""
    })

    // Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}