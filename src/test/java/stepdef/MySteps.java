package stepdef;

import cucumber.api.java.en.Given;
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

    @Given("^enter keyword \"([^\"]*)\"$")
    public void enter_keyword(String arg1) throws Throwable {

    }

}
