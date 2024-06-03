export default function ModuleEditor({
  removeAssignment,
}: {
  removeAssignment: () => void;
}) {
  return (
    <div
      id="wd-add-module-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Delete an Assignment{" "}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            Do you want to remove the assignment?
          </div>
          <div className="modal-footer">
            <button
              onClick={removeAssignment}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Yes{" "}
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-danger"
            >
              No{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
