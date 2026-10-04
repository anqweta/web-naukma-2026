import "./statistic.css";

export function Statistics() {
  const headers = ["Name", "Speciality", "Age", "Gender", "Nationality"];
  const dataTable = [
    { name: "Daisy Alexander", speciality: "Chemistry", age: 28, gender: "Female", nationality: "Vietnam" },
    { name: "Julia Bradley", speciality: "Math", age: 26, gender: "Female", nationality: "USA" },
    { name: "Rita Hart", speciality: "Art", age: 41, gender: "Female", nationality: "Ireland" },
    { name: "Jonathan Jacobs", speciality: "Math", age: 32, gender: "Male", nationality: "England" },
    { name: "Nathaniel White", speciality: "Computer Science", age: 37, gender: "Male", nationality: "Austria" },
    { name: "Frank Medina", speciality: "English", age: 43, gender: "Male", nationality: "Italy" },
    { name: "Ella Curtis", speciality: "Chess", age: 34, gender: "Female", nationality: "USA" },
    { name: "Claire Simmmons", speciality: "Art", age: 38, gender: "Female", nationality: "Netherlands" },
    { name: "Benjamin Knight", speciality: "Biology", age: 44, gender: "Male", nationality: "Scotland" },
    { name: "Norma Rose", speciality: "Statistics", age: 36, gender: "Female", nationality: "France" },
  ];

  return (
    <div className="statistics-section">
      <hr />
      <h2>Statistics</h2>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTable.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.speciality}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
