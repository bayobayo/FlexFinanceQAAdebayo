import flexFinance from "../integration/pageObjectModel/flexFinancePOM";

const searchItem = 'book'
const noSearchItem = 'b00ok'
 describe('Product Search Functionality', () => {
   it('Verify searching for a product returns accurate results', () => {
    flexFinance.open()
    flexFinance.searchField.type(searchItem)
    flexFinance.searchButton.click()
    flexFinance.searchResultPage.contains(searchItem)
   })

   it('Verify no Product matching the search term', () => {
    flexFinance.open()
    flexFinance.searchField.type(noSearchItem)
    flexFinance.searchButton.click()
    flexFinance.searchNoResultPage.contains('There are no results for “'+ noSearchItem +'”.')    
  })
 })