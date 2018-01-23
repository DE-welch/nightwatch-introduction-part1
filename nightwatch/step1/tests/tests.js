const selectors = require('../supporting/selectors')
const selectors = require('../supporting/functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    //In nightwatch, tests are "properties" of the exported "test object", and the name of the test
    //is the property's "key" while the test function is the "value".
    'UI Check' : browser => functions.uiChecker(),
    '2+2=4': browser => {
        //Click buttons and check results, paccording to test case steps
        browser
            .click(selectors['2'])
            .expect.element(selectors['result']).text.to.equal('2')
        browser
            .click(selectors['+'])
            .expect.element(selectors['result']).text.to.equal('0')
        browser
            .click(selectors['2'])
            .expect.element(selectors['result']).text.to.equal('2')
        browser
            .click(selectors['='])
            .expect.element(selectors['result']).text.to.equal('4')
    }
}