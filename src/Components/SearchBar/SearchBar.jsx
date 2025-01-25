import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({products}) => {
    const[wordEntered,setWordEntered] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const navigate = useNavigate();

    
const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    // console.log(searchWord);
  
    if (searchWord === "") {
      // Reset to all products if search is cleared
    } else {
      const newFilter = products.filter((value) => {
       return value.title.toLowerCase().includes(searchWord.toLowerCase())
  
    });
      setFilteredData(newFilter);
      console.log(newFilter);
      console.log(filteredData.length > 0);
    }
  };


  return (
  <>
  

    


    <div className="flex px-4 py-3 rounded-md border-2 border-green-600 overflow-hidden max-w-md font-[sans-serif] mb-[20px] relative">
  <input
    type="email"
    placeholder="Search Something... "
    value={wordEntered}
    onChange={handleFilter}
    // onClick={()=>{navigate('/')}}
    className="w-full outline-none bg-transparent text-gray-600 text-sm"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192.904 192.904"
    width="16px"
    className="fill-gray-600"
  >
    <path
      d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
    ></path>
  </svg>
</div>

{/* Dropdown */}
{wordEntered && filteredData.length > 0 && (
  <div  className=" left-0 top-full mt-2 overflow-hidden max-w-md font-[sans-serif] mb-[20px] relative bg-white shadow-lg rounded-md max-h-60 overflow-y-auto border border-gray-200 z-50">
    {filteredData.slice(0, 15).map((value) => (
      <div
        key={value.id}
        className="px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-800 cursor-pointer"
        onClick={() => navigate(`/productdetail`, { state: { product: value } })}
      >
        {value.title}
      </div>
    ))}
  </div>
)}





  </>
  )
}

export default SearchBar