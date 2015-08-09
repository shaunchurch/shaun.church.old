module.exports.controller = function(app) {

  /* page meta */
  var meta = {
    "page_title": "Music - Shaun Church",
    "page_section": "music",
    "page_description": "Acoustic singer songwriter Shaun Church. Download the EP 'Time's Not on Our Side' Now.",
    "gigs": [      
    ],
    "previous_gigs": [
      {
        "date": "12th November 2015",
        "location": "The Owl Sanctuary, Norwich",
        "what": "supporting a better artist",
        "time": "20:00pm",
        "link": "http://facebook.com"
      },
      {
        "date": "12th November 2015",
        "location": "The Owl Sanctuary, Norwich",
        "what": "supporting a better artist",
        "time": "20:00pm",
        "link": "http://facebook.com"
      }
    ]
  }

  /* hook up routes */
  app.get('/music', function(req, res) {
    res.render('music', meta);
  });

}