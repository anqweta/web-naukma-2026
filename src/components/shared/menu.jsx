import "./menu.css";

export function Menu({ onAddTeacher }) {
  return (
    <nav>
      <ul>
        <li>Teachers</li>
        <li>Statistics</li>
        <li>Favorites</li>
        <li>About</li>
      </ul>
      <button className="btn-orange" onClick={onAddTeacher}>Add teacher</button>
    </nav>
  );
}
