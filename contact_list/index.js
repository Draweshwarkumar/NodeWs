
const exp = require('constants');
const express = require('express');
const path = require('path');
const { title } = require('process');
const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());

var contactlist = [
    {
        name: "Shivam",
        phone: "2345467"
    },
    {
        name: "Draweshwar",
        phone: "455993485"
    },
    {
        name: "Rohit sharma",
        phone: "485084382"
    }
]

app.get('/',function(req,res){
    return res.render('home',{
         title:"My Contact list",
        contact_list: contactlist
        });
});

app.get('/practice',function(req,res){
    return res.render('practice',{
       title: "Let us play with ejs" 
    });
});

app.post('/create-contact', function(req , res){
    // return res.redirect('/practice');
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);
    // contactlist.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });
    contactlist.push(req.body);

    return res.redirect('back');
});

app.listen(port, function (err) {
    if (err) {
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});