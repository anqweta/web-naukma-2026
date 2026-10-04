import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Menu } from "./components/shared/menu";
import { Main } from "./components/main/main";
import { AddTeacherModal } from "./components/modal/addTeacherModal";

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  function handleSetIsModalOpen() {
    setIsAddModalOpen(true);
  }

  return (
    <>
      <div className="wrapper">
        <Header handleSetIsModalOpen={handleSetIsModalOpen} />
        <Main />
        {isAddModalOpen && (
          <AddTeacherModal onClose={() => setIsAddModalOpen(false)} />
        )}
        <Menu onAddTeacher={() => setIsAddModalOpen(true)} />
      </div>
    </>
  );
}

export default App;
