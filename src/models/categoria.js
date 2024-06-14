const mongoose = require('mongoose')
        const schema = new mongoose.Schema ({
nome: {
    type: String,
        required: true
},
quantidade_livros:{
    type: String,
        required: true
},
Data_criacao: {
    type: String,
        required: false
},
Autor:{
    type: String,
        required: true
},
manga: {
    type: mongoose.Types.ObjectId,
        ref: 'manga',
            required: true
},
},
{
    timestamps: true
})
    const Categoria = mongoose.model('categoria', schema)
module.exports = Categoria 