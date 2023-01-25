const db= require('../db/index')

const schema = new db.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    isActivated:{
        type: Boolean,
        default: false
    },
    activationLink:{
        type: String
    },
    isSuperAdmin: {
        type: Boolean,
        default: false
    },
    pageLimit:{
        type: Number,
        default: 10
    },
    numberOfRequestsToday: {
        type: Number,
        default: 0
    },
    numberOfRequestsAllTime: {
        type: Number,
        default: 0
    },
    registrationDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = db.model('User', schema)