function wip(id) {
    cabecera = "🚧 Enlace en construcción 🚧\n\n"
    cuerpo = ""

    switch (id) {
        case "htb":
            cuerpo =    "Todavía no he hecho ninguna máquina de HackTheBox porque he usado más HTB Academy, así que mi perfil aún está vacío."
            break;

        case "obsidian":
            cuerpo =    "Quiero hacer públicas mis notas de ciberseguridad, pero aún necesito tiempo para organizarlas y darles un formato adecuado (y dinero para pagar Obsidian Publish)."
            break;

        case "notion":
            cuerpo =    "Creo que podría ser interesante tener una especie de portfolio en Notion, me parece muy útil, versátil y fácil de mantener, pero aún tengo que empezarlo."
            break;

        default:
            cuerpo =    "Si estás leyendo esto, significa que he vinculado mal una referencia. Toma, una bandera: SRG{V4Y4-D3SP1ST3}."
    }

    alert(cabecera + cuerpo);
}
