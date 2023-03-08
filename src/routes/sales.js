const { verifyToken } = require("../middlewares/auth");
const { create, get, getId, remove, update } = require("../controllers/sales");

exports.salesRoutes = (app) => {
  //registrar venda
  app.post("/sales", verifyToken, create);
  //puxar todas as vendas
  app.get("/sales", verifyToken, get);
  //puxar venda pelo id
  app.get("/sales/:id", verifyToken, getId);
  //editar venda
  app.put("/sales/:id", verifyToken, update);
  //remover venda
  app.delete("/sales/:id", verifyToken, remove);
};
