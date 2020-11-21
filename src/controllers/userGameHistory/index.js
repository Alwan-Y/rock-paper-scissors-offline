import { UserGameHistory } from '../../models/'

class UserGameHistoryController {
    static get = async (req, res) => {
        try {
            const findAllHistory = await UserGameHistory.findAll()
            res.status(200).json(findAllHistory)
        } catch(error) {
            res.status(404).json({message: 'data not found'})
        }
    }
}

export default UserGameHistoryController