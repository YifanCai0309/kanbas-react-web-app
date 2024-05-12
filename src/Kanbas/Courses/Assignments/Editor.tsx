export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={50} rows={8}>
        The assignment is available online Submit alink to the landing page of
        your Webapplication running on Netlify.The landingpage should include
        the following: Your fullname and section Links to each of the
        labassignments Link to the Kanbas applicationLinks to all relevant
        source code repositoriesThe Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table border={0} rules="groups">
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        {/* Complete on your own */}
        <br />
        <tr>
          <td align="right">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected>Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected>Online</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left">
            <label>Online Entry Options</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="check-genre"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="check-genre"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="right">Assign</td>
          <td>
              <label htmlFor="wd-assign-to"> Assign to</label>         
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <tr>
            <input id="wd-assign-to" value="Everyone" />
            </tr>
            <br></br>
            <tr>
            <label htmlFor="wd-due-date"> Due</label>
            </tr>
            <tr>
              <input type="date" id="wd-due-date" value="2024-05-13" />
            </tr>
            <br></br>
            <tr>
              <td>
                <tr>
                <label htmlFor="wd-available-from"> Available from</label>
                </tr>
                <tr>
                <input type="date" id="wd-available-from" value="2024-05-06" />
                </tr>
              </td>
              <td>
              <tr>
              <label htmlFor="wd-available-until"> Until</label>
              </tr>
              <tr>
              <input type="date" id="wd-available-until" value="2024-05-20" />
              </tr>
              </td>
            </tr>
          </td>
        </tr>
        <br></br>
        <tfoot>
          <br></br>
        <tr>
          <td></td>
          <td align="right">
            <button id="">Cancel</button>
            <button id="">Save</button>
          </td>  
        </tr>
        </tfoot>
      </table>
    </div>
  );
}
