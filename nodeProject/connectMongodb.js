var express =require("express");
var app=express();
var cors=require('cors');
const { ObjectId } = require("mongodb");
var MongoClient = require('mongodb').MongoClient;
app.use(cors())
app.use(express.json())

app.get("/getTuristPlaces",async(req,res)=>{
    
    let connection=await MongoClient.connect("mongodb://127.0.0.1:27017/Touristplaces");

    let dbconnection =await connection.db("Touristplaces");
    
    let documentList =await dbconnection.collection("places").find({}).toArray();
    res.setHeader('content-type','application/json')
    res.write(JSON.stringify(documentList));
    res.end();
})
app.get("/getTuristPlacesBycountry",async(req,res)=>{
                
    let connection=await MongoClient.connect("mongodb://127.0.0.1:27017/Touristplaces");

    let dbconnection =await connection.db("Touristplaces");
    let countrynameFromRequest=req.query.country;
    let documentList =await dbconnection.collection("places").find({"country":countrynameFromRequest}).toArray();
    res.setHeader('content-type','application/json')
    res.write(JSON.stringify(documentList));
    res.end();
})
app.post('/CreateTuristPlaces',async(req,res)=>{
    let body =req['body'];
    let connection = await MongoClient.connect("mongodb://127.0.0.1:27017/Touristplaces")
    let dbconnection = await connection.db("Touristplaces")
    let data ={
        "country":body['country'] ,
        "placeName":body['placeName'] ,
        "discription": body['discription']
    }
    await dbconnection.collection("places").insertOne(data);
    res.setHeader('connect-type','application/json');
    res.write(JSON.stringify({"message":"create succussful"}));
    res.end();
}); 

app.post("/update_desc",async(req,res)=>{
    let req_body=req['body']
    let id = req_body['id'];
    let des=req_body['des']
    let connection = await MongoClient.connect("mongodb://127.0.0.1:27017/Touristplaces")
    let dbconnection = await connection.db("Touristplaces")
    console.log(des)
    await dbconnection.collection("places").updateOne({'_id':new ObjectId(id) },
{$set:{'discription':des}});
   res.setHeader('content-type','application/json')
   res.write(JSON.stringify({"message":"update succussful"}));
   res.end();
});

app.post("/delete",async(req,res)=>{
    let req_body=req['body']
    let id = req_body['id'];
    
    let connection = await MongoClient.connect("mongodb://127.0.0.1:27017/Touristplaces")
    let dbconnection = await connection.db("Touristplaces")
    
    await dbconnection.collection("places").deleteOne({'_id':new ObjectId(id) });

   res.setHeader('content-type','application/json')
   res.write(JSON.stringify({"message":"delete succussful"}));
   res.end();
});

app.post('/Login',async(req,res)=>{
    let body =req['body'];
    let connection = await MongoClient.connect("mongodb://127.0.0.1:27017/Touristplaces")
    let dbconnection = await connection.db("Touristplaces")
    let data ={
        "email":body['email'] ,
        "password":body['password'] 
        
    }

    let login=await dbconnection.collection("user").findOne(data);
    //console.log(login)
    res.setHeader('connect-type','application/json');
    if (login==null){
       // res.sendStatus(400);
       res.write(JSON.stringify({"message":"please provide correct password"}))
    }
    else{
       // res.sendStatus(200);
        res.write(JSON.stringify({"message":"Login succussful"}))
    }
   

    
    res.end();
}); 

//login sample
// app.post("/loginsample",async(req,res)=>{
//     let body=req['body'];
//     let connection=await MongoClient.connect("mongodb://127.0.0.1:27017/Touristplaces");
//     let dbconnection=await connection.db("touristplaces");
//     let login=await dbconnection.collection("places").findOne(data);
//     let data={
//         "email":body["email"],
//         "password":body['password']
//     }
//     res.setHeader("connection-type","application/json");
//     res.write(JSON.stringify({"message":"correctone"}))
// })

// app.post("/register",async(req,res)=>{
//     let body=req['body']
//     let connection = await MongoClient.connect("")
//     let dbconnection = await connection.db("")
//     let data={
//         "email":body['email'],
//         "password":body['password'],
//         "phoneNo":body['phoneNo']
//     }
//     let reg= await dbconnection.collection("").insertOne(data)
//     console.log(reg);

//     res.setHeader("connection-type","applicaion/json")
//     res.write(JSON.stringify({"message":"this"}))
//     res.end()
// })

app.post('/register',async(req,res)=>{
    let body =req['body'];
    let connection = await MongoClient.connect("mongodb://127.0.0.1:27017/Touristplaces");
    let dbconnection = await connection.db("Touristplaces");
    let data ={
        "name":body['name'],
        "email":body['email'] ,
        "password":body['password'],
        "phoneNo":body['phoneNo']
    }
    let register=await dbconnection.collection("user").insertOne(data);
    console.log(register);
    res.setHeader('connect-type','application/json');
    res.write(JSON.stringify({"message":"register succussful"}));
    if (register==null){
        // res.sendStatus(400);
        res.write(JSON.stringify({"message":"Enter all detials"}))
     }
     else{
        // res.sendStatus(200);
         res.write(JSON.stringify({"message":"Register succussful"}))
     }
    res.end();
}); 

app.listen(8080,function(){
    console.log("started");
});