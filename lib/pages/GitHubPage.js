import DefaultPage from '../DefaultPage'
import { By } from 'selenium-webdriver'

export default class GitHubPage extends DefaultPage {
  openUser(userName) {
    return this.driver.get(`https://github.com/${userName}`)
    // this.driver.wait(until.titleContains(userName))
  }

  getRepoCountAsString() {
    return this.driver.findElement(By.xpath('//a[contains(@href, "tab=repositories")]//span[@class="Counter"]')).getText()
  }

  async getRepoCount() {
    const by = By.xpath('//a[contains(@href, "tab=repositories")]//span[@class="Counter"]')
    const element = await this.driver.findElement(by)
    const text = await element.getText()
    return parseInt(text)
  }
}
