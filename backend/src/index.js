const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
  metodo get = buscar/listar uma informação do back-end
  metodo post = criar uma informação no back-end
  put = alterar uma informação no back-end
  delete = deletar uma informação no back-end
*/
/*
  Query params: paramentros enviados na rota após "?", normalmente usado para filtros e paginação
  route params: utilizado para identificar recursos
  request body: corpo da requisição
*/

app.listen(3333);
