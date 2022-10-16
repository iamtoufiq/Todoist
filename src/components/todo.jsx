import React, { useState } from "react";

const Todo = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    // console.log(inputList);
    // console.log(items);
    setItems((previousOne) => {
      return [...previousOne, inputList];
    });
    setInputList("");
    // console.log(items); here we have to focus why change is not reflecting here directly
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((element, indexOfEle) => {
        return id !== indexOfEle;
      });
    });
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Item.."
          value={inputList}
          onChange={itemEvent}
        />
        <button
          onClick={listOfItems}
          disabled={inputList === "" ? true : false}
        >
          +
        </button>

        <ol>
          {items.map((elem, ind) => {
            return (
              <div key={elem} className="todo_style">
                <i
                  className="fa-sharp fa-solid fa-circle-xmark"
                  onClick={() => {
                    deleteItems(ind);
                  }}
                ></i>
                <li>{elem}</li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
