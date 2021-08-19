import Page from './page';
import * as faker from 'faker';
let profile: {
    fullName: string
    email: string
    password: string
}
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail() { return $('input[placeholder="you@company.com"]') }
    get inputName() { return $('input[placeholder="Your full name"]') }
    get inputPassword() { return $('input[type="password"]') }
    get inputTermsAndConditions() { return $('div[class="css-2vmmyj e1n1lbzj0"][display="flex"]') }
    get btnSubmit() { return $('button.sc-iJCRrE.hLfBfv') }
    get selectFields() { return $$('select.sc-ezzafa.dvHFX') }
    get optionFields() { return $$('select.sc-ezzafa.dvHFX option') }
    get companyNameInput() { return $('input[placeholder="My Company, Inc."]') }
    get completeSignUpBtn() { return $('button.sc-iJCRrE.hLfBfv') }
    async createFakeUser() {
        profile = {
            fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: faker.internet.email(),
            password: `${faker.internet.password()}_A+2?`
        }
    }
    async register() {
        await (await this.inputName).setValue(profile.fullName)
        await (await this.inputEmail).setValue(profile.email)
        await (await this.inputPassword).setValue(profile.password)
        await (await this.btnSubmit).click()
        console.log(`Email: ${profile.email} Password: ${profile.password}`)
    }
    async submit2ndRegistrationForm() {
        await (await this.companyNameInput).waitForDisplayed()
        await (await this.selectFields)[0].click()
        await (await this.optionFields)[8].click()
        await (await this.companyNameInput).setValue("Lokalise")
        await (await this.selectFields)[1].click()
        await (await this.optionFields)[16].click()
        await (await this.selectFields)[2].click()
        await (await this.optionFields)[25].click()
        await (await this.completeSignUpBtn).click()
    }
    open() {
        return super.open('signup')
    }
}

export default new SignupPage();
