const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { response } = require("express")
app.use(bodyParser.json())
const { MongoClient } = require('mongodb');
const dbName = 'company_db'
const colName = 'employees'

const url = "mongodb://127.0.0.1/my_database";
const client = new MongoClient(url)

app.use('/',express.static(__dirname + '/dist'))

app.get('/get-profile',async function(req,res){
    

await client.connect()
   console.log(('connected successfully to server'))

   // initiates the db
  const db =  client.db(dbName)
  const collection = db.collection(colName)

  //get data from database
  const result = await collection.findOne({id:1})
  client.close()

   var response ={}
if (result !== null){
    response= {
        name: result.name,
        email: result.email,
        interest: result.interest
      }
    }
    
 
  

res.send(response)
})

app.post('/update-profile',async function(req,res){
   const payload = req.body
   console.log(payload)

   

   if(Object.keys(payload).length==0){
    res.status(404).send({error : " empty payload , could not update user profile "})
 
   }else{
    

    // connect to mongodb database
   await client.connect()
   console.log(('connected successfully to server'))

   // initiates the db
  const db =  client.db(dbName)
  const collection = db.collection(colName)

  // save payload data to database
  payload['_id'] = 1;
  const updatedValue = { $set: payload}
  await collection.updateOne({id: 1}, updatedValue, {upsert: true})
  client.close()

  res.status(200).send({info : "user profile data updated successfully"})

   }

})


app.listen(3000,function(){
    console.log("server listen to port 3000")
})