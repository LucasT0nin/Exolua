const ImagePt = require("../models/Imagept.js");
var fs = require("fs");

module.exports = {
  async delete(req, res) {
    try {
      let id = req.query.id;
      const project = await ImagePt.findByPk(req.query.id);
      if (project) {
        const filePath = `./src/uploads/${project.image_path}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Erro ao excluir o arquivo" });
          }
          ImagePt.destroy({
            where: {
              id: id,
            },
          });
          return res.json({ message: "Arquivo excluído com sucesso" });
        });
      } else {
        console.log("Projeto não encontrado");
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao excluir o arquivo: " + error });
    }
  },
};
