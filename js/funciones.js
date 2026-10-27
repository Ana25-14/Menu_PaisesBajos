
document.addEventListener("DOMContentLoaded", () => {
    const botonesFiltro = document.querySelectorAll(".filtro");
    const productos = document.querySelectorAll(".producto");

    botonesFiltro.forEach((boton) => {
        boton.addEventListener("click", () => {
            const categoriaElegida = boton.dataset.filtro;

            // Actualizar el botón seleccionado
            botonesFiltro.forEach((otroBoton) => {
                const estaActivo = otroBoton === boton;

                otroBoton.classList.toggle("activo", estaActivo);
                otroBoton.setAttribute(
                    "aria-pressed",
                    String(estaActivo)
                );
            });

            // Mostrar solamente los platos de la categoría elegida
            productos.forEach((producto) => {
                const categoriaProducto = producto.dataset.categoria;

                const coincide =
                    categoriaElegida === "todos" ||
                    categoriaProducto === categoriaElegida;

                producto.classList.toggle("oculto", !coincide);
            });
        });
    });
});
