const mongoose = require('mongoose')
        const schema = new mongoose.Schema ({
Titulo: {
    type: String,
        required: true
},
Genero:{
    type: String,
        required: true
},
Editora: {
    type: String,
        required: true
},
Autor:{
    type: String,
        required: true
},
sinopse:{
    type: String,
        required: false
},
categoria: {
    type: mongoose.Types.ObjectId,
        ref: 'categoria',
            required: true
},
reserva: {
    type: mongoose.Types.ObjectId,
        ref: 'reserva',
            required: true
},
emprestimo: {
    type: mongoose.Types.ObjectId,
        ref: 'emprestimo',
            required: true
},
        },
{
    timestamps: true
})
    const Manga = mongoose.model('manga', schema)
module.exports = Manga 