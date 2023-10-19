const ImagePt = require("../models/Imagept.js");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload1 = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const allowedExtensions = [".png", ".jpeg", ".jfif", ".jpg"];
    const ext = path.extname(file.originalname);
    if (allowedExtensions.includes(ext)) {
      cb(null, true);
    } else {
      console.error("Tipo de arquivo não suportado");
      cb(null, false);
    }
  },
});

async function banco(dados) {
  try {
    await ImagePt.create({
      image_path: dados,
      created_at: 21,
      updated_at: 111,
    });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  uploadAvatar: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send({
          status: 0,
          message: "Nenhum arquivo enviado.",
        });
      }

      if (req.file.mimetype === false) {
        return res.status(400).send({
          status: 0,
          message: "Tipo de arquivo não suportado.",
        });
      }

      await banco(req.file.filename);

      return res.status(200).send({
        status: 1,
        message: "Avatar carregado com sucesso!",
      });
    } catch (error) {
      return res.status(500).send({
        status: 0,
        message: "erro 1: " + `${error}`,
      });
    }
  },
  upload: upload1,
};
