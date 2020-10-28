
/* Sintaxis para que la consulta nos devuelva todos los documentos de la colección que el estado sea "disponible" */

db.inventario.find( { estado: { $eq: "disponible" } } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuya cantidad sea mayor que 50 */

db.inventario.find( { cantidad: { $gt: 50 } } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuya cantidad sea mayor o igual de 50 */

db.inventario.find( { cantidad: { $gte: 50 } } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuya cantidad sea menor que 45 */

db.inventario.find( { cantidad: { $lt: 45 } } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuya cantidad sea menor o igual que 45 */

db.inventario.find( { cantidad: { $lte: 45 } } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuyo estado no sea “obsoleto” */

db.inventario.find( { estado: { $ne: "obsoleto" } } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuya cantidad sea mayor o igual que 50 y su estado sea obsoleto */

db.inventario.find( { $and: [ { cantidad: { $gte: 50 } }, { estado: { $eq: "obsoleto" } } ] } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuya cantidad sea mayor o igual que 50 o su estado sea obsoleto */

db.inventario.find( { $or: [ { cantidad: { $gte: 50 } }, { estado: { $eq: "obsoleto" } } ] } )

/* Sintaxis para que la consulta nos devuelva todos los documentos cuya cantidad no sea mayor ni igual que 50 ni su estado sea obsoleto */

db.inventario.find( { $nor: [ { cantidad: { $gte: 50 } }, { estado: { $eq: "obsoleto" } } ] } )