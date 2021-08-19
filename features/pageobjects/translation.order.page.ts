import Page from './page';

class TranslationOrderPage extends Page {
    get sourceLanguageSelectField() { return $('div#s2id_sel-trans-from') }
    get targetLanguageSelectField() { return $('div#s2id_sel-trans-to') }
    get targetLanguageInputField() { return $('input#s2id_autogen4') }
    get targetLanguageOptionSearched() { return $('div#select2-result-label-207') }
    get projectBriefingTextarea() { return $('textarea#note') }
    get payBtn() { return $('a#pay') }
    get cardNumberInput() { return $('input#card_number') }
    get cardExpiryDateInput() { return $('input#cc-exp') }
    get cardCVCInput() { return $('input#cc-csc') }
    get submitPaymentBtn() { return $('button#submitButton') }
    get orderSuccessMessage() { return $('div.alert-success') }

    async translationOrder() {
        await (await this.sourceLanguageSelectField).waitForDisplayed()
        await (await this.targetLanguageInputField).setValue("Danish")
        await (await this.targetLanguageOptionSearched).click()
        await (await this.projectBriefingTextarea).setValue("Project description")
        await (await this.payBtn).waitForClickable()
        await (await this.payBtn).click()
        await browser.switchToFrame(0)
        await (await this.cardNumberInput).waitForDisplayed()
        await (await this.cardNumberInput).click()
        await browser.pause(1000)
        await (await this.cardNumberInput).keys("4242")
        await browser.pause(500)
        await (await this.cardNumberInput).keys("4242")
        await browser.pause(500)
        await (await this.cardNumberInput).keys("4242")
        await browser.pause(500)
        await (await this.cardNumberInput).keys("4242")
        await browser.pause(1000)
        await (await this.cardExpiryDateInput).click()
        await (await this.cardExpiryDateInput).keys("14")
        await browser.pause(500)
        await (await this.cardExpiryDateInput).click()
        await (await this.cardExpiryDateInput).keys("24")
        await browser.pause(1000)
        await (await this.cardCVCInput).click()
        await (await this.cardCVCInput).setValue(123)
        await (await this.submitPaymentBtn).click()
        await browser.switchToParentFrame()
        await (await this.orderSuccessMessage).waitForDisplayed()
    }

    async verifyTranslationIsOrdered() {
        await expect(this.orderSuccessMessage).toBeDisplayed()
    }
}

export default new TranslationOrderPage()