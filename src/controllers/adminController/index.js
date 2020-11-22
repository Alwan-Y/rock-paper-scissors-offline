import { AdminGame } from '../../models/'

class AdminGameController {
    static get = async (req, res) => {
        const findAllAdmin = await AdminGame.findAll()
        res.status(200).json(findAllAdmin)
    }
}

export default AdminGameController