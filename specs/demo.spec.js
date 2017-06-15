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

  describe('Single user page', function() {
    let github

    before(function(done) {
      github = new GitHubPage(driver)
      github.openUser('bwilczek').then(function(){done()})
    })

    it('Should have proper title', function() {
      // the nice way:
       driver.getTitle().should.eventually.contain('bwilczek')

      // the debug-friendly way:
      // driver.getTitle().then(function(title) {
      //   // console.log(title)
      //   title.should.contain('bwilczek')
      //   done()
      // })
    })

    it('Should have some repos', function(done) {
      github.getRepoCountAsString().then(function(cnt){
        parseInt(cnt).should.be.above(0)
        done()
      })
    })

  }) // describe
}) // describe
