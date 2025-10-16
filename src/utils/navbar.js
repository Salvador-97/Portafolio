export const linksNav = [
        { nombre: "Inicio", href: "#inicio" },
        { nombre: "Proyectos", href: "#proyectos" },
        { nombre: "Habilidades", href: "#habilidades" },
        { nombre: "Acerca de mi", href: "#acerca" },
        { nombre: "Contacto", href: "#contacto" }
    ]

export function abrirNav() {
    const botonNav = document.querySelector('[name="ver-nav"]');

    if(!botonNav)  return console.warn("No se encontro el boton.");

    botonNav.addEventListener('click', e => {
        e.preventDefault();

        const link = document.querySelector('[name="links-nav"]');
        
        if (!link) return console.warn("Boton 404");

        

    })
}