package stepdef;

import cucumber.api.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class MySteps {
    WebDriver dr;

    @Given("^user enter url \"([^\"]*)\"$")
    public void user_enter_url(String arg1) throws Throwable {
     System.setProperty("webdriver.chrome.driver", "D:/selenium/chrome/chromedriver.exe");
     dr= new ChromeDriver();
     dr.get(arg1);
    }

    @Given("^enter username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void enter_username_and_password(String arg1, String arg2) throws Throwable {
       dr.findElement(By.id("txtUserName")).sendKeys(arg1);
       dr.findElement(By.id("txtPassword")).sendKeys(arg2);
    }

    @Given("^click signin$")
    public void click_signin() throws Throwable {
       dr.findElement(By.id("btnLogin")).click();
    }

    @Given("^click fee manager$")
    public void click_fee_manager() throws Throwable {

    }

}
