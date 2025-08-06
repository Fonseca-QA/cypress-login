import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js' 
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfopage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()



describe('Orange HRM Tests', () => {


  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalInfo(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.cpf(), 'OtherId', 'Drivers Number', '2025-01-08')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  
  })


})