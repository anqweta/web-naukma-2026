import "./addTeacherModal.css";

export function AddTeacherModal({ onClose }) {
  return (
    <div className="modal-teacher">
      <div className="div-gray">
        <p>Add Teacher</p>
        <button onClick={onClose} className="close-btn">X</button>
      </div>
      <div className="inner">
        <form>
          <label>Name<input type="text" placeholder="Enter name" /></label>
          <label>Speciality
            <select>
              <option>Mathematics</option>
              <option>Physics</option>
            </select>
          </label>
          <div className="form-row">
            <label>Country<select><option>Ukraine</option></select></label>
            <label>City<input type="text" /></label>
          </div>
          <div className="form-row">
            <label>Email<input type="email" /></label>
            <label>Phone<input type="tel" /></label>
          </div>
          <label>Date of birth<input type="date" /></label>
          <div className="form-row">
            <span>Sex</span>
            <label><input type="radio" name="sex" /> Male</label>
            <label><input type="radio" name="sex" /> Female</label>
          </div>
          <label>Background color<input type="color" /></label>
          <label>Notes (optional)<textarea></textarea></label>
          <button type="button" className="add-btn">Add</button>
        </form>
      </div>
    </div>
  );
}
