const mongoose = require('mongoose') 
        const schema = new mongoose.Schema ({
manga: {
    type: mongoose.Types.ObjectId,
        ref: 'manga',
            required: true
},
Usuario:{
    type: String,
        required: true
},
Data_reserva: {
    type: String,
        required: true
},
Status:{
    type: String,
        required: true
},
Genero:{
    type: String,
        required: true
}

},

{
    timestamps: true
})
    const Reserva = mongoose.model('reserva', schema)
module.exports = Reserva