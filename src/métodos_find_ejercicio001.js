
/* Sintaxis para que la consulta nos devuelva todos los documentos de la colección */

db.inventory.find( {} )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuyo estado sea “available” */

db.inventory.find( { status: "Available" } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuyo estado  sea “unavailable” o “obsolete” */

db.inventory.find( { status: { $in: [ "Unavailable", "Obsolete" ] } } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuyo estado  sea “available” o la cantidad sea “menos que” (less than) 50 */

db.inventory.find( { $or: [ { status: "Available" }, { qty: { $lt: 50 } } ] } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuyo estado  sea “available” y la cantidad sea “menos que” (less than) 50 */

db.inventory.find( { status: "Available", qty: { $lt: 50 } } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuyo estado  sea “available” y, o bien la cantidad es “menos que” (less than) 30 o el nombre empieza por “p”. */

db.inventory.find( { status: "Available", $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ] } )