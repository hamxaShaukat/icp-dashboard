import React from "react";
import TransactionCard from "./transaction-card";
import { CircleAlert } from "lucide-react";

const TransactionCards = () => {
  const transactions = [
    {
      TransactionTitle: "ETH-equivalent Transactions",
      TransactionValue: "1,234",
      TransactionUnit: "TXN",
    },
    {
      TransactionTitle: "Transactions",
      TransactionValue: "56",
      TransactionUnit: "TXN",
    },
    {
      TransactionTitle: "Million Instructions Executed Per Second",
      TransactionValue: "12",
      TransactionUnit: "MIEPs",
    },
  ];
  return (
    <div className="absolute bottom-0 sm:-bottom-5 md:-bottom-0 lg:-bottom-0 left-0 right-0 p-4">
      <div className="flex flex-col gap-y-4 mb-4">
        <div className="text-3xl text-white flex items-center gap-2">
          Recent Transactions <CircleAlert className="w-6 h-6" />
        </div>
        <div className="flex items-end gap-2 text-gray-400">
          <div className="text-6xl font-bold text-white">$9,999</div>
          <div className="text-sm">per day</div>
        </div>
        <div className="text-white flex items-end gap-2">
          <span className="text-2xl ">0.0785</span>
          <span className="">TCYCLES/s</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[96vw]">
        {transactions.map((transaction, index) => (
          <TransactionCard
            key={index}
            TransactionTitle={transaction.TransactionTitle}
            TransactionValue={transaction.TransactionValue}
            TransactionUnit={transaction.TransactionUnit}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionCards;
