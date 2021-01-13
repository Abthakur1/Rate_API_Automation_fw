$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/RatesAPI.feature");
formatter.feature({
  "name": "Feature to test the Rates API\u0027s",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User give an incorrect or incomplete url and validate the correct expected response",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidateResponse_incorrecturl"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"\u003cparam\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the response",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "param"
      ]
    },
    {
      "cells": [
        "/api/"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User give an incorrect or incomplete url and validate the correct expected response",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidateResponse_incorrecturl"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"/api/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDef.User_hit_the_GET_Request_with_parameters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.match({
  "location": "ApiStepDef.API_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate the response",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDef.responseValidation()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the success status code when user hit the Rates API for Specific date Foreign Exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SpecificDateStatusValidation"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"\u003cparam\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the status of response as \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "param",
        "statusCode"
      ]
    },
    {
      "cells": [
        "/api/2010-01-12",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the success status code when user hit the Rates API for Specific date Foreign Exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SpecificDateStatusValidation"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"/api/2010-01-12\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDef.User_hit_the_GET_Request_with_parameters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.match({
  "location": "ApiStepDef.API_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate the status of response as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDef.statusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the values of response for Rates API for Specific date Foreign Exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidateResponseBody"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"\u003cparam\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the values \"\u003cbaseValue\u003e\",66.21,0.8972,\"\u003cdate\u003e\" of response body",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "param",
        "baseValue",
        "date"
      ]
    },
    {
      "cells": [
        "/api/2010-01-12",
        "EUR",
        "2010-01-12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the values of response for Rates API for Specific date Foreign Exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidateResponseBody"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"/api/2010-01-12\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDef.User_hit_the_GET_Request_with_parameters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.match({
  "location": "ApiStepDef.API_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate the values \"EUR\",66.21,0.8972,\"2010-01-12\" of response body",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDef.user_validate_the_values_of_response_body(String,Double,Double,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the response matches for the current date when a future date is provided in the url",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FutureDateValidation"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"\u003cparam\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.step({
  "name": "User validate that the date \"date\" in response matched with current system date",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "param"
      ]
    },
    {
      "cells": [
        "/api/2021-01-15"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the response matches for the current date when a future date is provided in the url",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FutureDateValidation"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"/api/2021-01-15\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDef.User_hit_the_GET_Request_with_parameters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.match({
  "location": "ApiStepDef.API_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate that the date \"date\" in response matched with current system date",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDef.validateDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the success status of Rates API for Latest Foreign Exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StatusValidation"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"\u003cparam\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the status of response as \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "param",
        "statusCode"
      ]
    },
    {
      "cells": [
        "/api/latest HTTP/2",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the success status of Rates API for Latest Foreign Exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@StatusValidation"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"/api/latest HTTP/2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDef.User_hit_the_GET_Request_with_parameters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.match({
  "location": "ApiStepDef.API_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate the status of response as \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDef.statusCode(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c404\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1267)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat apimethods.ApiLib.validateStatusCode(ApiLib.java:39)\r\n\tat stepdefinitions.ApiStepDef.statusCode(ApiStepDef.java:28)\r\n\tat ✽.User validate the status of response as \"200\"(file:src/test/java/features/RatesAPI.feature:60)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Validate the success status of Rates API for Latest Foreign Exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidateResponseForLatestFER"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"\u003cparam\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the response",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "param"
      ]
    },
    {
      "cells": [
        "/api/latest HTTP/2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the success status of Rates API for Latest Foreign Exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidateResponseForLatestFER"
    }
  ]
});
formatter.step({
  "name": "User hit the GET Request with parameters \"/api/latest HTTP/2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ApiStepDef.User_hit_the_GET_Request_with_parameters(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API is available",
  "keyword": "When "
});
formatter.match({
  "location": "ApiStepDef.API_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validate the response",
  "keyword": "Then "
});
formatter.match({
  "location": "ApiStepDef.responseValidation()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat apimethods.ApiLib.validateResponse(ApiLib.java:50)\r\n\tat stepdefinitions.ApiStepDef.responseValidation(ApiStepDef.java:34)\r\n\tat ✽.User validate the response(file:src/test/java/features/RatesAPI.feature:74)\r\n",
  "status": "failed"
});
});