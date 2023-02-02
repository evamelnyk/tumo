import express from 'express'; 
import { appendFileSync, readFileSync} from 'fs';
const app = express(); 

app.use(express.static('.')); 
app.use(express.json());

app.post('/statistic', (req, res)=>{
    appendFileSync('test.txt', JSON.stringify(req.body) + "\n");
    res.sendStatus(201);

});

app.listen(3000, () => {
    console.log('Server work');
});
 




// app.get("/", function (req, res) { 
//     res.send("<h1>Привіт, світ</h1>"); 
// }); 
 
// app.get("/name/:name", function(req, res){ 
//     let name = req.params.name; 
//     res.send("<h1>Привіт " + name +"</h1>"); 
// }); 
 
// app.get("/show", function(req, res){
//     res.redirect("https://www.google.com");
// });

// app.get("/search/:search", function(req, res) {
//     let search = req.params.search;
//     res.redirect("https://www.google.com/search?q=" + search )
// })

// app.listen(3000);
// import express from 'express'; 
// const app = express(); 
// // app.use(express.static('.')); 
 
// app.get("/", function (req, res) { 
//     res.send("<h1>Привіт, світ</h1>"); 
// }); 
 
// app.get("/name/:name", function(req, res){ 
//     let name = req.params.name; 
//     res.send("<h1>Привіт " + name +"</h1>"); 
// }); 
 
// app.get("/show", function(req, res){
//     res.redirect("https://www.google.com");
// });

// app.get("/search/:search", function(req, res) {
//     let search = req.params.search;
//     res.redirect("https://www.google.com/search?q=" + search )
// })

// app.listen(3000);

// import { readFileSync , writeFileSync , appendFileSync} from 'fs' ;
// writeFileSync (
//     'test.txt',
//     ' Ммамамамаммамммаммама  ьаььам'
// );
// let text = readFileSync('test.txt', 'utf8');
// console.log(text);
// appendFileSync('test.txt', '/n))');

// let text1 = readFileSync ('test.txt', 'utf8');
// console.log(text1);