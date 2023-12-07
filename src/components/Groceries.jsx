import React, { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import GroceryItems from "./GroceryItems";
const Groceries = () => {
  //if naa error mo focus sa input field
  const titleInputRef = useRef(); //useRef
  const descriptionInputRef = useRef();
  //states for title
  const [titleItems, setTitleItems] = useState("");
  //states for title
  const [descriptionItems, setDescriptionItems] = useState("");

  //state items that will hold all data test lang sa
  const [arrayItems, setArrayItems] = useState([]);
  console.log("the array item is ", arrayItems);
  //error state to show if the input field is empty
  const [titleErrors, setTitleErrors] = useState(false); //for title errors
  const [descriptionErrors, setDescriptionErrors] = useState(false);

  //handle Add item button
  const handleAddItem = () => {
    console.log("Line 23", titleItems);
    //if input fields are not empty
    if (titleItems && descriptionItems) {
      setArrayItems([
        ...arrayItems,
        {
          id: uuid(),
          itemTitle: titleItems,
          itemsDescription: descriptionItems,
        },
      ]);
      setTitleItems("");
      setDescriptionItems("");
      setTitleErrors(false);
      setDescriptionErrors(false);
    } else {
      if(titleItems===""){
        setTitleErrors(true);
      }
      else{
        setDescriptionErrors(true);
      }
     
    }
  };

  //handle delete item button
  const handleDeleteItem = (removeId) => {
    const filteredItem = arrayItems.filter((item) => item.id != removeId);
    setArrayItems(filteredItem);
  };

  //handle Edit item button
  const handleEditItem = (id, newItemTitle,newItemDescription) => {
    const updatedGroceryItems = arrayItems.map((item) => {
      if (item.id === id) {
        return { ...item, itemTitle: newItemTitle ,itemsDescription:newItemDescription};
      }

      return item;
    });
    setArrayItems(updatedGroceryItems);
  };
  return (
    <div className="   mx-auto w-[70%] font-myFont  ">
      <h1 className="  text-4xl font-semibold text-textcolor text-center mt-6">
        Daily Routine Bud
      </h1>
      <div className="mt-6 flex justify-center ">
        <div className="">
          <div className="p-2 ">
            <input
              placeholder="Enter your title"
              id="titleID"
              className="w-96  h-14 rounded-md p-2 bg-secondarycolor text-xl text-backgroundcolor "
              ref={titleInputRef}
              type="text"
              value={titleItems}
              onChange={(event) => setTitleItems(event.target.value)}
            />
            {titleErrors && (
              <p className="text-red-600 text-sm m-2">Please enter title</p>
            )}
          </div>
          <div className="p-2">
            <input
              value={descriptionItems}
              id="descriptionID"
              placeholder="Enter your description"
              className="w-96 h-14 rounded-md p-2 bg-secondarycolor text-xl text-backgroundcolor"
              ref={descriptionInputRef}
              type="text"
              onChange={(event) => setDescriptionItems(event.target.value)}
            />
            {descriptionErrors && (
              <p className="text-red-600 text-sm m-2">
                Please enter description
              </p>
            )}
          </div>
        </div>
        <div className=" w-24 h-24 mt-4 flex">
          <button
            className="text-textcolor text-xl font-bold border-primarycolor border-2 w-24 h-24 rounded-md hover:bg-primarycolor hover:text-backgroundcolor"
            onClick={handleAddItem}
          >
            Add
          </button>
        </div>
      </div>

      <div className=" mt-8 p-4  ">
        <div className=" flex flex-col mt-4 items-center  ">
          <h1 className="text-textcolor text-2xl text-start  w-[55%] ms-4">
            List of your daily routine
          </h1>
          {/* map the array items and display  */}
          {arrayItems.map((items) => (
            <GroceryItems
              items={items}
              key={items.id}
              handleDeleteItem={handleDeleteItem}
              handleEditItem={handleEditItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groceries;
