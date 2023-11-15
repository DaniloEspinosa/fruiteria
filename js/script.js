let totalCompra = 0
let mensajeCompra = ""


function comprar(fruta, precio, unidad) {
    let cantidad = prompt(`¿Que cantidad de ${fruta} quieres comprar?`)

    let continuar = true
    
    while (continuar) {

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

