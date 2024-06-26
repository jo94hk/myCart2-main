import "./CartPage.css";
import remove from "../../assets/remove.png";
import user from "../../assets/user.webp";
import Table from "../Common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";

const CartPage = () => {
  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img src={user} alt="user profile" />
        <div>
          <p className="user_name">Dooly</p>
          <p className="user_email">dooly@naver.com</p>
        </div>
      </div>
      {/* headings라는 파일은 따로 만들어야함 */}
      {/*  */}
      <Table headings={["상품", "가격", "구매수량", "총 금액", "상품삭제"]}>
        <tbody>
          <tr>
            <td>iPhone 14</td>
            <td>1200,000 원</td>
            <td className="align_center table_quantity_input">
              <QuantityInput />
            </td>
            <td>1200,000 원</td>
            <td>
              <img
                src={remove}
                alt="remove icon"
                className="cart_remove_icon"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default CartPage;
