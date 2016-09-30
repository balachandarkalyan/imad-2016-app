var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
'article-one': {
  title : 'article one|ballu',
  heading:'article one',
  date:'sep5',
  content:`
  <p>
                dsdsdsdsdsdsdsd  dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dfdfdfdfdfefefewfrwgsaegejgn
            </p>
            
            <p>
                dsdsdsdsdsdsdsd
            </p>

            <p>
                dsdsdsdsdsdsdsd
            </p>`
    
},
'article-two': {
    title : 'article 2|ballu',
  heading:'article 2',
  date:'sep25',
  content:`
  <p>
                222dsdsdsdsdsdsdsd  dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dfdfdfdfdfefefewfrwgsaegejgn
            </p>`
    
},
'article-three':{
    title : 'article 3|ballu',
  heading:'article 3',
  date:'sep29',
  content:`
  <p>
              33  dsdsdsdsdsdsdsd  dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dsdsdsdsdsdsdsd dfdfdfdfdfefefewfrwgsaegejgn
            </p>`
            
}};
function createTemplate (data) {
    var title = data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;

    var htmlTemplate= `
     <html>
      <head>
       <title>
         ${title}
       </title>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
             ${heading}
        </h3>
        <div>
             ${date}
        </div>
        <div>
             ${content}
        </div>
    </div>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/ganesh.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ganesh.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});