const friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    var userData = req.body;
    var userScore = userData.scores;

    var totalDifference = 0;

    var friendMatch = {
      name: "",
      photo: "",
      friendMatchScore: 50
    }

    for(var i = 0; i < friends.length; i++) {
      totalDifference = 0;
      for(var j = 0; j < friends[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));

        if(totalDifference <= friendMatch.friendMatchScore) {
          friendMatch.name = friends[i].name;
          friendMatch.photo = friends[i].photo;
          friendMatch.friendMatchScore = totalDifference;
        }
      }
    }

    friends.push(userData);

    res.json(friendMatch);

  });
};