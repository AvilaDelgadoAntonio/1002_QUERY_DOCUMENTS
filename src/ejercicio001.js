/* Insertar datos modificados de la colección INVENTORY localizada en https://docs.mongodb.com/manual/tutorial/query-documents */
db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "Available" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "Available" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "Unavailable" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "Unavailable" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "Obsolete"}
     ]);