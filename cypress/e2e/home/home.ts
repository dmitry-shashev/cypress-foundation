import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { PageHome } from '../../pages/page-home';

Given('I open the home page', () => {
  PageHome.open()
})

When('I submit the login form', () => {
  PageHome.login()
})

Then('I see my profile page', () => {
  PageHome.seeProfile()
})
