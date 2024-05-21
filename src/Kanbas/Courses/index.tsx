import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes } from "react-router";

export default function Courses() {
  return (
    <div id="wd-courses">
        <div className="modal fade d-md-none" id="sidebarCollapse-courses"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Course Navigation</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <CoursesNavigation />
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-dark d-md-none position-fixed top-0 end-0"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#sidebarCollapse-courses"
      >
        \/
      </button>
      
      <h2>Course 1234</h2>
      <hr />
      <div className="d-flex">
        
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    
    </div>
  );
}
