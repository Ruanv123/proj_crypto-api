const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

require("./routes/index")(app);

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta,${port}`);
});
