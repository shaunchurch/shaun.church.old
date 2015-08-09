module.exports.controller = function(app) {

  var meta = {
    "page_title": "Apps - Shaun Church",
    "page_section": "apps",
    "page_description": "Web and Android apps for musicians and creatives.",
    "apps": [
      {
        "name": "Songwriter's Notebook",
        "description": "Capture your creative ideas.",
        "link": "https://play.google.com/store/apps/details?id=com.shaunchurch.songwriter.app",
        "website": "http://songwritersnotebook.co",
        "icon": "https://lh3.googleusercontent.com/xPA6eAIH4ljlGvt5Vt9KRx7Kjx_oVWg5V66TEXN2jrVZS8eNM-1Rcg-yZlmqcXpQvg=w300-rw",
        "reviews": [
          {
            "name": "Google user",
            "text": "Brilliant app."
          },
          {
            "name": "Google user",
            "text": "Brilliant app."
          }
        ]
      },
      {
        "name": "Frets",
        "description": "Play against the clock and learn the notes on the guitar fretboard.",
        "link": "https://play.google.com/store/apps/details?id=com.shaunchurch.frets",
        "icon": "https://lh5.ggpht.com/qkt-YFwTXkl2xBCUbwZFEMHcyPVERXur2xNNF86otbYX4kWJY9eHSIKXmBESHdkpKA=w300-rw",
        "reviews": [
          {
            "name": "Google user",
            "text": "Brilliant app."
          },
          {
            "name": "Google user",
            "text": "Brilliant app."
          }
        ]
      },
      {
        "name": "Oblique Strategies",
        "description": "Aphorisms to encourage creativity.",
        "link": "https://play.google.com/store/apps/details?id=com.shaunchurch.obliquestrategies",
        "icon": "https://lh6.ggpht.com/hteCYKyKqg-8N475pnYSYmTWel_fb0HFcUWXRr1jfNI_Ek4E_9ApVeLEnA0wnkYFe3M=w300-rw",
        "reviews": [
          {
            "name": "Google user",
            "text": "Brilliant app."
          },
          {
            "name": "Google user",
            "text": "Brilliant app."
          }
        ]
      }
    ]
  }

  app.get('/apps', function(req, res) {
    res.render('apps', meta);
  });

}