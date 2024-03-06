import React from "react";

const OrderDetailInfo = () => {
  return (
    <div className="flex gap-52 border-2 border-indigo-600 m-2 p-2">
      <div>
        <p>Customer</p>
        <p>van quan</p>
        <p>vanquan@gmail.com</p>
      </div>
      <div>
        <p>Order info</p>
        <p>Shipping: Viet Nam</p>
        <p>Pay method: paypal</p>
      </div>
      <div>
        <p>Deliver to</p>
        <p>Address: 137 To Hieu, Da Nang</p>
      </div>
    </div>
  );
};

export default OrderDetailInfo;
