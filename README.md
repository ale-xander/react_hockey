This is a quick demo I made in React to showcase use of state and props in order to display and search the 2019 roster of the Chicago Blackhawks. The app is deployed on GitHub pages: https://ale-xander.github.io/react_hockey/ (note Heroku takes 15-20 seconds to wake up the dynos & serve the content!)

I also had to create a REST api json server to host the data for this app. Currently it has one route - /profile, which has 7 rsesources:

- id
- name
- position
- age
- birthplace
- gamesPlayed
- picture

It is hosted on Heroku so it might take a few seconds for the dynos to load the JSON server the first time you try to access the app! 
https://json-server-blackhawks.herokuapp.com/
