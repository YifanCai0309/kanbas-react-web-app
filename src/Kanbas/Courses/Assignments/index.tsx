import "./index.css";
import Header from "./Header";
import db from "../../Database";
import { useParams} from "react-router";
import { IoAdd } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotePencil } from "react-icons/pi";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course ===cid
  );

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
            <IoAdd />
            <IoEllipsisVertical className="fs-4 me-2" />
          </div>
        </li>

        {assignments.map((assignment, index) => (
          <li
            key={assignment._id}
            id={`wd-assignment-${index + 1}`}
            style={{ borderLeft: "3px solid green" }}
            className="list-group-item wd-assignment-list-item d-flex align-items-center"
          >
            <BsGripVertical className="me-1 fs-3 align-middle" />
            <PiNotePencil className="me-3 fs-3 align-middle text-success" />
            <div>
              <a
                id={`wd-assignment-link-${index + 1}`}
                className="wd-assignment-link fw-bold text-black"
                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              >
                {assignment.title}
              </a>
              <br />
              <span id={`wd-assignment-${index + 1}-details`}>
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
              <LessonControlButtons />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
