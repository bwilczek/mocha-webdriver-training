import GitHubPage from '../lib/pages/GitHubPage'
import { Builder } from 'selenium-webdriver'

import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)
chai.should()

describe('GitHubPage', function() {

  let driver

  before(function() {
    driver = new Builder()
      .forBrowser('phantomjs')
      .build()
  })

  it('Should have user name included in the title', function() {
    let github = new GitHubPage(driver)
    github.openUser('bwilczek')
    driver.getTitle().should.eventually.contain('bwilczek')
    // add 'done' param to 'it' before uncommenting the lines below
    // driver.getTitle().then(function(title) {
    //   console.log(title)
    //   done()
    // })
  })
})
