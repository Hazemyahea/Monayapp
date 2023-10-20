import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateCustomer, CreatePassword } from "../reducers/CustomerSlice";
import store from "../store";
function Singin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.CustomerSlice);
  function AddName() {
    dispatch(CreateCustomer(name));
    dispatch(CreatePassword(password));
    setName("");
    setPassword("");
  }

  return (
    <div className="container p-3">
      <h2 className="mb-3">Sign in</h2>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="password"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={() => AddName()}
      >
        Sing in
      </button>
    </div>
  );
}

export default Singin;
