import express from 'express';  // add type module in package.js

const app = express();

app.get('/api/quotes',(req,res)=>{

    const quotes =[
        {
        id: 1,
        quote: 'All our dreams can come true, if we have the courage to pursue them.',
        writter: 'Walt Disney'
        },
        {
        id: 2,
        quote: 'All our dreams can come true, if we have the courage to pursue them.',
        writter: 'Walt Disney'
        },
        {
        id: 3,
        quote: 'All our dreams can come true, if we have the courage to pursue them.',
        writter: 'Walt Disney'
        },
        {
        id: 4,
        quote: 'All our dreams can come true, if we have the courage to pursue them.',
        writter: 'Walt Disney'
        },
        {
        id: 5,
        quote: 'All our dreams can come true, if we have the courage to pursue them.',
        writter: 'Walt Disney'
        },
    ]
    res.send(quotes)
})  
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server at ${port}`);
    
})