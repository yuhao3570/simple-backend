const express = require('express');
const PORT = 3000;
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let studentsData = ['Hao', 'Cathy', 'Arthur', 'Jun'];

app.get('/students', (req, res) => {
  res.status(200).json(studentsData);
});

app.post('/students', (req, res) => {
  studentsData.push(req.body.newStudent);
  res.status(200).json({message: `added ${req.body.newStudent}`});
});

app.put('/students/:studentName', (req, res) => {
  studentsData[studentsData.indexOf(req.params.studentName)] = req.body.newStudentName;
  res.status(200).json({
    message: `updated ${req.params.studentName} to ${req.body.newStudentName}`
  });
});

app.delete('/students/:studentName', (req, res) => {
  studentsData = studentsData.filter(stu => stu !== req.params.studentName);
  res.status(200).json({message: `deleted ${req.params.studentName}!`});
});

app.listen(PORT, () =>{
  console.log('listening at port: ', PORT);
})