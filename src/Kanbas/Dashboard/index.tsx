import CourseList from "./CourseList";
import EnrolledList from "./EnrolledList";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  const [mycoursesTabActive, setMycoursesTabActive] = useState(true);
  return (
    <div>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <nav className="nav nav-tabs mt-3 mb-3">
        <Link
          className={`nav-link ${mycoursesTabActive ? "active" : ""}`}
          to={""}
          style={{ color: mycoursesTabActive ? "#d51a2c" : "black" }}
          onClick={() => setMycoursesTabActive(true)}
        >
          <h2>My Courses</h2>
        </Link>
        <Link
          className={`nav-link ${!mycoursesTabActive ? "active" : ""}`}
          to={""}
          style={{ color: !mycoursesTabActive ? "#d51a2c" : "black" }}
          onClick={() => setMycoursesTabActive(false)}
        >
          <h2>Course List</h2>
        </Link>
      </nav>
      {mycoursesTabActive && (
        <div>
          <EnrolledList courses={courses} />
        </div>
      )}
      {!mycoursesTabActive && (
        <CourseList
          courses={courses}
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse}
        />
      )}
    </div>
  );
}
