package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import pageObject.registrationPage;

import java.util.ArrayList;

public class registrationSteps {

    WebDriver driver;

    public registrationPage registrationPage;

    @Before
    public void browserSetup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.toolsqa.com");
        registrationPage = new registrationPage(driver);
    }

    @After
    public void tearDown() {
//        driver.close();
//        driver.quit();
    }

    @Given("^the user navigates to the website$")
    public void theUserNavigatesToTheWebsite() {
//        WebDriverManager.chromedriver().setup();
//        driver = new ChromeDriver();
//        driver.get("https://www.toolsqa.com");
//        driver.manage().window().maximize();
//        driver.findElement(By.xpath("//*[@id=\"accept-cookie-policy\"]")).click();

        registrationPage.clickCookieButton();
    }

    @And("^the user clicks on the demo site button$")
    public void theUserClicksOnTheDemoSiteButton() {
        registrationPage.clickDemoSiteButton();
    }

    @And("^the user clicks on the form$")
    public void theUserClicksOnTheForm() {
        ArrayList<String> newTab = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(newTab.get(1));

        registrationPage.clickAdBanner();

        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", registrationPage.formButton);
    }

    @And("^the user clicks the practice form button$")
    public void theUserClicksThePracticeFormButton() {
        registrationPage.clickPracticeFormButton();
    }

    @When("^the user enters firstname \"([^\"]*)\"$")
    public void theUserEntersFirstname(String firstName) {
        registrationPage.enterFirstname(firstName);
    }

    @And("^the user enters lastname \"([^\"]*)\"$")
    public void theUserEntersLastname(String surname) {
        registrationPage.enterLastname(surname);
    }

    @And("^the user enters email address \"([^\"]*)\"$")
    public void theUserEntersEmailAddress(String email) {
        registrationPage.enterEmail(email);
    }

    @And("^the user selects gender option$")
    public void theUserSelectsGenderOption() {
        registrationPage.clickGenderButton();
    }

    @And("^the user enters mobile number \"([^\"]*)\"$")
    public void theUserEntersMobileNumber(String phoneNumber) {
        registrationPage.enterMobileNumber(phoneNumber);
    }

    @And("^the user selects hobbies$")
    public void theUserSelectsHobbies() {
        registrationPage.selectHobbies();
    }

    @And("^the user enters address \"([^\"]*)\"$")
    public void theUserEntersAddress(String address) {
        registrationPage.enterAddress(address);
    }

    @And("^the user selects a state$")
    public void theUserSelectsAState() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView(true);", registrationPage.stateField);

        registrationPage.selectState();
    }

    @And("^the user selects a city$")
    public void theUserSelectsACity() {
        registrationPage.selectCity();
    }

    @When("^the user clicks the submit button$")
    public void theUserClicksTheSubmitButton() {
        //zoom in
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("document.body.style.zoom = '0.65'");

        // implementing JS to click submit button
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", registrationPage.submitButton);
    }

    @Then("^the form is submitted successfully$")
    public void theFormIsSubmittedSuccessfully() throws InterruptedException {
        Assert.assertTrue(registrationPage.verifyFormSubmission());
    }

    @And("^the user clicks the close button$")
    public void theUserClicksTheCloseButton() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", registrationPage.closeButton);
    }

    @And("^the user uploads a picture$")
    public void theUserUploadsAPicture() {
        registrationPage.pickPicture();
    }

    @Then("^the form is submitted successfully with this message \"([^\"]*)\"$")
    public void theFormIsSubmittedSuccessfullyWithThisMessage(String validationMessage) {
        Assert.assertEquals(validationMessage, driver.findElement(By.id("example-modal-sizes-title-lg")).getText());
    }

    @And("^the user enters date of birth$")
    public void theUserEntersDateOfBirth() {
        registrationPage.enterDOB();
    }

    @And("^the user does not enter mobile number$")
    public void theUserDoesNotEnterMobileNumber() {
        registrationPage.omitMobileNumber();
    }

    @Then("^the form is not submitted$")
    public void theFormIsNotSubmitted() {
    }

    @And("^the user selects an hobby$")
    public void theUserSelectsAnHobby() {
        registrationPage.clickHobby();
    }

    @And("^the user selects gender option \"([^\"]*)\"$")
    public void theUserSelectsGenderOption(String gender) {
        if (gender.equals("Female")) {
            registrationPage.femaleGender.click();
        } else if (gender.equals("Male")) {
            registrationPage.maleGender.click();
        } else {
            registrationPage.otherGender.click();
        }
    }

}