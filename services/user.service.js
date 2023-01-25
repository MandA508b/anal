const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const ApiError = require(`../errors/api.error`)
const uuid= require('uuid')
const mailService = require('./mail.service')
const tokenService = require('./token.service')
const UserDto = require('../dtos/user.dto')

class userService{
    async registration(email, password, name){
        const candidate = await User.findOne({email})
        if(candidate){
            throw ApiError.preconditionFailed('Корситувач з таким email вже зареєстрований!')
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const user = await User.create({email, password: hashPassword, name, activationLink})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/user/activate/${activationLink}`)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return ({...tokens, user: userDto})
    }

    async login(email, password){
        const user = await User.findOne({email})
        if(!user){
            throw ApiError.notFound('Користувача з таким email не знайдено!')
        }
        let comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            throw ApiError.badRequest('Невірний пароль!')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return ({...tokens, user: userDto})
    }

    async activate(activationLink){
        const user = await User.findOne({activationLink})
        if(!user){
            throw ApiError.notFound("Користувача не знайдено!")
        }
        user.isActivated = true
        await user.save()
    }

    async refresh(refreshToken){
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if(!tokenFromDb || !userData){
            throw ApiError.unauthorized("Користувач не авторизований!")
        }
        const id = userData.id
        const user = await User.findOne({id})
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return ({accessToken: tokens.accessToken, user: userDto})
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async changeName(userId, name){
        const user = await User.findById(userId)
        if(!user){
            throw ApiError.notFound('user з таким userId не знайдено!')
        }
        user.name = name
        await user.save()

        return user
    }

    async validPassword(userId, oldPassword){
        const user = await User.findById(userId)
        if(!user){
            throw ApiError.notFound('user з таким userId не знайдено!')
        }
        let comparePassword = await bcrypt.compare(oldPassword, user.password)
        if(!comparePassword){
            throw ApiError.badRequest('Невірний пароль!')
        }

        return user
    }

    async changePassword(userId, newPassword){
        const user = await User.findById(userId)
        if(!user){
            throw ApiError.notFound('user з таким userId не знайдено!')
        }
        const hashPassword = await bcrypt.hash(newPassword, 3)
        user.password = hashPassword
        await user.save()

        return user
    }

    async nullPageLimit(){
        const users = await User.updateMany({}, {numberOfRequestsToday: 0})

        return
    }

    async changeIsSuperAdmin(userId){
        const user = await User.findById(userId)
        if(user.isSuperAdmin) {
            user.isSuperAdmin = false
            user.pageLimit = Number(10)
        }else{
            user.isSuperAdmin = true
            user.pageLimit = Number(9999999999999)
        }
        await user.save()

        return user
    }

}
module.exports = new userService()