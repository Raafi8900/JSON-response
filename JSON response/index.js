var express = require('express');
var app = express();

//Home
app.get("/One", function (req, res) {
    res.send("Hello Express js"); // Send the response directly
});

//about
app.post("/two", function (req, res) {
   res.send("About Page"); // Send the response directly
  //res.json({message:"About Page"})
});

//Contact 
app.put("/three", function (req, res) {
    res.send("Contact Page"); // Send the response directly
});

//JSON response
app.get("/four", function (req, res) {
    let MYJSONArray=[
        {
            name:"Raafi",
            city:"Chattagram",
            occupation:"Engineer"
        },
        {
            name:"Rakib",
            city:"Dhaka",
            occupation:"Engineer"
        },
        {
            name:"Faruk",
            city:"Dhaka",
            occupation:"Pharmacist"
        }
    ]
    res.json(MYJSONArray);
});

app.listen(7000, function () {
    console.log("Server running successfully on port 7000");
});
