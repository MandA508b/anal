const db= require('../db/index')

const schema = new db.Schema({
    userId:{
        type: db.Schema.Types.ObjectId
    },
    refreshToken:{
        type: String,
        required: true
    }
})

module.exports = db.model('Token', schema)
