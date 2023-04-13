# script for rancher login using cypress
In this script, we use the beforeEach hook to visit the Rancher login page before each test case. Then, we define three tests: the first logs in to the Rancher web page, the second checks that the main web page has loaded, and the third checks that the main web page title is correct.

For each test, we log in by filling in the email and password fields, clicking the Sign In button, and then using Cypress's assertions to check for the expected results. The first test checks that the Rancher logo exists on the page, the second checks for a particular element on the dashboard page, and the third uses Cypress's title() command to check the page title.


## To run/ install rancher:
https://ranchermanager.docs.rancher.com/v2.5/pages-for-subheaders/rancher-on-a-single-node-with-docker#option-a-default-rancher-generated-self-signed-certificate

Terminal command:
```
docker run -d --restart=unless-stopped \
  -p 80:80 -p 443:443 \
  --privileged \
  rancher/rancher:latest
```

## To run the test
* Run cmd ```npx cypress open```
* Select E2E testing
* Start suite with browser chrome
* Click 'smoketest' to run test script