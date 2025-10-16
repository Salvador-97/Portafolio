export function copiar(elemento) {
    const texto = document.querySelector(`[name=${elemento}]`);
    if (!texto) return

    const contenido = texto.innerHTML || texto.textContent || texto.value

    navigator.clipboard.writeText(contenido)
        .then(() => {
            alert("Copiado");
        })
        .catch(() => {
        })
}

