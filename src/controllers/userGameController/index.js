import { UserGame } from '../../models'

class UserGameController {
    static get = async (req, res) => {
        try {
            const findAllUser = await UserGame.findAll()
            res.status(200).json(findAllUser)
        } catch(error) {
            res.status(404).json({message: 'data not found'})
        }
    }

    static create = async (req, res) => {
        try {
            const { username, password } = req.body

            const findUser = await UserGame.findOne({where: {username} })

            if (findUser) {
                return res.status(404).json({message: 'Username already available'})
            }

            const createUser = await UserGame.create({
                username,
                password
            })

            res.status(200).send({ message: 'succes add user data'})
        } catch(error) {
            res.status(500).send(error)
        }
    }

    static update = async (req, res) => {
        try {
            const { id } = req.params
            const { username, password } = req.body

            const findUser = await UserGame.findOne({where: {id} })

            if (!findUser) {
                res.status(404).json({message: 'User not found'})
            }

            const updateUser = await UserGame.update({
                username,
                password
            }, {where: {id} })

            res.status(200).json({message: 'updating user'})
        } catch(error) {
            res.status(500).send(error)
        }
    }

    static delete = async (req, res) => {
        try {
            const { id } = req.params
        
            const findUser = await UserGame.findOne({ where: {id}})

            if (!findUser) {
                return res.status(404).json({message: 'User not found'})
            }

            const deleted = await UserGame.destroy({where: { id }})

            res.status(200).json({message: 'Deleted UserGame'})
        } catch(error) {
            res.status(500).json({message: 'Internal Server Error'})
        }
    }


}

export default UserGameController