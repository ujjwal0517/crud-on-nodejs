 const express = require('express');
 const router = express.Router();
 let student  = require("../array");
 
 
 
 router.get('/',(req,res)=>{
     res.send(student);
 });
 router.get('/:id', (req,res)=>{
     let id = req.params.id-1;
     console.log(id);
       if(student[id]){
           res.send(student[id]);
       }else{
           res.status(400).send({msg:"Error "})
         }
    });
    router.post("/", (req,res)=>{
             let newstud = {
                 name: req.body.name,
                 class: req.body.class,
                 roll: req.body.roll,
                 result: req.body.result,
                 age: req.body.age,
        
        
            };
            student.push(newstud);
             res.send(student);
         });
router.put("/:id", (req,res)=>{
                 let id = req.params.id-1;
                 if(student[id]){
                    student[id].name = req.body.name;
                  student[id].class = req.body.class;
                  student[id].roll = req.body.roll;
                   student[id].result = req.body.result;
                   student[id].age = req.body.age;
                   res.send(student);
               }else{
                  res.status(404).send({msg:"error"});
               }
     });
     router.delete('/:id', (req,res)=>{
         let id = req.params.id-1;
         if(student[id]){
             student = student.filter((item)=>item!=student[id])
             res.send(student);

         }else{
             res.status(404).send({msg:"error message"});
         }
     })

module.exports = router;