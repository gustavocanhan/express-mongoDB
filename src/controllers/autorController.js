import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutor(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} FALHA NA REQUISIÇÃO`,
      });
    }
  }

  static async listaAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} FALHA NA REQUISIÇÃO DO autor`,
      });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({
        message: "criado com sucesso",
        autor: novoAutor,
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - FALHA AO CADASTRAR AUTOR!`,
      });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: "Autor atualizado!",
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} FALHA NA ATUALIZAÇÃO DO AUTOR`,
      });
    }
  }

  static async removerAutorPorId(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({
        message: "Autor removido com sucesso",
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} FALHA NA EXCLUSÃO DO AUTOR`,
      });
    }
  }
}

export default AutorController;
