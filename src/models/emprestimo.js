const mongoose = require('mongoose')
        const schema = new mongoose.Schema ({
manga: {
    type: mongoose.Types.ObjectId,
        ref: 'manga',
            required: true
},
usuario:{
    type: mongoose.Types.ObjectId,
        ref: 'usuario',
            required: false
},
Data_emprestimo: {
    type: Date,
        required: true
},
status:{
    type: String,
        required: true
}
},
{
    timestamps: true
})
    const Emprestimo = mongoose.model('emprestimo', schema)
module.exports = Emprestimo 