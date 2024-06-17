import "./styles.css";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import * as client from "./Courses/client";
//import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import Session from "./Account/Session";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    name: "New Course",
    number: "RS101",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });
  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };
  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([newCourse, ...courses]);
  };

  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas-nav" className="h-100">
          <div
            className="modal fade d-md-none"
            id="sidebarCollapse-kanbas"
            aria-labelledby="exampleModalLabel-kanbas"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel-kanbas">
                    Kanbas Navigation
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <KanbasNavigation />
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-dark position-fixed top-0 start-0 d-md-none"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#sidebarCollapse-kanbas"
          >
            ≣
          </button>
          <div className="d-flex h-100">
            <div
              className="bg-black d-none d-md-block h-100 position-fixed top-0 bottom-0"
              style={{ width: "100px" }}
            >
              <KanbasNavigation />
            </div>

            <div className="flex-fill p-4" style={{ marginLeft: "100px" }}>
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route
                  path="Dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="Courses/:cid/*"
                  element={
                    <ProtectedRoute>
                      <Courses courses={courses} />
                    </ProtectedRoute>
                  }
                />
                <Route path="Calendar" element={<h1>Calendar</h1>} />
                <Route path="Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      </Session>
    </Provider>
  );
}
