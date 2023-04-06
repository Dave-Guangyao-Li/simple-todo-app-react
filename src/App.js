import { BsSquare, BsFillTrashFill, BsCheckSquareFill, BsPencil } from "react-icons/bs";
import { useState } from "react";

function App() {
  const [todayTodoList, setTodayTodoList] = useState([
    { id: 1, text: "to do Item1", checked: false },
    { id: 2, text: "to do Item2", checked: false },
    { id: 3, text: "to do Item3", checked: true },
    { id: 4, text: "to do Item4", checked: true }
  ]);
  const [tomorrowTodoList, setTomorrowTodoList] = useState([
    { id: 1, text: "to do Item5", checked: false },
    { id: 2, text: "to do Item6", checked: false },
    { id: 3, text: "to do Item7", checked: true },
    { id: 4, text: "to do Item8", checked: true }
  ]);

  // handleDelete function that deletes a todo item from a given list
  const handleDelete = (id, listType) => {
    if (listType === "today") {
      const updatedList = todayTodoList.filter(todo => todo.id !== id);
      setTodayTodoList(updatedList);
    } else {
      const updatedList = tomorrowTodoList.filter(todo => todo.id !== id);
      setTomorrowTodoList(updatedList);
    }
  };

  // handleEdit function that updates the text on change of input, base on todayTodoList or tomorrowTodoList
  const handleEdit = (e, listType) => {
    const id = parseInt(e.target.id);
    const text = e.target.value;
    if (listType === "today") {
      const updatedList = todayTodoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, text: text }
        }
        return todo;
      });
      setTodayTodoList(updatedList);
    } else {
      const updatedList = tomorrowTodoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, text: text }
        }
        return todo;
      });
      setTomorrowTodoList(updatedList);
    }
  };


  return (
    <>
      <div className="app-frame">
        <div className="rect-frame ">
        </div>
        <div className="lists-frame">
          <div className="todo-box-1">
            <div className="title-frame">
              <div className="title-text">Things to do Today</div>
            </div>
            {/* map todo list */}
            {todayTodoList.map((todo) => {
              return (
                <div className="checkbox-item">
                  <div className="checkbox-icon" onClick={() => {
                    setTodayTodoList(todayTodoList.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, checked: !item.checked }
                      }
                      return item;
                    }))
                  }}>
                    {todo.checked ? <BsCheckSquareFill /> : <BsSquare />}

                  </div>
                  {/* if checked, add line through in css on text */}
                  {/* input box fot edit */}
                  <input id={todo.id} className="checkbox-text" type="text" value={todo.text} onChange={(e) => handleEdit(e, "today")} style={{ textDecoration: todo.checked ? "line-through" : "none" }} />


                  <div className="delete-icon">
                    <BsFillTrashFill
                      onClick={() => handleDelete(todo.id, "today")}
                    />
                  </div>

                </div>
              ) // end of return
            })} {/* end of map */}


          </div>
          <div className="todo-box-2">
            <div className="title-frame">
              <div className="title-text">Things to do Tomorrow</div>
            </div>
            {tomorrowTodoList.map((todo) => {
              return (
                <div className="checkbox-item">
                  <div className="checkbox-icon" onClick={() => {
                    setTomorrowTodoList(tomorrowTodoList.map((item) => {
                      if (item.id === todo.id) {
                        return { ...item, checked: !item.checked }
                      }
                      return item;
                    }))
                  }}>
                    {todo.checked ? <BsCheckSquareFill /> : <BsSquare />}

                  </div>
                  {/* if checked, add line through in css on text */}
                  {/* input box fot edit */}
                  <input id={todo.id} className="checkbox-text" type="text" value={todo.text} onChange={(e) => handleEdit(e, "tomorrow")} style={{ textDecoration: todo.checked ? "line-through" : "none" }} />


                  <div className="delete-icon">
                    <BsFillTrashFill
                      onClick={() => handleDelete(todo.id, "tomorrow")}
                    />
                  </div>


                </div>
              ) // end of return
            })} {/* end of map */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
