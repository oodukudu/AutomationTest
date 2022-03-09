$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registration.feature");
formatter.feature({
  "line": 1,
  "name": "Student Registration Form",
  "description": "",
  "id": "student-registration-form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Valid Registration",
  "description": "",
  "id": "student-registration-form;valid-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    },
    {
      "line": 9,
      "name": "@valid"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user enters firstname \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user enters lastname \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user enters email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user selects gender option \"\u003cgender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user enters mobile number \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user enters date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user selects hobbies",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user uploads a picture",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user enters address \"\u003chomeAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user selects a state",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the user selects a city",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the form is submitted successfully",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#    Then the form is submitted successfully with this message \"Thanks for submitting the form\""
    }
  ],
  "line": 26,
  "name": "the user clicks the close button",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "student-registration-form;valid-registration;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
        "homeAddress",
        "gender"
      ],
      "line": 29,
      "id": "student-registration-form;valid-registration;;1"
    },
    {
      "cells": [
        "Oyin",
        "Odukudu",
        "oyinodukudu@gmail.com",
        "0746473647",
        "Glasgow, UK",
        "Female"
      ],
      "line": 30,
      "id": "student-registration-form;valid-registration;;2"
    },
    {
      "cells": [
        "Tanis",
        "Chase",
        "tanischase@gmail.com",
        "0746436887",
        "London, UK",
        "Female"
      ],
      "line": 31,
      "id": "student-registration-form;valid-registration;;3"
    },
    {
      "cells": [
        "Jack",
        "Phil",
        "jackphil@gmail.com",
        "0748457664",
        "Leeds, UK",
        "Male"
      ],
      "line": 32,
      "id": "student-registration-form;valid-registration;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6761303292,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user navigates to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user clicks on the demo site button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the form",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user clicks the practice form button",
  "keyword": "And "
});
formatter.match({
  "location": "registrationSteps.theUserNavigatesToTheWebsite()"
});
formatter.result({
  "duration": 877511666,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksOnTheDemoSiteButton()"
});
formatter.result({
  "duration": 194935584,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksOnTheForm()"
});
formatter.result({
  "duration": 2950621250,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksThePracticeFormButton()"
});
formatter.result({
  "duration": 899009833,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Valid Registration",
  "description": "",
  "id": "student-registration-form;valid-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    },
    {
      "line": 9,
      "name": "@valid"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user enters firstname \"Oyin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user enters lastname \"Odukudu\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user enters email address \"oyinodukudu@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user selects gender option \"Female\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user enters mobile number \"0746473647\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user enters date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user selects hobbies",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user uploads a picture",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user enters address \"Glasgow, UK\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user selects a state",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the user selects a city",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the form is submitted successfully",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#    Then the form is submitted successfully with this message \"Thanks for submitting the form\""
    }
  ],
  "line": 26,
  "name": "the user clicks the close button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Oyin",
      "offset": 27
    }
  ],
  "location": "registrationSteps.theUserEntersFirstname(String)"
});
formatter.result({
  "duration": 1085818042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Odukudu",
      "offset": 26
    }
  ],
  "location": "registrationSteps.theUserEntersLastname(String)"
});
formatter.result({
  "duration": 52141666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oyinodukudu@gmail.com",
      "offset": 31
    }
  ],
  "location": "registrationSteps.theUserEntersEmailAddress(String)"
});
formatter.result({
  "duration": 76389250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 32
    }
  ],
  "location": "registrationSteps.theUserSelectsGenderOption(String)"
});
formatter.result({
  "duration": 45708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0746473647",
      "offset": 31
    }
  ],
  "location": "registrationSteps.theUserEntersMobileNumber(String)"
});
formatter.result({
  "duration": 47709000,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserEntersDateOfBirth()"
});
formatter.result({
  "duration": 3231118667,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsHobbies()"
});
formatter.result({
  "duration": 247616084,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserUploadsAPicture()"
});
formatter.result({
  "duration": 108627250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow, UK",
      "offset": 25
    }
  ],
  "location": "registrationSteps.theUserEntersAddress(String)"
});
formatter.result({
  "duration": 88310583,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsAState()"
});
formatter.result({
  "duration": 347175000,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsACity()"
});
formatter.result({
  "duration": 220413000,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksTheSubmitButton()"
});
formatter.result({
  "duration": 267580333,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theFormIsSubmittedSuccessfully()"
});
formatter.result({
  "duration": 10110489875,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#example\\-modal\\-sizes\\-title\\-lg\"}\n  (Session info: chrome\u003d99.0.4844.51)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Oluwaseuns-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:106d:7226:c5d0:4c91%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: /var/folders/lt/gpcsr8bn117...}, goog:chromeOptions: {debuggerAddress: localhost:55994}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 55f7ad26d2f3a1082f1f4b3a0b3de042\n*** Element info: {Using\u003did, value\u003dexample-modal-sizes-title-lg}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\n\tat pageObject.registrationPage.verifyFormSubmission(registrationPage.java:170)\n\tat stepDefinitions.registrationSteps.theFormIsSubmittedSuccessfully(registrationSteps.java:132)\n\tat ✽.Then the form is submitted successfully(registration.feature:24)\n",
  "status": "failed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksTheCloseButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23083,
  "status": "passed"
});
formatter.before({
  "duration": 3986237125,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user navigates to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user clicks on the demo site button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the form",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user clicks the practice form button",
  "keyword": "And "
});
formatter.match({
  "location": "registrationSteps.theUserNavigatesToTheWebsite()"
});
formatter.result({
  "duration": 950129833,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksOnTheDemoSiteButton()"
});
formatter.result({
  "duration": 613315667,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksOnTheForm()"
});
formatter.result({
  "duration": 3226047833,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksThePracticeFormButton()"
});
formatter.result({
  "duration": 1775451625,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Valid Registration",
  "description": "",
  "id": "student-registration-form;valid-registration;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    },
    {
      "line": 9,
      "name": "@valid"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user enters firstname \"Tanis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user enters lastname \"Chase\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user enters email address \"tanischase@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user selects gender option \"Female\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user enters mobile number \"0746436887\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user enters date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user selects hobbies",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user uploads a picture",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user enters address \"London, UK\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user selects a state",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the user selects a city",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the form is submitted successfully",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#    Then the form is submitted successfully with this message \"Thanks for submitting the form\""
    }
  ],
  "line": 26,
  "name": "the user clicks the close button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Tanis",
      "offset": 27
    }
  ],
  "location": "registrationSteps.theUserEntersFirstname(String)"
});
