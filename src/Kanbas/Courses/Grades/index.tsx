import "./index.css";
import { LiaFileImportSolid } from "react-icons/lia";
import { LiaFileExportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import db from "../../Database";

export default function Grades() {
  const { cid } = useParams();
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === cid
  );
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );
  const grades = db.grades;

  return (
    <div className="container mt-4">
      <div className="d-flex flex-row-reverse">
        <div>
          <IoMdSettings className="fs-2 m-3 text-secondary" />
        </div>


        <div className="dropdown d-inline me-1 p-2 float-end">
          <button
            style={{ backgroundColor: "#c7cdd1" }}
            id="wd-export-btn"
            className="btn btn-lg dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            <LiaFileExportSolid className="pe-1 fs-3" />
            Export
          </button>
          <ul className="dropdown-menu" aria-labelledby="wd-export-btn">
            <li>
              <a className="dropdown-item" href="#">
                Option 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Option 2
              </a>
            </li>
          </ul>
        </div>
        <div className=" p-2">
          <button style={{ backgroundColor: "#c7cdd1" }} className="btn btn-lg">
            <LiaFileImportSolid />
            <i className="bi bi-upload"></i> Import
          </button>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="search-students" className="form-label">
            Student Names
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              id="search-students"
              className="form-control"
              placeholder="Search Students"
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="search-assignments" className="form-label">
            Assignment Names
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              id="search-assignments"
              className="form-control"
              placeholder="Search Assignments"
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button style={{ backgroundColor: "#c7cdd1" }} className="btn">
          <CiFilter className="fs-3" />
          <i className="bi bi-upload"></i> Apply Filters
        </button>
      </div>

      <div className="table-responsive">
        <table className="table align-middle table-striped table-bordered table-hover">
          <thead>
            <tr>
              {enrollments.length > 0 && <th>Student Name</th>}
              {assignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const studentGrades = grades.filter(
                (grade) => grade.student === enrollment.user
              );
              return (
                <tr key={enrollment.user}>
                  {enrollments.length > 0 && <td>{enrollment.user}</td>}
                  {assignments.map((assignment) => {
                    const grade = studentGrades.find(
                      (g) => g.assignment === assignment._id
                    );
                    return (
                      <td key={assignment._id}>
                        {grade ? grade.grade : "N/A"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
