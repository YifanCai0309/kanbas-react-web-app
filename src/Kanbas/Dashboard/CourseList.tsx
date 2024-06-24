import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../Account/client";
import { useEffect, useState } from "react";
import { updateCurrentUser } from "../Account/reducer";
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
  const [error, setError] = useState("");
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser.role;
  const [courseList, setCourseList] = useState<any[]>([]);
  console.log(courseList);
  const dispatch = useDispatch();
  const handleAddNewCourse = async () => {
    try {
      await addNewCourse();
    } catch (err: any) {
      setError("Error adding new course");
    }
  };

  const handleUpdateCourse = async () => {
    try {
      await updateCourse();
    } catch (err: any) {
      setError("Error updating course");
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    try {
      await deleteCourse(courseId);
    } catch (err: any) {
      setError("Error deleting course");
    }
  };

  const addCourse = async (userId: any, courseId: any) => {
    try {
      const updatedUser = await client.addCourseToUser(userId, courseId);
      console.log("Course added:", updatedUser);
      const updatedUserCourses = courseList.filter(
        (course) => course._id !== courseId
      );
      setCourseList(updatedUserCourses);
      dispatch(
        updateCurrentUser({ ...currentUser, courses: updatedUser.courses })
      );
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  useEffect(() => {
    const filteredCourses = courses.filter(
      (course) => !currentUser.courses.includes(course._id)
    );
    setCourseList(filteredCourses);
  }, [currentUser.courses, courses]);
  return (
    <div id="wd-dashboard">
      {role === "FACULTY" && (
        <div>
          {error && <div className="alert alert-danger">{error}</div>}
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleAddNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={handleUpdateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </div>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({courseList.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courseList.map((course: any) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="text-decoration-none"
              >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/reactjs.jpg" height="{160}" />

                  <div className="card-body">
                    <span
                      className="wd-dashboard-course-link"
                      style={{
                        textDecoration: "none",
                        color: "navy",
                        fontWeight: "bold",
                      }}
                    >
                      {course.name}
                    </span>

                    <p
                      className="wd-dashboard-course-title card-text"
                      style={{ maxHeight: 53, overflow: "hidden" }}
                    >
                      {course.description}
                    </p>
                    <div>
                      {/* <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="btn btn-primary float-end"
                      >
                        Go
                      </Link> */}
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          addCourse(currentUser._id, course._id);
                        }}
                        className="btn btn-primary me-2"
                      >
                        Enroll
                      </button>
                      {role === "FACULTY" && (
                        <span>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              handleDeleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
