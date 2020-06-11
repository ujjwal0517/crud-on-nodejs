// const express = require('express');
// const routers = express.Router();

// routers.post("/", (req,res)=>{
//     const newstud = [{
//         name: req.body.name,
//         class: req.body.class,
//         roll: req.body.roll,
//         result: req.body.result,
//         age: req.body.age,


//     }]
//     student.push(newstud);
//     res.send(student);
// })
// routers.put("/:id", (req,res)=>{
//     let id = req.params.id-1;
//     if(student[id]){
//         student[id].name = req.body.name;
//         student[id].class = req.body.class;
//         student[id].roll = req.body.roll;
//         student[id].result = req.body.result;
//         student[id].age = req.body.age;
//         res.send(student);
//     }else{
//         res.status(404).send({msg:"error"});
//     }
// })


module.exports = routers;
