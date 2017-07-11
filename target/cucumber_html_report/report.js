$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/MyTest.feature");
formatter.feature({
  "line": 1,
  "name": "My Tests",
  "description": "",
  "id": "my-tests",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "my-tests;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user enter url \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 16
    }
  ],
  "location": "MySteps.user_enter_url(String)"
});
formatter.result({
  "duration": 7116215122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 16
    },
    {
      "val": "Admin#franciscan",
      "offset": 37
    }
  ],
  "location": "MySteps.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 177109105,
  "status": "passed"
});
});