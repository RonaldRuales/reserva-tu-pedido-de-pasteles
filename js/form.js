document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();

    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593985329327";

    let cliente = document.querySelector("#cliente").value;
    let fecha = document.querySelector("#fecha").value;
    let hora = document.querySelector("#hora").value;
    let empleado = document.querySelector("#empleado").value;
    let servicio = document.querySelector("#servicio").value;
    let resp = document.querySelector("#respuesta");

    resp.classList.remove("fail");
    resp.classList.remove("send");

    let url = `https://api.whatsapp.com/send?phone=593985329327&text=
		*Mayra's Panadería y Pastelería*%0A
		*Reserva tu Pedido a Domicilio *%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
		*Indica la fecha de tu reserva*%0A
		${fecha}%0A
		*Indica la hora de tu reserva*%0A
		${hora}%0A
		*Empleado de preferencia*%0A
		${empleado}%0A
		*¿Cuál es el pastel que desea?*%0A
		${servicio}`;

    if (cliente === "" || fecha === "" || hora === "") {
        resp.classList.add("fail");
        resp.innerHTML = `Faltan algunos datos, ${cliente}`;
        return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

    window.open(url);
});