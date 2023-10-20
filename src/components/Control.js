import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAmout, addReason, Takeamount } from "../reducers/MoneySlice";
import Alert from "./Alert";
import store from "../store";
function Control() {
  const [amount, Setamount] = useState();
  const [reason, setReason] = useState("");
  const initialArg = {
    success: false,
    wrong: false,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "success":
        return {
          wrong: false,
          success: true,
        };
      case "wrong":
        return {
          success: false,
          wrong: true,
        };
      case "clear":
        return {
          success: false,
          wrong: false,
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialArg);
  const dispatc = useDispatch();
  const store = useSelector((store) => store.MoneySlice.Money);
  function AddMoney() {
    if (amount != 0 && reason != "") {
      dispatc(addAmout(amount, reason, "Deposit"));
      setReason("");
      Setamount("");
      dispatch({ type: "success" });
      setTimeout(function () {
        dispatch({ type: "clear" });
      }, 2000);
    } else {
      dispatch({ type: "wrong" });
      setTimeout(function () {
        dispatch({ type: "clear" });
      }, 2000);
    }
  }
  function Take() {
    if (amount != 0 && reason != "") {
      dispatc(Takeamount(amount, reason, "withdraw"));
      setReason("");
      Setamount("");
      dispatch({ type: "success" });
      setTimeout(function () {
        dispatch({ type: "clear" });
      }, 2000);
    } else {
      dispatch({ type: "wrong" });
      setTimeout(function () {
        dispatch({ type: "clear" });
      }, 2000);
    }
  }

  return (
    <form className="container p-4" onSubmit={(e) => e.preventDefault()}>
      {state.success && (
        <Alert message={"Added successfully"} status={"success"} />
      )}
      {state.wrong && (
        <Alert message={"There is no Amout or Reason !"} status={"danger"} />
      )}
      <h2 className="result">{store} $</h2>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amout
        </label>
        <input
          type="number"
          className="form-control"
          id="Amount"
          onChange={(e) => Setamount(parseInt(e.target.value))}
          value={amount}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Reson" className="form-label">
          Reason
        </label>
        <input
          type="text"
          className="form-control"
          id="Reson"
          onChange={(e) => setReason(e.target.value)}
          value={reason}
        />
      </div>
      <button className="btn btn-success" onClick={() => AddMoney()}>
        Add Money
      </button>
      <button className="btn btn-danger ms-1" onClick={() => Take()}>
        Take Money
      </button>
    </form>
  );
}

export default Control;
