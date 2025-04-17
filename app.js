//importazione di express
const express = require("express")

//inizializzo express dentro la variabile app
const app = express();

//definizione del numero di porta
const port = 3000;

//impostazione dello strumento per recuperare gli asset statici
app.use(express.static("public"));

