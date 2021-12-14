const express = require('express');
const app = express();
//const exphbs  = require('express-handlebars');
const path = require('path');
const { engine } = require('express-handlebars');

const PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
			res.render('home', {
				stuff:"This is suff"
			});		
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log('Server Listening on port ' + PORT));


/*
*/ 