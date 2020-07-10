
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {

    var buddy = {
      name: "",
      photo: "",
      rivalry: 1000
    };

    var answers = req.body;
    var personality = answers.scores;
    var quirks = 0;

  
    for (var i = 0; i < friends.length; i++) {

      console.log(friends[i].name);
      quirks = 0;

      for (var j = 0; j < friends[i].scores[j]; j++) {

        quirks += Math.abs(parseInt(personality[j]) - parseInt(friends[i].scores[j]));

        if (quirks <= buddy.rivalry) {
          buddy.name = friends[i].name;
          buddy.photo = friends[i].photo;
          buddy.rivalry = quirks;
        }
      }
    }

    friends.push(answers);
    res.json(buddy);

  });

};