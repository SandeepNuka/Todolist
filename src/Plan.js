import "./index.css";

function Plan(props) {
  return (
    <>
      <li className="shadow p-2 my-2 col-sm-9 ">{props.value}</li>
      <button
        className="btn btn-danger my-2 col-sm-2"
        onClick={() => {
          props.deldata(props.id);
        }}
      >
        delete {props.id + 1}
      </button>
    </>
  );
}

export default Plan;
