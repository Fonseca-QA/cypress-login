import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js' 
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfopage.js'
import DashboardPage from '../pages/dashboardPage.js'


const loginPage = new LoginPage()
const DashboardPage = new DashboardPage ()
describe('Login Orange HRM Tests', () => {
     
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    DashboardPage.checkDashboardPage()
  })

})