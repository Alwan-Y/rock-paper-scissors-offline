class PageController {
    static getGameView = (req, res) => {
        res.render('posts/game')
    }
    
    static getHomePageView  = (req, res) => {
        res.render('posts/homePage')
    }

    static getChoiceLoginPage = (req, res) => {
        res.render('posts/choiceLogin')
    }

    static getCreateUser = (req, res) => {
        res.render('posts/createUserDashboar')
    }

    static getCreateUserBiodata = (req, res) => {
        res.render('posts/createUserBiodataDashboard')
    }

    static getDashboard = (req, res) => {
        res.render('posts/dasboard')
    }

    static getLoginAdmin = (req, res) => {
        res.render('posts/loginAdmin')
    }

    static getLoginUser = (req, res) => {
        res.render('posts/loginUser')
    }
}

export default PageController