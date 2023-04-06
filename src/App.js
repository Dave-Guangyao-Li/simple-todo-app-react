import { BsSquare, BsFillTrashFill, BsCheckSquareFill } from "react-icons/bs";
import { useState } from "react";

function App() {
  const [todayTodoList, setTodayTodoList] = useState([{ id: 1, text: "to do Item1", checked: false }, { id: 2, text: "to do Item2", checked: false }, { id: 3, text: "to do Item3", checked: true }, { id: 4, text: "to do Item4", checked: true }]); // this is the array of objects, each object is a todo item, with id, text, and checked status
  const [tomorrowTodoList, setTomorrowTodoList] = useState([{ id: 1, text: "to do Item5", checked: false }, { id: 2, text: "to do Item6", checked: false }, { id: 3, text: "to do Item7", checked: true }, { id: 4, text: "to do Item8", checked: true }]); // this is the array of objects, each object is a todo item, with id, text, and checked status

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
                  <div className="checkbox-text" style={{ textDecoration: todo.checked ? "line-through" : "none" }}>{todo.text}</div>
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
                  <div className="checkbox-text" style={{ textDecoration: todo.checked ? "line-through" : "none" }}>{todo.text}</div>
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
