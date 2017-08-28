var express = require('express');
var swig = require('swig');
var riot = require('riot');
var hello = require('./hello-world.tag');
var app = express();


app.engine('html',swig.renderFile);

app.set('view engine' , 'html');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public'))

app.get('/',function(req,res){
	var startingName = 'Batman'
	var sampleOutput = riot.render(hello, {firstName:startingName});
   res.render('index', {tagContent:sampleOutput,firstName:startingName});
})

app.listen(3005, function(){
	console.log('Server is listening to 3005')
});