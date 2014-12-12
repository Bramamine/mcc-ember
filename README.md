# MCC Front-End Development
## How It Works
This repo utilizes the power of Ember CLI which allows you to develop a Javascript application in a very modular way.
Once complete, it is compiled together into single files for live access. Therefore, to see changes reflected in the running application, you must run a build script and wait for it to complete.
## Build Script
I made a build.sh file in the root of this repo which will automatically build and output the files to the appropriate directory in the live application (assuming you set up the directories according to the mcc (live) repo.
```
cd /vagrant/ember-dev
sudo sh build.sh
```
