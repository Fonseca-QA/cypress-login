class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            nationalityButton: ".oxd-select-text [clear='false']",
            maritalButton: ".oxd-select-text [clear='false']",
            comboboxItem: ".oxd-select-dropdown > :nth-child(3)",
            comboboxSecondItem:".oxd-select-dropdown > :nth-child(3)",
            dateWrapper: ".--close",
            submitButton: "[type='submit']",

        }

        return selectors
    
    }

    fillPersonalInfo(firstName, lastName) {
            cy.get(this.selectorsList().firstNameField).clear().type(firstName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)  
        }

    fillEmployeeDetails(employeeId, otherId, driversLicense, expiryDate) {
            cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
            cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
            cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
            cy.get(this.selectorsList().dateWrapper).click()
    }

    saveForm() {
            cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
            cy.get('.oxd-text--toast-message')
            cy.get('.oxd-toast-close')
    }
    fillStatus() {
            cy.get(this.selectorsList().nationalityButton).eq(0).click()
            cy.get(this.selectorsList().comboboxItem).click()
            cy.get(this.selectorsList().maritalButton).eq(1).click()
            cy.get(this.selectorsList().comboboxSecondItem).click()
            
    }
}




export default MyInfoPage