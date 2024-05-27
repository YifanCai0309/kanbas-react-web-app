import { useParams } from "react-router";
export default function AssignmentEditor() {
  const { id } = useParams();
  
  return (
    <div id="wd-assignments-editor" className="container">
      <div className="m-4">
        <label
          htmlFor="wd-name"
          id="wd-assignment-name"
          className="fw-bolder fs-5"
        >
          Assignment Name
        </label>
        <div className="mb-3">
          <input id="wd-name" className="form-control" value={id} />
        </div>
      </div>

      <div className="mb-3 border m-4">
        <div className="fw-bold m-2">
          The assignment is{" "}
          <span className="text-danger">avallable online</span>
        </div>

        <div className="fw-bold m-2">
          Submit a link to the landing page of your Web application running on
          Netlify.
        </div>

        <div className="m-2">
          The landing page should include the following:{" "}
        </div>
        <ul>
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments </li>
          <li>Link to the Kanbas application</li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        <div className="m-2">
          {" "}
          The Kanbas application should include a link to navigate back to the
          landing page.
        </div>
      </div>

      <div id="wd-assignments-editor-details" className="">
        <div className="row align-items-center m-4 justify-content-end">
          <div className="col-auto">
            <label htmlFor="wd-points" className="form-label">
              Points
            </label>
          </div>

          <div className="col-md-6">
            <input id="wd-points" className="form-control" value={100} />
          </div>
        </div>

        <div className="row align-items-center m-4 justify-content-end">
          <div className="col-auto">
            <label htmlFor="wd-group" className="form-label">
              Assignment Group
            </label>
          </div>
          <div className="col-md-6">
            <select id="wd-group" className="form-select">
              <option selected>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </select>
          </div>
        </div>

        <div className="row align-items-center m-4 justify-content-end">
          <div className="col-auto">
            <label htmlFor="wd-display-grade-as" className="form-label">
              Display Grade as
            </label>
          </div>
          <div className="col-md-6">
            <select id="wd-display-grade-as" className="form-select">
              <option selected>Percentage</option>
            </select>
          </div>
        </div>

        <div className="row align-items-start m-4 justify-content-end">
          <div className="col-auto align-top">
            <label htmlFor="wd-submission-type" className="form-label">
              Submission Type
            </label>
          </div>

          <div className="col-md-6 border p-3">
            <select id="wd-submission-type" className="form-select">
              <option selected>Online</option>
            </select>

            <div className="m-3">
              <label className="form-label">Online Entry Options</label>
              <div>
                <input
                  type="checkbox"
                  id="wd-text-entry"
                  className="form-check-input"
                />
                <label htmlFor="wd-text-entry" className="form-check-label">
                  Text Entry
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="wd-website-url"
                  className="form-check-input"
                />
                <label htmlFor="wd-website-url" className="form-check-label">
                  Website URL
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="wd-media-recordings"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-media-recordings"
                  className="form-check-label"
                >
                  Media Recordings
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-student-annotation"
                  className="form-check-label"
                >
                  Student Annotation
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="wd-file-upload"
                  className="form-check-input"
                />
                <label htmlFor="wd-file-upload" className="form-check-label">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-start m-4 justify-content-end">
          <div className="col-auto align-top">
            <label htmlFor="wd-assign-details" className="form-label">
              Assign
            </label>
          </div>
          <div id="wd-assign-details" className="col-md-6">
            <div className="col-md-6 m-2">
              <label htmlFor="wd-assign-to" className="form-label">
                Assign to
              </label>
              <input
                id="wd-assign-to"
                className="form-control"
                value="Everyone"
              />
            </div>
            <div className="col-md-6 m-2">
              <label htmlFor="wd-due-date" className="form-label">
                Due
              </label>
              <input
                type="date"
                id="wd-due-date"
                className="form-control"
                value="2024-05-13"
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label">
                  Available from
                </label>
                <input
                  type="date"
                  id="wd-available-from"
                  className="form-control"
                  value="2024-05-06"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label">
                  Until
                </label>
                <input
                  type="date"
                  id="wd-available-until"
                  className="form-control"
                  value="2024-05-20"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 float-end">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}
