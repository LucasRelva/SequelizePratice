const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async show(req, res) {
        //encontrar os usuarios com email que termina com @hotmail.com
        // desses users quero moram na rua Pracinha do skate
        // desses quero buscar as techs que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@hotmail.com'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Pracinha do skate' }, attributes: ['street', 'number'] },
                {
                    association: 'techs',
                    attributes: ['name'],
                    //through: {attributes: []}, para nao mostrar a tabela de ligação no json
                    required: false,
                    where: {
                        name: {
                            [Op.like]: 'React%'
                        }
                    }
                },
            ]
        })

        return res.json(users)
    }
}