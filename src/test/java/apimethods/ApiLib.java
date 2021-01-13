package apimethods;

import static io.restassured.RestAssured.given;

import org.junit.Assert;

import commonutility.UtilityFile;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ApiLib {
	public static Properties prop;

	public ApiLib() {
		prop = new Properties();
		try {
			FileInputStream fis = new FileInputStream(
					System.getProperty("user.dir") + "/src/test/resources/config.properties");
			try {
				prop.load(fis);
			} catch (IOException e) {
				e.printStackTrace();
			}

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}

	public void validateStatusCode(int status, String pathparam) {
		RestAssured.baseURI = prop.getProperty("baseurl");

		given().when().get(pathparam).then().assertThat().statusCode(status);

	}

	public void validateResponse(String param) {
		RestAssured.baseURI =prop.getProperty("baseurl");

		Response res = given().when().get(param).then().extract().response();
		ResponseBody body = res.getBody();
		String bodyStringValue = body.asString();
		System.out.println("Output Resposnse:"+ bodyStringValue);
		Assert.assertTrue(bodyStringValue.contains("\"error\":\"time data 'api' does not match format '%Y-%m-%d'\""));

	}

	public void validateResponseBody(String param,String baseValue, Double INRValue, Double GBPValue,String date ) {
		RestAssured.baseURI = prop.getProperty("baseurl");

		Response res = given().when().get(param).then().extract().response();
		Object body = res.jsonPath().get("$");
		System.out.println("Output Resposnse:"+ body);
		Assert.assertEquals(res.jsonPath().get("base"), baseValue);
		System.out.println(res.jsonPath().getDouble("rates.INR"));
		Assert.assertEquals(res.jsonPath().get("date"), date);
		Assert.assertEquals(res.jsonPath().getDouble("rates.INR"), INRValue, 0.0001);
		Assert.assertEquals(res.jsonPath().getDouble("rates.GBP"), GBPValue, 0.0001);

	}

	public void validateDateinResponse(String pathparam, String paramToValidate) {
		RestAssured.baseURI = prop.getProperty("baseurl");

		Response res = given().when().get(pathparam).then().extract().response();
		System.out.println("Output Resposnse:"+ res.asString());
		Assert.assertEquals(res.jsonPath().get(paramToValidate), UtilityFile.getDate());

	}

}
