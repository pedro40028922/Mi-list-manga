const mongoose = require('mongoose') 
        const schema = new mongoose.Schema ({
Nome: {
    type: String,
        required: true
},
Email:{
    type: String,
        required: true
},
Telefone: {
    type: String,
        required: true
},
Endereco:{
cep: String,
estado: String,
cidade: String,
bairro: String,
complemento: String
},

},

    {timestamps: true}
)
    const Usuario = mongoose.model('usuario', schema)
module.exports = Usuario 