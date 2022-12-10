const express=require('express');

const PORT= process.env.PORT || 4000;

const app=express();

app.use(express.json());

app.get('/api/userdata',(req,res)=>{
    
})


app.post('/register',(req,res)=>{
    const userName=req.body.name;
    const useremail=req.body.email;
    const collegName=req.body.college;
    const collegReview=req.body.review;

    res.json({
        success:true,
        name:userName,
        email:useremail,
        college:collegName,
        review:collegReview,

    })
    
})
app.listen(PORT,()=>{
    console.log(`Backend is Running on ${PORT}`);
})