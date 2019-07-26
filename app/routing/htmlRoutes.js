function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;
  
    // When we visit different urls, read and respond with different files
    switch (path) {
  
    case "/survey":
      return fs.readFile(__dirname + "/survey.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });

      // default to rendering index.html, if none of above cases are hit
    default:
      return fs.readFile(__dirname + "/home.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }
  }

  server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });
  