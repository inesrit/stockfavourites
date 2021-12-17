//Stock Market Favourites App by Ines Rita

const express = require('express');
const app = express();
//const exphbs  = require('express-handlebars');
const path = require('path');
const { engine } = require('express-handlebars');
const request = require('request'); 
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

//use body parser middleware
app.use(bodyParser.urlencoded({extended:false}));

// Api=  pk_6d3cc9eb7dd74506bdf1f26691d4b4f0
//calll api function
function call_api(finishedAPI,ticker){
request('https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=pk_6d3cc9eb7dd74506bdf1f26691d4b4f0', {json:true}, (err,res,body) =>{
	if (err) {return console.log(err);}
	if (res.statusCode===200){
		//console.log(body);
		finishedAPI(body);
	};
});
}


// Set Handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


// set handlebars index route
app.get('/', function (req, res) {
		
			res.render('home', {
		
			});	
		
		
			
});

//set index route post
app.post('/', function (req, res) {
		call_api(function(doneAPI) {
			//posted_stuff = req.body.stock_ticker;
			res.render('home', {
			stockinfo : doneAPI,
			
			});	
		},req.body.stock_ticker);
		
			
});


// favourites page route
app.get('/favourites.html', function (req, res) {
			res.render('favourites', {
				
			});		
});

//stocknews page route
app.get('/stocknews.html', function (req, res) {
			res.render('stocknews', {
				
			});		
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server Listening on port ' + PORT));





/*
// set handlebars index route
app.get('/', function (req, res) {
		call_api(function(doneAPI) {
			res.render('home', {
			stockinfo : doneAPI
			});	
		},"fb");
		
			
});
*/ 