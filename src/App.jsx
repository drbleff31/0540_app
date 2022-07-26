//import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";

const Profile = () => {
  return <h1>Это страница с профилем</h1>;
};
const Messages = () => {
  return <h1>Это страница с сообщениями</h1>;
};
const Settings = () => {
  return <h1>Это страница с настройками</h1>;
};
const Friends = () => {
  return <h1>Это страница с друзьями</h1>;
};

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <div
              className="nav flex-column nav-pills"
              aria-orientation="vertical"
            >
              <NavLink className="nav-link" to="profile">
                Профиль
              </NavLink>
              <NavLink className="nav-link" to="messages">
                Сообщения
              </NavLink>
              <NavLink className="nav-link" to="settings">
                Настройки
              </NavLink>
              <NavLink className="nav-link" to="friends">
                Друзья
              </NavLink>
            </div>
          </div>
          <div className="col-sm-9">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/friends" element={<Friends />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="App">
        <h1>Привет, мир!</h1>
      </div>
    </>
  );
}

export default App;
