import "./index.css";
import Header from "./Header";
import { IoAdd } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons"
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { PiNotePencil } from "react-icons/pi";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <Header />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li
        
          id="wd-assignments-title"
          className="wd-module list-group-item p-0  fs-5  d-flex justify-content-between align-items-center bg-light"
        >
          {" "}
          <div className="d-flex">
          <BsGripVertical className="me-2 fs-3" />
          
          <div className="fw-bold">ASSIGNMENTS</div>
          </div>
          
          <div className="d-flex align-items-center">
            <div className="me-3 border border-grey rounded-pill p-2 m-2">
              40% of Total
            </div>
           <ModuleControlButtons/>
          </div>
        </li>

        <li style={{ borderLeft: '3px solid green'}} className="list-group-item ">
          <ul id="wd-assignments-ul" className="list-group rounded-0 ">
            <li
              id="wd-assignment-1"
              className="wd-assignment-list-item list-group-item d-flex align-items-center"
            >
              <BsGripVertical className="me-1 fs-3 align-middle" />
              <PiNotePencil className="me-3 fs-3 align-middle text-success"/>
              <div>
                <a
                  id="wd-assignment-link-1"
                  className="wd-assignment-link fw-bold text-black"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A1
                </a>
                <br />
                <span id="wd-assignment-1-details">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span>
                    <b>Not available until</b> May 6 at 12:00am
                  </span>{" "}
                  | <br></br>
                  <span>
                    <b>Due</b> May 13 at 11:59pm
                  </span>{" "}
                  | <span>100pts</span>
                </span>
              </div>
              <div className="ms-auto">
                <LessonControlButtons/>
              </div>
            </li>
            <li
              id="wd-assignment-2"
              className="wd-assignment-list-item list-group-item d-flex align-items-center"
            >
              <BsGripVertical className="me-1 fs-3 align-middle" />
              <PiNotePencil className="me-3 fs-3 align-middle text-success"/>
              <div>
                <a
                  id="wd-assignment-link-2"
                  className="wd-assignment-link fw-bold text-black"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A2
                </a>
                <br />
                <span id="wd-assignment-2-details">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span>
                    <b>Not available until</b> May 13 at 12:00am
                  </span>{" "}
                  |{" "}
                  <span>
                    <br></br>
                    <b>Due</b> May 20 at 11:59pm
                  </span>{" "}
                  | <span>100pts</span>
                </span>
              </div>
              <div className="ms-auto">
                <LessonControlButtons/>
              </div>
            </li>


            <li
              id="wd-assignment-3"
              className="wd-assignment-list-item list-group-item d-flex align-items-center"
            >
              <BsGripVertical className="me-1 fs-3" />
              <PiNotePencil className="me-3 fs-3 align-middle text-success"/>
              <div>
                <a
                  id="wd-assignment-link-3"
                  className="wd-assignment-link fw-bold text-black"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A3
                </a>
                <br />
                <span id="wd-assignment-3-details">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <span>
                    <b>Not available until</b> May 20 at 12:00am
                  </span>{" "}
                  |{" "}
                  <span>
                    <br></br>
                    <b>Due</b> May 27 at 11:59pm
                  </span>{" "}
                  | <span>100pts</span>
                </span>
              </div> 
              <div className="ms-auto">
                <LessonControlButtons/>
              </div>
             
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
