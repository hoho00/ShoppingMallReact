import { Route } from "react-router";
import GoodsTable from "./GoodsTable";
import TransactionTable from "./TransactionTable";

const SellerInfoBody = () => {
  return (
    <div>
      <Route exact path="/seller_info/goods_table" component={GoodsTable} />
      <Route
        path="/seller_info/transaction_table"
        component={TransactionTable}
      />
    </div>
  );
};

export default SellerInfoBody;
