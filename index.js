import express from 'express';

const app = express();

//configuracion de los templates
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views','./view');

app.get('/home',(req,res)=>{
    res.render('layout/dashboard')
})
app.get('/ventaCanales',(req,res)=>{
    res.render('layout/ventaCanales')
})
app.get('/',(req,res)=>{
    res.render('auth/login');
})

app.listen(PORT,()=>{
    console.log('Hello wordl')
})