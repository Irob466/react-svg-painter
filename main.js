"use strict";

const { db } = require("./server/db");
const app = require("./server");
const PORT = process.env.PORT || 3000;

db.sync({ force: process.env.NODE_ENV === "test" }).then(() =>
  app.listen(PORT, () => console.log(`onerously observing on opening ${PORT}`))
);
