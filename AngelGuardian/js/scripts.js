const formulario = document.getElementById("formulario");

if (formulario) {
    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const edad = document.getElementById("edad").value;
        
        console.log(nombre + " " + edad);
        document.getElementById("resultado").textContent = "Bienvenido " + nombre + " (" + edad + " años)";
    });
}