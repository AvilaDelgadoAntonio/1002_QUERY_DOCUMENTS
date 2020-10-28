/* Insertar datos para probar el operador AND en su forma implícita y explícita */
db.inventario.insertMany([
    { producto: "diario", cantidad: 25, medidas: { alto: 14, ancho: 21, unidad_medida: "cm" }, estado: "disponible" },
    { producto: "cuaderno", cantidad: 50, medidas: { alto: 8.5, ancho: 11, unidad_medida: "pulgada" }, estado: "disponible" },
    { producto: "papel", cantidad: 100, medidas: { alto: 8.5, ancho: 11, unidad_medida: "pulgada" }, estado: "pedido" },
    { producto: "carpeta", cantidad: 75, medidas: { alto: 22.85, ancho: 30, unidad_medida: "cm" }, estado: "pedido" },
    { producto: "tarjeta", cantidad: 45, medidas: { alto: 10, ancho: 15.25, unidad_medida: "cm" }, estado: "obsoleto"},
    { producto: "archivador", cantidad: 95, medidas: { alto: 8, ancho: 8.25, unidad_medida: "pulgada" }, estado: "obsoleto"}
]);