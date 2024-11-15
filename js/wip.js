function wip(id) {
    cabecera = "🚧 Enlace en construcción 🚧\n\n"
    cuerpo = ""

    switch (id) {
        case "obsidian":
            cuerpo =    "Quiero hacer públicas mis notas de ciberseguridad, pero aún necesito tiempo para organizarlas y darles un formato adecuado (y dinero para pagar Obsidian Publish)."
            break;

        default:
            cuerpo =    "Si estás leyendo esto, significa que he vinculado mal una referencia. Toma, una bandera: SRG{V4Y4-D3SP1ST3}."
    }

    alert(cabecera + cuerpo);
}
