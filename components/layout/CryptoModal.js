import { formatCurrency } from "@/lib/helper";
import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

const CryptoModal = ({ isOpen, onClose, selectedCrypto }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-auto bg-black/50 flex"
      onClick={onClose}
    >
      <div
        className="relative p-4 bg-white max-w-sm w-full m-auto flex-col flex rounded-lg "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute right-2">
          <button className="focus:outline-none p-2" onClick={onClose}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img
              src={selectedCrypto?.image}
              alt={selectedCrypto?.name}
              width={20}
              height={20}
            />
            <h2 className="text-sm font-semibold">{selectedCrypto?.name}</h2>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <h2 className="text-sm font-semibold">PRICE</h2>
              <p className="mt-2">
                ${formatCurrency(selectedCrypto?.current_price)}
              </p>
            </div>
            <div className="text-center ">
              <h2 className="text-sm font-semibold">24H</h2>
              <div className="flex items-center gap-1 text-red-600 mt-2">
                <IoMdArrowDropup size={20} />
                {selectedCrypto?.price_change_percentage_7d_in_currency.toFixed(
                  2
                )}
                %
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-sm font-semibold">7D</h2>
              <div className="flex items-center gap-1 text-green-600 mt-2">
                <IoMdArrowDropup size={20} />
                {selectedCrypto?.price_change_percentage_7d_in_currency.toFixed(
                  2
                )}
                %
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold">MARKET CAP</h2>
            <p className="mt-2">
              ${formatCurrency(selectedCrypto?.market_cap)}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold">VOLUME(24H)</h2>
            <p className="mt-2">
              ${formatCurrency(selectedCrypto?.total_volume)}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold">CIRCULATING SUPPLY</h2>
            <p className="mt-2">
              ${formatCurrency(selectedCrypto?.circulating_supply)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoModal;
