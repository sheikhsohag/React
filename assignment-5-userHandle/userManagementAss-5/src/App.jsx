import React,{useEffect, useState} from 'react';
import useFetch from './components/hook/useFetch';
import Users from './components/hook/Users';
import './css/App.css'
import Search from './components/hook/search';


const App = () => {


  const {data, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/users');
  
  const [allData, setAllData] = useState([]);

  useEffect(()=>{
        if(data) {
          setAllData(data)
        }
  }, [data])

  const deleteId = (id)=>{
      const newData = allData.filter((user)=>{
        return user.id!==id;
      });

      setAllData(newData);
  }


  const searchCountry = (country) => {
    const lowerCaseCountry = country.toLowerCase();
  
    // Filter names based on whether they start with the query, but ensure they are strings
    const searchCountryList = allData.filter(name => 
      typeof name === 'string' && name.toLowerCase().startsWith(lowerCaseCountry)
    );
  
    // Update the state or variable with the filtered results
    setAllData(searchCountryList);
  };
  


 


  return (
    <div className='containers'>
      <h1>Users Management App</h1>
      <Search onHandleCountrySearch = {searchCountry}/>
      {isLoading && <p>Loading users...</p>} 
      { error && <p>{error}</p>}
      <Users users={allData} deleteId={deleteId}/>

    </div>
  );
};

export default App;
