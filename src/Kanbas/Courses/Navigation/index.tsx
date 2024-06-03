import "./index.css";
import { useParams, useLocation } from "react-router";
import db from "../../Database";

export default function CoursesNavigation() {
  const courses=db.courses;
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link);
        return (
          <a
            key={link}
            id={`wd-course-${link.toLowerCase()}-link`}
            href={`#/Kanbas/Courses/${course?._id}/${link}`}
            className={`list-group-item ${isActive ? "active" : "text-danger"} border border-0`}
          >
            {link}
          </a>
        );
      })}
    </div>
  );
}
