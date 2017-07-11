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
  "name": "user enter url \"https://www.google.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter keyword \"github\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com",
      "offset": 16
    }
  ],
  "location": "MySteps.user_enter_url(String)"
});
formatter.result({
  "duration": 7787024865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "github",
      "offset": 15
    }
  ],
  "location": "MySteps.enter_keyword(String)"
});
formatter.result({
  "duration": 72432,
  "status": "passed"
});
});