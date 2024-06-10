import "./index.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router";
import { IoAdd } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotePencil } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import { FaTrash } from "react-icons/fa";
import AssignmentModal from "./AssignmentModal";
import * as client from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector(
    (state: any) => state.assignmentReducer
  ).assignments.filter((assignment: any) => assignment.course === cid);
  const dispatch = useDispatch();
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);
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

        {assignments.map((assignment: any, index: any) => (
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
                  <b>Not available until</b> {assignment.availableFromDate}
                </span>{" "}
                | <br></br>
                <span>
                  <b>Due</b>
                  {assignment.dueDate}
                </span>{" "}
                | <span>{assignment.points}</span>
              </span>
            </div>
            <div className="ms-auto">
              <FaTrash
                className="text-danger me-2 mb-1"
                data-bs-toggle="modal"
                data-bs-target="#wd-add-module-dialog"
              />
              <LessonControlButtons />
            </div>

            <AssignmentModal
              removeAssignment={() =>
                //dispatch(deleteAssignment(assignment._id))
                removeAssignment(assignment._id)
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
