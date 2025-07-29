import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js' 
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()

const dashboardPage = new DashboardPage()

const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {
   
  const selectorsList = {
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateWrapper: ".--close",
    submitButton: "[type='submit']",
    nationalityButton: ".oxd-select-text [clear='false']",
    maritalButton: ".oxd-select-text [clear='false']",
    comboboxItem: ".oxd-select-dropdown > :nth-child(1)",
    comboboxSecondItem:".oxd-select-dropdown > :nth-child(3)"

  }

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
  
   
    cy.get(selectorsList.firstNameField).clear().type('NewnameTest')
    cy.get(selectorsList.lastNameField).clear().type('Testforlast')  
    cy.get(selectorsList.genericField).eq(4).clear().type('000test')
    cy.get(selectorsList.genericField).eq(4).clear().type('test')
    cy.get(selectorsList.genericField).eq(5).clear().type('777test')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateWrapper).click()
    cy.get(selectorsList.nationalityButton).eq(0).click()
    cy.get(selectorsList.comboboxItem).click()
    cy.get(selectorsList.maritalButton).eq(1).click()
    cy.get(selectorsList.comboboxSecondItem)
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    cy.get('.oxd-text--toast-message')
    cy.get('.oxd-toast-close')
    

    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})