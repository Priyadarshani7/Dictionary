
import axios from 'axios';
import './App.css';
import {  useState } from 'react';

function App() {
  const [word,setword]=useState ("");
 const [input,setinput]=useState("");
 const [error ,seterror]=useState('');
 const fetchword=()=>{
    const apiurl=`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;
   axios.get(apiurl)
   .then((res) => {
    setword(res.data[0].meanings[0].definitions[0].definition
      );
   })
   .catch(err => {
 if(err.response.status === 404){
  seterror("No meaning found")
 }else{
  seterror('');
 }
 console.log(err)
   });
   
  }

  return (
    <div className="App">
      <div class='overflow-hidden'>
     <h1 class=' mt-[60px]  text-[70px] sm:text-[40px]  md:text-[60px] lg:text-[80px]' >Dictionary</h1>
   </div>
    <div class='shadow-[0px_0px_10px_5px_#FEFF86]  rounded-tl-[50px]  mt-[90px] bg-[#C9EEFF] mx-[300px] min-h-[500px] md:mx-[100px] sm:mt-[60px] sm:mx-[50px] sm:min-h-[400px] lg:mt-[150px] lg:mx-[300px] lg:min-h-[500px]'>
  <div class='   gap-[200px]'>
    <input onChange={piyu=>setinput(piyu.target.value)} class='rounded-2xl mt-[30px] text-center w-[500px] h-[50px] mr-[30px] text-[30px] sm:w-[210px] lg:w-[500px]'placeholder='Search Word'/>
    <button onClick={fetchword} class='text-[20px]  border-none  shadow-md  rounded-3xl border-2 p-[10px] bg-[#FEFF86] font-sans cursor-pointer h-[50px]  ml-[30px] '>Search</button>
    </div>
    <p class='mt-[100px] text-[#000000] text-[30px]'>{word}</p>
    <p class='mt-[50px] text-[#DF2E38] text-[30px]'>{error}</p>
</div>


      </div>

  );
}

export default App;
