fetch('assets/js/api.json')
    .then(response => response.json())
    .then(data => {
        const queryString = document.location.search;
        const params = new URLSearchParams(queryString);
        const id = parseInt(params.get("id"));

        const objetoBuscado = data.crafteos.find(objeto => objeto.id === id);

        if (!objetoBuscado) {
            document.querySelector(".contenedor_info").innerHTML = `
                <h2>Objeto no encontrado</h2>
            `;
            return;
        }

        const contenedor = document.querySelector(".contenedor_info");

        contenedor.innerHTML = `
            <section class="cuadro">
                <div class="Informacion">
                    <div class="info-contenedor">
                        <div class="nombre-descripcion">
                            <h2 id="nombre-objeto">${objetoBuscado.nombre}</h2>
                            <p id="descripcion-objeto">${objetoBuscado.descripcion}</p>
                        </div>
                        <img id="imagen-objeto" src="${objetoBuscado.imagen}" alt="${objetoBuscado.nombre}" class="imagen-grande">
                        <div class="materiales-crafteo">
                            <h3>Materiales necesarios:</h3>
                            <ul>
                                ${objetoBuscado.materiales.map(material => `<li>${material}</li>`).join('')}
                            </ul>
                            <img id="crafteo-objeto" src="${objetoBuscado.crafteo}" alt="Crafteo de ${objetoBuscado.nombre}" class="imagen-crafteo">
                        </div>
                        <a class="enlace" href="index.html">Volver</a>
                    </div>
                </div>
            </section>
        `;
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
