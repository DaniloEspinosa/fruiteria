let totalCompra = 0
let mensajeCompra = ""


// Usuarios de prueba
let usuarios = [
    { "nombre": "Pepe", "password": 1234 },
    { "nombre": "Anna", "password": "Java_2023" }
]

// Validar los usuarios
function login() {
    let nombre = document.getElementById("nombre").value
    let password = document.getElementById("password").value
    // alert(`Bienvenido ${nombre}`)
    document.getElementById("nombre").value = ""
    document.getElementById("password").value = ""

    let mensaje = "Error en los datos"
    for (let i = 0; i < usuarios.length; i++) {
        if ((usuarios[i].nombre == nombre) && (usuarios[i].password == password)) {
            mensaje = `todo OK`
            document.getElementById("fondo").style.display = "none"
            document.getElementById("container").style.display = "block"

            return
        }
    }
    document.getElementById("error").innerText = mensaje
}


// Proceso de compra
function comprar(fruta, precio, unidad) {
    let cantidad = prompt(`¿Que cantidad de ${fruta} quieres comprar?`)

    let continuar = true
    
    while (continuar) {


        // vvv Opción realizada en la clase vvv
        // if (cantidad == null) {
        //     return
        // }

        // if (isNaN (cantidad) || cantidad <= 0) {
        //     alert(`"${cantidad} no es una cantidad válida.`)
        // }


        if (cantidad > 0 && cantidad != NaN) {


            let parcialCompra = precio * cantidad
            // redondear a 2 decimales
            parcialCompra = parcialCompra.toFixed(2)
            // alert(typeof(parcialCompra))
            // alert(`${precio} x ${cantidad} = ${parcialCompra}`)
            totalCompra += Number(parcialCompra)
            // alert(typeof totalCompra)
            // alert(totalCompra)

            cantidad = Number(cantidad).toFixed(2)
            document.getElementById("pendiente").innerText = "Esta comprando lo siguiente:"
            document.getElementById("carrito").innerHTML += `<p class="parcialCompra">${fruta}:${cantidad} ${unidad} x ${precio} €/${unidad} = ${parcialCompra} €</p>`

            document.getElementById("totalCompra").innerHTML = `<p id="finalCompra"> Total:$${totalCompra.toFixed(2)} € </p>`
           
            continuar = false

        } else {
            cantidad = prompt(`Has puesto un valor incorrecto\n¿Que cantidad de ${fruta} quieres comprar?`)
        }
    }
}

