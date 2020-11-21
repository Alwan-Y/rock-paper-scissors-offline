import { UserGameBiodata } from '../../models'

class UserGameBiodataController {
    static get = async (req, res) => {
        try {
            const findAllBio = await UserGameBiodata.findAll()
        
            res.status(200).json(findAllBio)
        } catch(error) {
            res.status(404).json({message: 'data not found'})
        }
    }

    static create = async (req, res) => {
        try {
            const { fullname, addres, gender, age, userGameId } = req.body

            const createUser = await UserGameBiodata.create({
                fullname,
                addres,
                gender,
                age,
                userGameId
            })

            res.status(200).send({ message: 'succes add user biodata data'})
        } catch(error) {
            res.status(500).send(error)
        }
    }

    static update = async (req, res) => {
        const { id } = req.params
        const { fullname, addres, gender, age } = req.body

        const findBiodata = await UserGameBiodata.findOne({where: {id} })

        if (!findBiodata) {
            res.status(404).json({message: 'User not found'})
        }

        const updateBiodata = await UserGameBiodata.update({
            fullname,
            addres,
            gender,
            age
        }, {where: {id} })

        res.status(200).json({message: 'updating user biodata'})
    }

    static delete = async (req, res) => {
        try {
            const { id } = req.params
        
            const findBiodata = await UserGameBiodata.findOne({ where: {id}})

            if (!findBiodata) {
                return res.status(404).json({message: 'Biodata not found'})
            }

            const deleted = await UserGameBiodata.destroy({where: { id }})

            res.status(200).json({message: 'Deleted Biodata'})
        } catch(error) {
            res.status(500).json({message: 'Internal Server Error'})
        }
    }
}

export default UserGameBiodataController