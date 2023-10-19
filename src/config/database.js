module.exports = {
  host: "localhost",
  dialect: "mysql",
  username: "root",
  password: "00000000",
  database: "imagebank",
  define: {
    timestamps: true,
    underscored: true,
  },
};

// const ImagePt = require("../models/Imagept.js");
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./src/uploads/"); // Define o destino para salvar os arquivos enviados
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname); // Define o nome do arquivo
//   },
// });

// var upload1 = multer({ storage: storage });

// async function banco(dados) {
//   try {
//     await ImagePt.create({
//       image_path: dados,
//       created_at: 21,
//       updated_at: 111,
//     });
//   } catch (err) {
//     return err;
//   }
// }

// module.exports = {
//   uploadAvatar: async (req, res) => {
//     try {
//       if (!req.file) {
//         return res.status(400).send({
//           status: 0,
//           message: "Nenhum arquivo enviado.",
//         });
//       }
//       try {
//         await banco(req.file.filename);
//         return res.status(200).send({
//           status: 1,
//           message: "Avatar carregado com sucesso!",
//         });
//       } catch (error) {
//         const storage = multer.diskStorage({
//           destination: function (req, file, cb) {
//             cb(null, "./src/uploads_fail/"); // Define o destino para salvar os arquivos enviados
//           },
//           filename: function (req, file, cb) {
//             cb(null, Date.now() + "-" + file.originalname); // Define o nome do arquivo
//           },
//         });
//         upload1 = multer({ storage: storage });
//         return res.status(500).send({
//           status: 0,
//           message: "erro 1:" + `${error}`,
//         });
//       }
//     } catch (error) {
//       return res.status(500).send({
//         status: 0,
//         message: "erro 2:" + `${error}`,
//       });
//     }
//   },
//   upload: upload1,
// };
