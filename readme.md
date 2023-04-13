# script for rancher login using cypress


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