package stepdefinitions;

import apimethods.ApiLib;
import apimethods.Params;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;

public class ApiStepDef {
	static String path;
	Params p = new Params();
	ApiLib apiObj = new ApiLib();

	@Given("User hit the GET Request with parameters \"(.*)\"")
	public void User_hit_the_GET_Request_with_parameters(String par) {
		p.setPathParameter(par);

	}

	@When("API is available")
	public String API_is_available() {
		path = p.getPathParameter();
		return path;
	}

	@Then("User validate the status of response as \"(.*)\"")
	public void statusCode(int status) {
		apiObj.validateStatusCode(status, path);

	}

	@Then("User validate the response")
	public void responseValidation() {
		apiObj.validateResponse(path);

	}

	@Then("User validate the values {string},{double},{double},{string} of response body")
	public void user_validate_the_values_of_response_body(String baseValue, Double INRValue, Double GBPValue,
			String date) {
		apiObj.validateResponseBody(path, baseValue, INRValue, GBPValue, date);
	}

	@Then("User validate that the date \"(.*)\" in response matched with current system date")
	public void validateDate(String param) {
		apiObj.validateDateinResponse(path, param);

	}

}
