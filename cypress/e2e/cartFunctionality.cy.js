import flexFinance from "../integration/pageObjectModel/flexFinancePOM";

const searchItem = 'Book'
const addToCartMessage = 'Product added successfully'
const removeFromCart = 'Product was removed from cart'
 describe('Cart Functionality', () => {
   it('Verify products can be added to cart', () => {
    flexFinance.open()
    flexFinance.searchField.type(searchItem)
    flexFinance.searchButton.click()
    flexFinance.viewItem.click()
    flexFinance.addToCartButton.click()
    flexFinance.addToCartBanner.contains(addToCartMessage)
    flexFinance.cartButton.click()
    flexFinance.cartResult.contains(searchItem)

   })

   it('Verify products can be removed from cart', () => {
    flexFinance.open()
    flexFinance.open()
    flexFinance.searchField.type(searchItem)
    flexFinance.searchButton.click()
    flexFinance.viewItem.click()
    flexFinance.addToCartButton.click()
    flexFinance.addToCartBanner.contains(addToCartMessage)
    flexFinance.cartButton.click()
    flexFinance.cartResult.contains(searchItem)
    flexFinance.removeFromCartButton1.click()
    flexFinance.removeFromCartButton2.click()
    flexFinance.addToCartBanner.contains(removeFromCart)

  })
 })