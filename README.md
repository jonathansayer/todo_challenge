Todo Challenge
=================

Introduction
---------
The Todo challenge was issued by Makers Academy during Week 8 of the course. The aim of the challenge is develop an app for a todo list which is written using Angular. The User stories are as follows:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

How I Tackled the Challenge
-------
As with all my code, this program is written using the Test Driven Methodology. Feature tests are written using the [Protractor](https://angular.github.io/protractor/#/) Testing Frame Work. The feature tests can be found in tests/e2e/todoListFeature.js. The Unit tests for the controller were written using the [Karma](http://karma-runner.github.io/0.13/index.html) testing suit. The unit tests can be found in test/todoController.spec.js.
This code was written using Behaviour Driven Development, which dictates that the feature test should be written first, followed by the unit test that enables that feature test to pass followed by the code to pass the unit test. If the feature test does not pass then another unit test is written and so on.

 ![Alt text](/images/BDD.png?raw=true)


Difficulties
-----
Difficulties came when running the tests. Both test suits are new to me and have different requirements to each other and to what I have used in the past. I initially had difficulty running the Karma tests. The tests were to running in localhost:8080 instead of 4444. It was only when I ran a http server that this problem was solved (see below).

How to use the Program
-----

In order to run the Karma testing suit you will first have to install the Karma command line interface. This can be done by running the following command:

```
 $ npm install -g karma-cli
```

To run the karma tests, you will need to run karma.conf.js using

```
$ karma start test/karma.conf.js
```

This will start the Karma server and the Phantom.js browser. The number of tests run and failed will also be shown. As this is a Javascript framework there is no need to reboot the server after a change to the code is made. Karma will run every time a change is made to one of the files that is is testing.

To Run Protractor feature tests you will first have to install Protractor globally.

```
$ npm install -g protractor
```

If an error message appears due to command line not knowing the command npm, you will first have to install node using:

```
$ brew install node
```

Please refer to the official [Node!](https://nodejs.org/en/) documentation if this occurs.

You will need to update the Webdriver Manager at this point:

```
$ webdriver-manager update
```
and start the server using :

```
$ webdriver-manager start
```
This will start the Selenium Server which Protractor uses. If you run the tests now they will all fail becase Selenium is running in the wrong localhost port. The easy way to fix this (there are other ways including setting up your own server) is to run a http server which has been set up in this repo. This can be run using:

```
$ http-server
```

While these two servers are running you can now run all Protractor tests by running

```
$ protractor test/e2e/conf.js
```
from the root folder.

To open up the program itself simply open up index.html in your browser. Much easier than running the tests.
