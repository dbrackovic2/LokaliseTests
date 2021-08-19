import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get userProfileBtn() { return $('span[data-original-title="Profile"]') }
    get ordersTab() { return $('span[data-original-title="Orders"]') }
    get projectsTab() { return $('span[data-original-title="Projects"]') }
    get searchInput() { return $('input[placeholder="Search anywhere..."]') }
    get logoutBtn() { return $('a[class="action-logout"]') }
    get newProjectBtn() { return $('button[data-action="add-project"]') }
    get newProjectNameInput() { return $('input#project-name') }
    get newProjectDescriptionTextarea() { return $('textarea#project-desc') }
    get newProjectBaseLanguageSelect() { return $('div#s2id_lang-s2') }
    get addNewProjectBtn() { return $('a#project-add') }
    get projectContainers() { return $$('div[data-name="project-container"]') }
    get projectNames() { return $$('a[data-name="project-name"]') }
    //project page elements
    get projectTitle() { return $('a.project-title-wrapper') }
    get moreSettingsBtn() { return $('div[data-original-title="More"]') }
    get moreSettingsOptions() { return $$('ul.button-menu-project li') }
    get deleteProjectBtn() { return $('a.project-delete') }
    get deleteProjectNameInput() { return $('div.bootbox div.modal-body input') }
    get confirmDeleteProjectBtn() { return $('button[data-bb-handler="confirm"]') }
    get addNewKeyBtn() { return $('a.addkey-btn.add-key-trigger') }
    get keysCheckboxes() { return $$('div#endless-keys-container input.thekey') }
    get selectTaskField() { return $('select#mass') }
    get selectTaskOptions() { return $$('select#mass option') }
    get orderTranslationOption() { return $('option[value="order"]') }
    get proceedTaskBtn() { return $('a#mass-go') }
    //add new key elements
    get keyNameInput() { return $('input#keyName') }
    get baseLanguageInput() { return $('textarea#base-value') }
    get platformsSelectField() { return $('div#s2id_device-s') }
    get platformOptions() { return $$('div.select2-result-label') }
    get descriptionInput() { return $('textarea#keyDescription') }
    get tagsSelectField() { return $('div#s2id_key_editor_tags') }
    get tagsInput() { return $('input#s2id_autogen5') }
    get advancedTab() { return $('a#advanced_tab') }
    get pluralSwitch() { return $('div.bootstrap-switch-id-theplural_switch span.bootstrap-switch-label') }
    get saveKeyBtn() { return $('a#btn_addkey') }

    async verifyLoggedIn() {
        await expect(this.userProfileBtn).toBeExisting();
        await expect(this.projectsTab).toBeExisting();
        await expect(this.ordersTab).toBeExisting();
        await expect(this.searchInput).toBeExisting();
    }

    async logout() {
        await (await this.userProfileBtn).click()
        await (await this.logoutBtn).click()
    }

    async addNewProject(projectName: string) {
        await (await this.projectsTab).click()
        await browser.pause(2000)
        await (await this.newProjectBtn).waitForDisplayed()
        await (await this.newProjectBtn).click()
        await (await this.newProjectNameInput).waitForDisplayed()
        await (await this.newProjectNameInput).setValue(projectName)
        await (await this.newProjectDescriptionTextarea).setValue("Test project");
        await (await this.addNewProjectBtn).click()
        await (await this.projectTitle).waitForDisplayed()
        await expect(this.projectTitle).toHaveTextContaining(projectName)
    }

    async verifyProjectCount(projects: number) {
        await (await this.projectsTab).click()
        await (await this.newProjectBtn).waitForDisplayed()
        expect(await (this.projectContainers).length).toEqual(Number(projects))
    }

    async openProject(project: number) {
        await (await this.projectsTab).click()
        await (await this.newProjectBtn).waitForDisplayed()
        await (await this.projectNames)[project].click()
        await (await this.projectTitle).waitForDisplayed()
    }

    async deleteProject() {
        let theNameOfProject = await (this.projectTitle).getText()
        await (await this.moreSettingsBtn).waitForClickable()
        await (await this.moreSettingsBtn).click()
        await (await this.moreSettingsOptions)[0].click()
        await browser.pause(2000);
        await (await this.deleteProjectBtn).scrollIntoView()
        await (await this.deleteProjectBtn).click()
        await (await this.deleteProjectNameInput).waitForDisplayed()
        await (await this.deleteProjectNameInput).setValue(theNameOfProject)
        await (await this.confirmDeleteProjectBtn).click()
        await browser.pause(2000);
    }

    async addNewKey(key: string, base: string, plural: string) {
        await (await this.addNewKeyBtn).waitForDisplayed()
        await (await this.addNewKeyBtn).click()
        await (await this.keyNameInput).waitForDisplayed()
        await (await this.keyNameInput).setValue(key)
        if(plural !== "yes") {
            await (await this.platformsSelectField).click()        
            await (await this.platformOptions)[2].click()    
        }
        await (await this.baseLanguageInput).setValue(base)
        if(plural === "yes") {
            await (await this.advancedTab).waitForClickable()
            await (await this.advancedTab).click()
            await (await this.pluralSwitch).waitForDisplayed()
            await (await this.pluralSwitch).click()
        }
        await (await this.saveKeyBtn).click()
        await browser.pause(3000)
    }

    async verifyKeyCount(keys: number) {
        await (await this.projectTitle).waitForDisplayed()
        expect(await (this.keysCheckboxes).length).toEqual(Number(keys))
    }

    async startTranslationProcess(key: number) {
        await (await this.keysCheckboxes)[key].click()
        await (await this.selectTaskField).waitForDisplayed()
        await (await this.selectTaskField).click()
        await (await this.selectTaskOptions)[1].click()
        await (await this.proceedTaskBtn).click()
    }
}

export default new DashboardPage();
