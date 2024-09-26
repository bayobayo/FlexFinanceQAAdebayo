import flexFinance from "../integration/pageObjectModel/flexFinancePOM";

const userName = 'adebayo@yahoo.com'
const password = 'c0mprehensiv£'
const invalidPassword = 'invalidPassword'
 describe('User Authentication', () => {
   it('Verify Valid Login', () => {
    flexFinance.open()
    flexFinance.accountButton.click()
    flexFinance.loginButton.click()
    flexFinance.captcha.wait(5000)
    flexFinance.captcha.click()

   })

   it('Verify Invalid Login', () => {


  })
 })