import logo from './logo.svg';
import './App.css';
import {useState} from "react"
function App() {

   const [data,setData]=useState(
    [
      {
        "emp_id": 1,
        "Name": "Ronaldo",
        "DOB": "12/12/2000",
        "Designation": "CEO",
        "Country": "U.S."
      },
      {
        "emp_id": 2,
        "Name": "Messi",
        "DOB": "3/7/1992",
        "Designation": "CTO",
        "Country": " "
      },
      {
        "emp_id": 3,
        "Name": "Robert",
        "DOB": "26/02/1992",
        "Designation": "Software Developer",
        "Country": null
      },
      {
        "emp_id": 4,
        "Name": "Neymar",
        "DOB": "",
        "Designation": "Software Engineer",
        "Country": "New Zealand"
      },
      {
        "emp_id": 5,
        "Name": "Kevin",
        "DOB": "30/06/1988",
        "Designation": "Software Developer",
        "Country": " "
      },
      {
        "emp_id": 6,
        "Name": "Erling",
        "DOB": "15/08/1978",
        "Designation": "Web Designer",
        "Country": "U.S."
      },
      {
        "emp_id": 7,
        "Name": "Kylian",
        "DOB": "20/10/1975",
        "Designation": "Full Stack Developer",
        "Country": "U.S."
      },
      {
        "emp_id": 8,
        "Name": "Trent",
        "DOB": "11/10/1998",
        "Designation": "Full Stack Developer"
      },
      {
        "emp_id": 9,
        "Name": "Luka",
        "DOB": "12/12/2002",
        "Designation": "Full Stack Mobile Developer"
      },
      {
        "emp_id": 10,
        "Name": "Dhruv",
        "DOB": "29/08/1981",
        "Designation": "Director",
        "Country": "India"
      }
    ]
   )
    
    const [salary,setSalary]=useState(
      [
        {
          "salary_id": 1,
          "emp_id": 1,
          "date": "01/02/2022",
          "basic_salary": 10000,
          "bonus": 5000,
          "insurance": 700,
          "professional_tax": 300
        },
        {
          "salary_id": 2,
          "emp_id": 2,
          "date": "01/02/2022",
          "basic_salary": 12000,
          "bonus": 5000,
          "insurance": 500,
          "professional_tax": 400
        },
        {
          "salary_id": 3,
          "emp_id": 3,
          "date": "01/02/2022",
          "basic_salary": 15000,
          "bonus": 2000,
          "insurance": 300,
          "professional_tax": 100
        },
        {
          "salary_id": 4,
          "emp_id": 4,
          "date": "01/02/2022",
          "basic_salary": 5000
        },
        {
          "salary_id": 5,
          "emp_id": 5,
          "date": "01/02/2022",
          "basic_salary": 5000
        },
        {
          "salary_id": 6,
          "emp_id": 6,
          "date": "01/02/2022",
          "basic_salary": 15500,
          "bonus": 2000,
          "insurance": "",
          "professional_tax": ""
        },
        {
          "salary_id": 7,
          "emp_id": 7,
          "date": "01/02/2022",
          "basic_salary": 35500,
          "bonus": 2000,
          "insurance": "",
          "professional_tax": ""
        },
        {
          "salary_id": 8,
          "emp_id": 8,
          "date": "01/02/2022",
          "basic_salary": 45500,
          "bonus": 2000,
          "insurance": 200
        },
        {
          "salary_id": 9,
          "emp_id": 9,
          "date": "01/02/2022",
          "basic_salary": 25500,
          "bonus": 2000,
          "insurance": 200,
          "professional_tax": ""
        },
        {
          "salary_id": 11,
          "emp_id": 1,
          "date": "01/01/2022",
          "basic_salary": "15000",
          "bonus": 2000,
          "insurance": 200,
          "professional_tax": ""
        },
        {
          "salary_id": 12,
          "emp_id": 2,
          "date": "01/01/2022",
          "basic_salary": 11200,
          "bonus": 2000,
          "insurance": 200,
          "professional_tax": ""
        },
        {
          "salary_id": 13,
          "emp_id": 3,
          "date": "01/01/2022",
          "basic_salary": "7400",
          "bonus": 2000,
          "insurance": 200,
          "professional_tax": ""
        },
        {
          "salary_id": 14,
          "emp_id": 4,
          "date": "01/01/2022",
          "basic_salary": 3600,
          "bonus": 2000,
          "insurance": 200,
          "professional_tax": ""
        },
        {
          "salary_id": 15,
          "emp_id": 5,
          "date": "01/01/2022",
          "basic_salary": 8000,
          "bonus": 2000,
          "insurance": "",
          "professional_tax": ""
        },
        {
          "salary_id": 16,
          "emp_id": 1,
          "date": "01/12/2021",
          "basic_salary": 4000,
          "bonus": 2000,
          "insurance": "",
          "professional_tax": ""
        },
        {
          "salary_id": 17,
          "emp_id": 2,
          "date": "01/12/2021",
          "basic_salary": 7800,
          "bonus": 2000,
          "professional_tax": ""
        }
      ]
      
    )
  
    const currDate = new Date().getFullYear();
    let age=[];
for (let i in data) {
  let { DOB } = data[i];
  DOB = +DOB.split("/")[2];
  age.push(Math.abs(currDate - DOB));
}
console.log(age)

let total=[];
const allids = salary.map((el) => el.emp_id);
console.log([...new Set(allids)]);
function test(id) {
  const allofmyemlpy = salary.filter((el) => el.emp_id === id);
  let sum = 0;
  for (let i in allofmyemlpy) {
    let { basic_salary, bonus, insurance } = allofmyemlpy[i];
    sum += +basic_salary + +bonus + +insurance;
  }
  total.push(sum);
}
console.log(total)
  return (
    <div className="App" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
     
     <div>
     {data.map((e)=>
     (
        <div>
         <p>{e.Name}</p>
       </div>))}
     </div>
   
    <div>
    {
            age.map((e)=>
            (
              <p>{e}</p>
            ))
          }
    </div>
        
<div>
{data.map((e)=>
     (
        <div>
         <p>{e.Country}</p>
       </div>))}
</div>
 <div>
    {
            total.map((e)=>
            (
              <p>{e}</p>
            ))
          }
    </div>
         

        





       </div>
  );
}

export default App;
