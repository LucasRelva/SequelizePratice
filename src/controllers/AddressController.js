const Address = require('../models/Address')
const User = require('../models/User')
const { index } = require('./UserController')

module.exports = {
    async index(req, res) {
        const{ id_user } = req.params

        const user = await User.findByPk(id_user, {
            include: { association: 'addresses' }
        })

        return res.json(user)
    },

    async store(req, res) {
        const { id_user } = req.params
        const { zipcode, street, number } = req.body

        const user = await User.findByPk(id_user)

        if (!user)
            return res.status(400).json({ error: 'User not found' })

        const address = await Address.create({
            zipcode,
            street,
            number,
            id_user,
        })

        return res.json(address)
    }
}