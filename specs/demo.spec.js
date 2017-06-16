import GitHubPage from '../lib/pages/GitHubPage'
import { Builder } from 'selenium-webdriver'

import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.should()

chai.Assertion.addChainableMethod('aboveAsInt', function(expected) {
  var expected = parseInt(expected),
      actual = parseInt(this._obj);
  return actual.should.be.above(expected)
});
chai.use(chaiAsPromised)

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
      github.openUser('bwilczek').then(function() {
        done()
      })
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

    it('Should have some repos', function() {
      github.getRepoCountAsString().should.eventually.be.aboveAsInt(0)
    })
  }) // describe
}) // describe
