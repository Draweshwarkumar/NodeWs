const express= require('express');
const path = require('path');
const { title } = require('process');
const port = 8000;

const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var contactlist = [
    {
        name:"shivam",
        phone:"7654160094"
    },
    {
        name: "pankaj",
        phone: "1234567789"
    },
    {
        name:"Ritik",
        phone: "797932120"
    },
    {
        name:"Draweshwar",
        phone:"9128525710"
    }
]

app.get('/',function(req,res){
    // console.log(__dirname);
    // res.send('<h1>it is running! or is it?</h1>');
    return res.render('contact',{
        title: "Contact list",
        contact_list: contactlist
    });
});

app.post('/new-contact',function(res,req){
    return res.redirect('/practice');
})



app.listen(port,function(err){
    if(err){
        console.log("Error in running the server",err);
    }
    console.log('Yup My Express Server is running on port :',port)
});