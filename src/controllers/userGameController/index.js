import { UserGame } from '../../models'
import localStorage from '../../data/localStorage/data.json'
import path from 'path'
import fs from 'fs'

const filePath = path.resolve(__dirname, '../../data/localStorage/data.json')

class UserGameController {
    static get = async (req, res) => {
      try {
        const findAllUser = await UserGame.findAll()
        console.log(findAllUser)
        res.status(200).json(findAllUser)
      } catch (error) {
        res.status(404).json({ message: 'data not found' })
      }
    }

    static getUserLogin = (req, res) => {
      const userLogin = localStorage

      return res.status(200).json(userLogin)
    }

    static getUserByUsername = async (req,res) => {
      const { username } = req.params
      const findUser = await UserGame.findOne({where: {username}})

      res.status(200).json(findUser)
    }

    static create = async (req, res) => {
      try {
        const { username, password } = req.body

        const findUser = await UserGame.findOne({ where: { username } })

        if (findUser) {
          return res.status(404).json({ message: 'Username already available' })
        }

        const createUser = await UserGame.create({
          username,
          password,
        })

        res.status(200).send({ message: 'succes add user data' })
      } catch (error) {
        res.status(500).send(error)
      }
    }

    static loginCheck = async (req, res) => {
      try {
        const { username, password } = req.body

        if (!localStorage.length == 0) {
          console.log('yak')
          for (let i = 0; i < localStorage.length; i++) {
            localStorage.pop()
          }
          fs.writeFile(
            filePath,
            JSON.stringify(localStorage),
            'utf-8',
            () => console.log('Succes Delete exists')
          )
        }

        const findUser = await UserGame.findOne({ where: {username}})
        console.log(findUser)

        if (!findUser) {
          return res.status(404).json({ message: 'Username not found' })
        }

        if (findUser.password === password) {
          const data = {
            username,
            password,
          }
  
          localStorage.push(data)
  
          return fs.writeFile(
            filePath,
            JSON.stringify(localStorage),
            'utf-8',
            () => res.status(201).json({ message: `Successfully Login` }),
          )
        }
        
        return res.status(403).json({ message: 'Password not valid'})
      } catch(error) {
        res.status(500).json({message: 'Internal Error'})
      }
    }

    static update = async (req, res) => {
      try {
        const { id } = req.params
        const { username, password } = req.body

        const findUser = await UserGame.findOne({ where: { id } })

        if (!findUser) {
          res.status(404).json({ message: 'User not found' })
        }

        const updateUser = await UserGame.update({
          username,
          password,
        }, { where: { id } })

        res.status(200).json({ message: 'updating user' })
      } catch (error) {
        res.status(500).send(error)
      }
    }

    static delete = async (req, res) => {
      try {
        const { id } = req.params

        const findUser = await UserGame.findOne({ where: { id } })

        if (!findUser) {
          return res.status(404).json({ message: 'User not found' })
        }

        const deleted = await UserGame.destroy({ where: { id } })

        res.status(200).json({ message: 'Deleted UserGame' })
      } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
      }
    }
}

export default UserGameController
