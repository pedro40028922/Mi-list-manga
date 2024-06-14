const Categoria = require('../models/manga')

async function busacarTodos(req,res) {
        res.json(await Categoria.find().populate(['usuario','categoria','empretimo','reserva']))
}
async function buscarPorId(req, res){
    const categoria = await Categoria.findById(req.params.id).populate(['usuario','categoria','empretimo','reserva'])

if(categoria){
    res.json(categoria)
} else {
    res.status(404).json({mensagem:"não tem essa categoria nessa bagaça!!" })
}
}

async function create(req, res){
    const categoria = new Categoria(req.body)
    const categoriaCriado = await Categoria.save()
    res.status(201).json({mensagem:" tu criou uma categoria!! bichão"})
}
async function update(req, res) {
    const atualizarcategoria = await Categoria.findByIdAndUpdate(req.params.id, req.body,{new: true})
    if(atualizarcategoria){
        res.json({
            mensagem:" 100% atualizado",
            atualizarcategoria
        })
    } else {
        res.status(404).json({mensagem:"Não tem essa bagaça nesta lista"})
    }
}

async function apagar(req,res) {
    categoriaApagada = await Categoria.findByIdAndDelete(req.params.id)
if(MangaApagado) {
    res.json({
        mensagem:"manga apagado com sucesso!!!",
        MangaApagado
    })
} else{
    res.status(404).json({mensagem:'não tem como apagar algo que não exite!!!'})
}
}
module.exports = {
    busacarTodos,
    buscarPorId,
    create,
    update,
    
}