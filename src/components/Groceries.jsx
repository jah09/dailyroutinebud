import React, {  useRef,useState } from "react";
import {v4 as uuid} from 'uuid';
const Groceries = () => {
     //if naa error mo focus sa input field
  const inputRef=useRef(); //useRef
  //states for title
  const [titleItems,setTitleItems]=useState('');
  //states for title
  const [descriptionItems,setDescriptionItems]=useState('');

  
  //state items that will hold all data
  const [arrayItems,setArrayItems]=useState([]);

  //error state to show if the input field is empty
  const [titleErrors,setTitleErrors]=useState(''); //for title errors
  const [descriptionErrors,setDescriptionErrors]=useState('');
  
  return (
    <div className="container border-text-textcolor  border-2 w-[50%]  rounded-md mx-auto p-4">
      <h1 className="text-4xl font-semibold text-textcolor text-center">
        MarketBuddy
      </h1>
      <div className=" mt-10 flex flex-col items-center ">
        <div className="py-2 ">
          <input
            placeholder="Enter your title"
            className="w-96 rounded-md p-2 bg-backgroundcolor ring-1 ring-secondarycolor text-textcolor hover:ring-2"
            ref={inputRef}
            type="text"
            onChange={(event)=>setTitleItems(event.target.value)}
          />
          <p className="text-red-600 text-sm m-2">Please enter title</p>
        </div>
        <div className="py-2">
          <input
            placeholder="Enter your description"
            className="w-96 rounded-md p-2 bg-backgroundcolor ring-1 ring-secondarycolor text-textcolor hover:ring-2"
          />
           <p className="text-red-600 text-sm m-2">Please enter description</p>
        </div>
        <div className="py-4">
            <button className="border-primarycolor border-2 text-textcolor p-2 rounded-md font-semibold hover:bg-primarycolor hover:text-backgroundcolor">Add Item</button>
        </div>
      </div>
      <div className="bg-green-900">
        <h1 className="text-textcolor text-xl">List of your market routine</h1>
        <div className="bg-yellow-900">12</div>
      </div>
    </div>
  );
};

export default Groceries;
