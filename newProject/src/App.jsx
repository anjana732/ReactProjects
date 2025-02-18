import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const employees = [
    { name: "John Doe", age: 28, location: "New York", department: "IT", phone: "123-456-7890" },
    { name: "Alice Smith", age: 32, location: "Los Angeles", department: "HR", phone: "987-654-3210" },
    { name: "Robert Johnson", age: 40, location: "Chicago", department: "Finance", phone: "555-789-1234" },
    { name: "Emily Davis", age: 25, location: "San Francisco", department: "Marketing", phone: "111-222-3333" },
    { name: "Michael Brown", age: 35, location: "Seattle", department: "IT", phone: "444-555-6666" },
    { name: "Jessica Wilson", age: 29, location: "Boston", department: "Sales", phone: "777-888-9999" },
    { name: "David Martinez", age: 42, location: "Austin", department: "Operations", phone: "666-777-8888" },
    { name: "Sophia Thomas", age: 30, location: "Denver", department: "HR", phone: "123-987-6543" },
    { name: "Daniel White", age: 27, location: "Miami", department: "IT", phone: "456-789-0123" },
    { name: "Olivia Harris", age: 31, location: "Houston", department: "Legal", phone: "333-444-5555" },
    { name: "James Clark", age: 38, location: "San Diego", department: "Finance", phone: "999-000-1111" },
    { name: "Emma Lewis", age: 24, location: "Dallas", department: "Marketing", phone: "222-333-4444" },
    { name: "Benjamin Walker", age: 36, location: "Phoenix", department: "Sales", phone: "888-999-0000" },
    { name: "Charlotte Hall", age: 26, location: "Philadelphia", department: "HR", phone: "123-321-4567" },
    { name: "William Allen", age: 45, location: "Detroit", department: "Operations", phone: "555-666-7777" },
    { name: "Ava Young", age: 34, location: "Las Vegas", department: "IT", phone: "987-123-4567" },
    { name: "Henry King", age: 39, location: "Portland", department: "Legal", phone: "111-222-5555" },
    { name: "Mia Scott", age: 28, location: "Charlotte", department: "Finance", phone: "444-666-8888" },
    { name: "Ethan Green", age: 29, location: "San Antonio", department: "Marketing", phone: "999-222-3333" },
    { name: "Amelia Adams", age: 37, location: "Minneapolis", department: "Sales", phone: "777-111-0000" }
  ];

  const [showSortedAge, setShowSortedAge] = useState();
  const [showSortedName, setShowSortedName] = useState();

  const sortEmpByName = ()=>{
   


  employees.sort((a, b) => {
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    
    return 0;
  });

}

  const sortByAge = ()=> {
    console.log("Age Clicked");
    employees.sort((a, b) => a.age - b.age);
    console.log("After Sort",employees);
  } 

  return (
    <>
     <div>
      <table>
        <thead>
          <tr>
          <th onClick={() => 
            {
              sortEmpByName,
              setShowSortedName
              }}>Name</th>
          <th onClick={()=>{
            sortByAge,
            setShowSortedAge
          }}>Age</th>
          <th>Location</th>
          <th>DEpartment</th>
          <th>Phone</th>
          </tr>
        </thead>
        <tbody>
      {employees.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.location}</td>
          <td>{item.department}</td>
          <td>{item.phone}</td>
        </tr>
     ) )}
        </tbody>
      </table>
     </div>
    </>
  )
}

export default App
