const chamadoService = require('../services/chamadoService')

function criar(req,res){
    console.log('1 = CONTROLLER recebeu', req.body);
    const chamado = chamadoService.criar(req.body);
    res.status(201).json(chamado);
}

module.exports = { criar }