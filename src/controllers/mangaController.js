const Manga = require('../models/manga')

async function busacarTodos(req,res) {
        res.json(await Manga.find().populate(['usuario','categoria','empretimo','reserva']))
}
async function buscarPorId(req, res){
    const manga = await Manga.findById(req.params.id).populate(['usuario','categoria','empretimo','reserva'])

if(manga){
    res.json(manga)
} else {
    res.status(404).json({mensagem:"não tem esse manga nessa bagaça!!" })
}
}

async function create(req, res){
    const manga = new Manga(req.body)
    const mangaCriado = await manga.save()
    res.status(201).json({mensagem:" tu criou um manga!! bichão"})
}
async function update(req, res) {
    const atualizarManga = await Manga.findByIdAndUpdate(req.params.id, req.body,{new: true})
    if(atualizarManga){
        res.json({
            mensagem:" 100% atualizado",
            atualizarManga
        })
    } else {
        res.status(404).json({mensagem:"Não tem essa bagaça nesta lista"})
    }
}

async function apagar(req,res) {
    MangaApagado = await Manga.findByIdAndDelete(req.params.id)
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
    apagar
}