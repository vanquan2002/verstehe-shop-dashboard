import React from "react";

const OrderDetailProducts = () => {
  return (
    <div className="w-1/2 border-2 border-indigo-600 m-2 p-2">
      <table>
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Product
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Unit Price
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-no-wrap">
              Women red heels sandal
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">$2343</td>
            <td className="px-6 py-4 whitespace-no-wrap">3</td>
            <td className="px-6 py-4 whitespace-no-wrap">$6789</td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col items-end">
        <p>Subtotal: $6678</p>
        <p>Shipping cost: $36</p>
        <p>Grand total: $2</p>
        <p>Status: Payment done</p>
      </div>
    </div>
  );
};

export default OrderDetailProducts;
