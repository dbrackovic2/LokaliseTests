import { Given, When, Then } from '@cucumber/cucumber'

import LoginPage from '../pageobjects/login.page'
import DashboardPage from '../pageobjects/dashboard.page'
import SignupPage from '../pageobjects/signup.page'
import TranslationOrderPage from '../pageobjects/translation.order.page'

const pages = {
    login: LoginPage,
    signup: SignupPage,
    dashboard: DashboardPage,
    translation: TranslationOrderPage
}

Given(/^I am on the (.*) page$/, async (page: string) => {
    await pages[page].open()
})

When(/^I login with (.*) and (.*)$/, async (username: string, password: string) => {
    await pages.login.login(username, password)
})

Then(/^User is logged into the website$/, async () => {
    await pages.dashboard.verifyLoggedIn()
})

When(/^User submits a valid registration form$/, async () => {
    await pages.signup.createFakeUser()
    await expect(pages.signup.inputEmail).toBeExisting()
    await expect(pages.signup.inputName).toBeExisting()
    await pages.signup.register()
})

When(/^User completes 2nd registration form$/, async () => {
    await pages.signup.submit2ndRegistrationForm()
})

Then(/^User is successfully registered to the website$/, async () => {
    await pages.dashboard.verifyLoggedIn()
})

Then(/^User can logout from the website$/, async () => {
    await pages.dashboard.logout()
})

//project steps
When(/^User creates a new project called (.*)$/, async (projectName: string) => {
    await pages.dashboard.addNewProject(projectName)
})

Then(/^User can verify total number of projects equals (.*)$/, async (projectsCount: number) => {
    await pages.dashboard.verifyProjectCount(projectsCount)
})

When(/^User opens a project (.*)$/, async (projectNum: number) => {
    await pages.dashboard.openProject(projectNum)
})

Then(/^User can delete the project$/, async () => {
    await pages.dashboard.deleteProject()
})

Then(/^User can add new key (.*) (.*) (.*)$/, async (keyName: string, keyBase: string, plural: string) => {
    await pages.dashboard.addNewKey(keyName, keyBase, plural)
})

Then(/^User can verify key count (.*)$/, async (keyCount: number) => {
    await pages.dashboard.verifyKeyCount(keyCount)
})

Then(/^User can add translation (.*)$/, async (key: number) => {
    await pages.dashboard.startTranslationProcess(key)
    await pages.translation.translationOrder()
})

Then(/^User can verify translation is ordered$/, async () => {
    await pages.translation.verifyTranslationIsOrdered()
})


