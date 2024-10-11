var express = require("express")
var app = express()
var expressLayout = require ("express-ejs-layouts");
var port = 3000

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Set EJS sebagai view engine
app.set("views",__dirname + "/views");
app.set('view engine', 'ejs');

// Middleware untuk menyajikan file statis (gambar, CSS, dll)
app.use(expressLayout);
app.use(express.static('public'));


// Route untuk halaman utama
app.get('/air-mineral', (req, res) => {
  res.send(`
      <h1>Deskripsi Air Mineral</h1>
      <p>Air mineral adalah air yang berasal dari sumber alami, 
      mengandung mineral esensial seperti kalsium, magnesium, dan natrium. Sangat baik untuk kesehatan dan hidrasi tubuh.</p>
      <img src="/images/water-bottle.jpg" alt="Botol Air Mineral" style="width:200px; height:auto;"/>
  `);
});

module.exports = router;

//jalankan route
app.listen(port, ()=>{
  console.log(`server dapat di akses di http://localhost:${port}`);
});
