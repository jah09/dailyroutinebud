import React, { useState, useRef } from "react";

const GroceryItems = ({ items, handleDeleteItem, handleEditItem }) => {
  //track if the edit button is click or not
  const [isEdit, setIsEdit] = useState(false);

  //new item enter by user in edit
  const [newItemTitle, setNewItemTitle] = useState(items.itemTitle); // new item title
  const [newItemDescription,setItemDescription]=useState(items.itemsDescription)// new item description 

  //use ref to focus the input 
  const itemTitleRef = useRef(); 
  const itemDescriptionRef = useRef();

  //edit functinon
  const onEdit = () => {
    //handleEdit item and not empty
    if (newItemTitle || newItemDescription) {
      handleEditItem(items.id, newItemTitle,newItemDescription);
      setIsEdit(false);
    } else {
      // setErrors("Grocery items cannot be empty");
      itemTitleRef.current.focus();
      itemDescriptionRef.current.focus();
    }
  };
  return (
    <div className=" flex mt-4 " key={items.id}>
      <div
        key={items.id}
        className="bg-backgroundcolor border-secondarycolor border-2 w-96 h-24 rounded-md p-4"
      >
        <h1 className="text-xl font-semibold text-textcolor">
          {isEdit ? (
            <input
              ref={itemTitleRef}
              type="text"
              value={newItemTitle}
              className="border-b  max-w-fit"
              onChange={(e) => setNewItemTitle(e.target.value)}
            />
          ) : (
            <span> {items.itemTitle}</span>
          )}
        </h1>
        <h1 className="text-lg text-textcolor mt-1">
        {isEdit ? (
            <input
              ref={itemDescriptionRef}
              type="text"
              value={newItemDescription}
              className="border-b  max-w-fit"
              onChange={(e) => setItemDescription(e.target.value)}
            />
          ) : (
            <span> {items.itemsDescription}</span>
          )}
        </h1>
      </div>
      <div className="p-1 ">
        <div className=" -mt-[4px]">
          <button
            onClick={() => {
              isEdit ? onEdit() : setIsEdit(true);
            }}
            className="text-center w-24 h-12 bg-primarycolor rounded-md font-semibold"
          >
            {isEdit ? "Save" : "Edit"}
          </button>
        </div>
        <div className=" mt-1">
          {" "}
          <button
            className="font-semibold text-center w-24 h-12 rounded-md bg-backgroundcolor border-2 border-secondarycolor text-textcolor hover:bg-secondarycolor"
            onClick={() => handleDeleteItem(items.id)}
          >
            {" "}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryItems;
