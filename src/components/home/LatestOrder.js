import React from "react";

const LatestOrder = () => {
  return (
    <div className="w-1/2 border-2 border-indigo-600 m-2 p-2">
      <table>
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-no-wrap">
              007g3498539hrg987okdgdfsd
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">Not Paid</td>
            <td className="px-6 py-4 whitespace-no-wrap">03/06/2024</td>
            <td className="px-6 py-4 whitespace-no-wrap">$123.453</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-no-wrap">
              008g3498539dg675gfhggf446
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">Not Paid</td>
            <td className="px-6 py-4 whitespace-no-wrap">03/06/2024</td>
            <td className="px-6 py-4 whitespace-no-wrap">$123.453</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LatestOrder;
