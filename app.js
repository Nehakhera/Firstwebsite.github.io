const express= require('express');
const app= express();
const path= require('path');
const fs= require('fs');
const port=7000;
const hostname= '127.0.0.6';
app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));
app.get('/',(req, res)=>{
    const params= { }
    res.status(200).render('home.pug',params);

});
app.get('/contact',(req, res)=>{
    const params= { }
    res.status(200).render('contact.pug',params);
    
});
app.post('/contact', (req, res)=>{
    name= req.body.name;
    phone= req.body.phone;
    email= req.body.email;
    address= req.body.address;
    desc= req.body.desc;
    let output=`The client is having name ${name}, having phone number ${phone}, with email id ${email}, residing at ${address}, concerning with ${desc}`
    fs.writeFileSync('output.txt', output);
    const params={'message': 'your form has been submitted successfully'}
    res.status(200).render('contact.pug', params);
});
app.get('/about',(req, res)=>{
    const params= { }
    res.status(200).render('about.pug',params);
});
app.get('/services',(req, res)=>{
    const params={ }
    res.status(200).render('services.pug',params);
});
app.get('/classinfo',(req, res)=>{
    const params={ }
    res.status(200).render('classinfo.pug',params);
});


app.listen(port,hostname,()=>{
    console.log(`server is running at ${port}:${hostname}`)
})