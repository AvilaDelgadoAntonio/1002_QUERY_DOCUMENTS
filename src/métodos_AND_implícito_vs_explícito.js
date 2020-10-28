
/* Sintaxis para que la consulta, con AND "explícito" nos devuelva todos los documentos cuya cantidad sea mayor o igual que 50 y su estado sea obsoleto */

db.inventario.find( { $and: [ { cantidad: { $gte: 50 } }, { estado: { $eq: "obsoleto" } } ] } ).pretty()


/* Sintaxis para que la consulta, con AND "implícito" nos devuelva todos los documentos cuya cantidad sea mayor o igual que 50 y su estado sea obsoleto */

db.inventario.find( { cantidad: { $gte: 50 }, estado: { $eq: "obsoleto" } } ).pretty()