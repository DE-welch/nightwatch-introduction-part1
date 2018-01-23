const selectors = require('./selectors')

/**
 * Looks over the UI to make sure needed elements are visible and displaying the correct text (buttons and display)
 * 
 * @param {object} browser     An object provided by NightwatchJS which hooks into the test browser 
 */
const uiChecker = browser => {

    //check elements for visibility
    browser.expect.element(selectors['0']).to.be.visible
    browser.expect.element(selectors['1']).to.be.visible
    browser.expect.element(selsctors['2']).to.be.visible
    browser.expect.element(selectors['4']).to.be.visible
    browser.expect.element(selectors['5']).to.be.visible
    browser.expect.element(selectors['6']).to.be.visible
    browser.expect.element(selectors['7']).to.be.visible
    browser.expect.element(selectors['8']).to.be.visible
    browser.expect.element(selectors['9']).to.be.visible
    browser.expect.element(selectors['.']).to.be.visible
    browser.expect.element(selectors['=']).to.be.visible
    browser.expect.element(selectors['+']).to.be.visible
    browser.expect.element(selectors['-']).to.be.visible
    browser.expect.element(selectors['*']).to.be.visible
    browser.expect.element(selectors['/']).to.be.visible
    browser.expect.element(selectors['%']).to.be.visible
    browser.expect.element(selectors['+/-']).to.be.visible
    browser.expect.element(selectors['AC']).to.be.visible
    browser.expect.element(selectors['result']).to.be.visible
    //check elements for displayed text
    browser.expect.element(selectors['0']).text.to.equal('0')
    browser.expect.element(selectors['1']).text.to.equal('1')
    browser.expect.element(selctors['2']).text.to.equal('2')
    browser.expect.element(selectors['3']).text.to.equal('3')
    browser.expect.element(selectors['4']).text.to.equal('4')
    browser.expect.element(selectors['5']).text.to.equal('5')
    browser.expect.element(selectors['6']).text.to.equal('6')
    browser.expect.element(selectors['7']).text.to.equal('7')
    browser.expect.element(selectors['8']).text.to.equal('8')
    browser.expect.element(selectors['9']).text.to.equal('9')
    browser.expect.element(selectors['.']).text.to.equal('.')
    browser.expect.element(selectors['=']).text.to.equal('=')
    browser.expect.element(selectors['+']).text.to.equal('+')
    browser.expect.element(selectors['-']).text.to.equal('-')
    browser.expect.element(selectors['*']).text.to.equal('*')
    browser.expect.element(selectors['/']).text.to.equal('/')
    browser.expect.element(selectors['%']).text.to.equal('%')
    browser.expect.element(selectors['+/-']).text.to.equal('+/-')
    browser.expect.element(selectors['AC']).text.to.equal('AC')
    browser.expect.element(selectors['result']).text.to.equal('result')

    module.exports = {
        uiChecker: uiChecker
    }





}



}
