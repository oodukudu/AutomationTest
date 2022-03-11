package stepDefinitions;

import CucumberManager.DriverManager;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;

public class Hooks {

    public static WebDriver driver;

    @Before
    public void BrowserSetup() {
        driver = DriverManager.getDriver();
        driver.manage().window().maximize();
        driver.get("https://www.toolsqa.com");
    }

    @After
    public void TearDown()
    {
        driver.close();
        driver.quit();
    }

}
