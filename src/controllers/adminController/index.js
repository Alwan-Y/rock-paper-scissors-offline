import { AdminGame } from '../../models/'

class AdminGameController {
    static get = async (req, res) => {
        const findAllAdmin = await AdminGame.findAll()
        res.status(200).json(findAllAdmin)
    }
    
    static loginCheck = async (req, res) => {
        try {
            const { username, password } = req.body

            const findAdmin = await AdminGame.findOne({where: {username}})
            console.log(findAdmin)
            if (!findAdmin) {
                return res.status(404).json({ message: 'Admin not found' })
            }

            if (findAdmin.password === password) {
                return res.status(201).json({message: 'Login succes'})
            }

            res.status(403).json({message: 'Password wrong'})
        } catch(error) {
            res.status(500).json({message: 'Internal server error'})
        }
    }
}

export default AdminGameController