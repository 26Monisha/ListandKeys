import React from 'react';
import './App.css';

function App() {
  const people =[
    // {name: 'John'},
    // {name: 'Jane'},
    // {name: 'Adam'}

    // {id:1,name: 'John'},
    // {id:2,name: 'Jane'},
    // {id:3,name: 'Adam'}


    
    {
      name: 'Adam',
      skills:[
        {name:'Angular',type:'frontend'},
        {name:'React',type:'frontend'},
      ] 
     },
     {
       name: 'Nick',
       skills:[
         {name:'NodeJS',type:'backend'},
         {name:'Spring',type:'backend'},
       ] 
      }
    

  ];

  // const dataCollection = [{
  //   id:1,
  //   title:'ReactJS Tamil Training',
  //   label:'MaanavaN Learn Code'
  // }];
 
    const dataCollection = [];
  let ListTemplate;


  if(dataCollection.length){
    ListTemplate = dataCollection.map((item,index) =>
  <li key={index}>{item.title}- {item.label}</li>
    );
  }
  else{
          ListTemplate = <li>No Messages Found</li>
  } 


  return (
    <div className="App">
      <header className="App-header">
        {/* <div>  {people.map((person,index) => (
            <div key={index}>
                    <h2>{person.name}</h2> 
                <div>
            {person.skills.map((skill,i)=>(
              <p key={i}>
                {skill.type} named {skill.name}
                </p>
            ))}
                </div>
                </div>

        ))}</div> */}

        <ul>{ListTemplate}</ul>
      </header>
      </div>);
}

export default App;
