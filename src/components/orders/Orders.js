import React from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  return (
    <table>
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Total
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Paid
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Active
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr className="hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-no-wrap">
            Women red heels sandal
          </td>
          <td className="px-6 py-4 whitespace-no-wrap">linh29@gmail.com</td>
          <td className="px-6 py-4 whitespace-no-wrap">$2343</td>
          <td className="px-6 py-4 whitespace-no-wrap">Not Paid</td>
          <td className="px-6 py-4 whitespace-no-wrap">03/06/2024</td>
          <td className="px-6 py-4 whitespace-no-wrap">Not Delivered</td>
          <td
            onClick={() => navigate("/order")}
            className="px-6 py-4 whitespace-no-wrap"
          >
            detail
          </td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-no-wrap">
            Men blue heels sandal
          </td>
          <td className="px-6 py-4 whitespace-no-wrap">linh29@gmail.com</td>
          <td className="px-6 py-4 whitespace-no-wrap">$2343</td>
          <td className="px-6 py-4 whitespace-no-wrap">Not Paid</td>
          <td className="px-6 py-4 whitespace-no-wrap">03/06/2024</td>
          <td className="px-6 py-4 whitespace-no-wrap">Not Delivered</td>
          <td
            onClick={() => navigate("/order")}
            className="px-6 py-4 whitespace-no-wrap"
          >
            detail
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Order;
