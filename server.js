const express = require('express');
 const app = express();
 app.use(express.json());
 
 const students = require('./routers/student');
 app.use("/api/student", students);
 



const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log("running@" + PORT));


