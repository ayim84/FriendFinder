var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app =  express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var friends = [];
var newFriend;

/********Need to move to htmlRoutes.js ******************************/

app.get("/", function(req, res)
{
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res)
{
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

/********************************************************************/

/************Need to move to apiRoutes.js ***************************/

app.get("/api/friends", function(req, res)
{
    return res.json(friends)
});

app.post("/api/friends", function(req, res)
{
    newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    res.end();
});

/********************************************************************/

app.listen(PORT, function()
{
    console.log("App listening on PORT " + PORT);
});