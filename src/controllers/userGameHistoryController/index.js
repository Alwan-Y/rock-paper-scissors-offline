import { UserGameHistory, UserGame } from '../../models'

class UserGameHistoryController {
    static get = async (req, res) => {
      try {
        const findAllHistory = await UserGameHistory.findAll()
        res.status(200).json(findAllHistory)
      } catch (error) {
        res.status(404).json({ message: 'data not found' })
      }
    }

    static getByUsername = async (req, res) => {
      const { username } = req.params 
      const findUserHistory = await UserGameHistory.findAll({
        // include: [{
        //   model: UserGame
        // }],
        where: {username}
      })
      res.status(200).json(findUserHistory)
    }

    static create = async (req, res) => {
      try {
        const {
          username, playerChoice, computerChoice, result, userGameId,
        } = req.body

        const createHistory = await UserGameHistory.create({
          username,
          playerChoice,
          computerChoice,
          result,
          userGameId,
        })

        res.status(200).send({ message: 'succes add user data' })
      } catch (error) {
        res.status(500).send(error)
      }
    }

    static update = async (req, res) => {
      const { id } = req.params
      const {
        username, playerChoice, computerChoice, result,
      } = req.body

      const findHistory = await UserGameHistory.findOne({ where: { id } })

      if (!findHistory) {
        res.status(404).json({ message: 'History not found' })
      }

      const updateBiodata = await UserGameHistory.update({
        username,
        playerChoice,
        computerChoice,
        result,
      }, { where: { id } })

      res.status(200).json({ message: 'updating user history' })
    }

    static delete = async (req, res) => {
      try {
        const { id } = req.params

        const findHistory = await UserGameHistory.findOne({ where: { id } })

        if (!findHistory) {
          return res.status(404).json({ message: 'History not found' })
        }

        const deleted = await UserGameHistory.destroy({ where: { id } })

        res.status(200).json({ message: 'Deleted History' })
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
      }
    }
}

export default UserGameHistoryController
