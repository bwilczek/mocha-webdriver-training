import DefaultPage from '../DefaultPage'
// import { By, until } from 'selenium-webdriver'

export default class GitHubPage extends DefaultPage {
  openUser(userName) {
    this.driver.get(`https://github.com/${userName}`)
    // this.driver.wait(until.titleContains(userName))
  }
}
