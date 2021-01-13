package testrunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features/RatesAPI.feature",
		glue = {"stepdefinitions"},
		plugin= {"pretty","html:test-output/cucumber-reports"},
		dryRun = false,
		monochrome = true
//		tags = {"@ValidateResponseForLatestFER"} 
				
		
		)

public class TestRuns {
	

}
