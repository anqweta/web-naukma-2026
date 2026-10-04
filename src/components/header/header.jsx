import { Menu } from "../shared/menu";
import "./header.css";

export function Header({ handleSetIsModalOpen }) {
  return (
    <header>
      <div className="inner">
        <h1>Teachinder</h1>
        <form className="header-form" action="search">
          <input type="search" placeholder="Name, note or age to search" />
          <button className="btn-orange">Search</button>
        </form>
      </div>
      <Menu onAddTeacher={() => handleSetIsModalOpen()} />
    </header>
  );
}
