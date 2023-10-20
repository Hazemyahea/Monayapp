import { useSelector, useDispatch } from "react-redux";
import {
  deleteByid,
  takefromBalance,
  AddToBalance,
} from "../reducers/MoneySlice";
function Table() {
  const dispatch = useDispatch();
  const MoneyStore = useSelector((store) => store.MoneySlice.data);

  function Delet(id, status, money) {
    if (status == "Deposit") {
      dispatch(deleteByid(id));
      dispatch(takefromBalance(money));
    } else {
      dispatch(deleteByid(id));
      dispatch(AddToBalance(money));
    }
  }
  return (
    <table className="table container">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Amount</th>
          <th scope="col">Reason</th>
          <th scope="col">status</th>
          <th scope="col">Date</th>
          <th scope="col">action</th>
        </tr>
      </thead>
      <tbody>
        {MoneyStore.map((money, index) => {
          return (
            <tr
              className={`table-${
                money.status === "withdraw" ? "danger" : "success"
              }`}
            >
              {" "}
              <th scope="row">{index}</th>
              <td>{money.amount}</td>
              <td>{money.reason}</td>
              <td>{money.status}</td>
              <td>{money.date}</td>
              <td
                className="cursor"
                onClick={() => Delet(money.id, money.status, money.amount)}
              >
                ❌
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
