import { CircleAlert } from "lucide-react";
import React from "react";

const TransactionCard = ({
  TransactionTitle,
  TransactionValue,
  TransactionUnit,
}) => {
  return (
    <div className="bg-white/20 text-white flex flex-col gap-2 p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{TransactionTitle}</h3>
        <span className="text-sm text-white">
          <CircleAlert />
        </span>
      </div>
      <div className="text-3xl font-bold">
        {TransactionValue} <span className="text-sm text-gray-400">
            {TransactionUnit}
            </span> 
      </div>
    </div>
  );
};

export default TransactionCard;
