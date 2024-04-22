"use client";

import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { formatCurrency } from "@/lib/helper";
import CryptoModal from "./CryptoModal";

const CryptoTable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const totalPages = 10;

  const openModalWithItem = (item) => {
    setSelectedCrypto(item);
    setModalOpen(true);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const getCurrencyData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api..com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h%2C7d`
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrencyData();
  }, [page]);

  return (
    <section className="py-6">
      <h2 className="font-semibold text-lg ">
        Top 100 Cryptocurrencies by Market Cap
      </h2>

      <div className="hidden md:block">
        <div className="flex gap-4 my-4 ">
          <p className="bg-button text-sm rounded-lg flex items-center justify-center px-4 py-2">
            <CiStar /> <span className="ml-2">Favourites</span>
          </p>
          <p className="bg-button text-sm rounded-lg flex items-center justify-center px-4">
            CryptoCurrencies
          </p>
          <p className="bg-button text-sm rounded-lg flex items-center justify-center px-4">
            DeFi
          </p>
          <p className="bg-button text-sm rounded-lg flex items-center justify-center px-4">
            NFTs & Collectibles
          </p>
        </div>
      </div>

      <div className="relative overflow-x-auto lg:overflow-x-hidden mt-4">
        <table className="min-w-full divide-y divide-gray-300 ">
          <thead>
            <tr>
              <th className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                NAME
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PRICE
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                24H
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                7D
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                MARKET CAP
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                VOLUME(24H)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                CIRCULATING SUPPLY
              </th>
            </tr>
          </thead>
          {loading ? (
            <div className="flex justify-center items-center h-96">
              Loading...
            </div>
          ) : (
            <tbody className=" divide-y divide-gray-200">
              {data.map((crypto, index) => (
                <>
                  <tr
                    key={crypto?.id}
                    onClick={() => openModalWithItem(crypto)}
                  >
                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <CiStar />
                    </td>
                    <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                      {(page - 1) * 10 + index + 1}
                    </td>
                    <td
                      onClick={openModal}
                      className=" py-4 whitespace-nowrap text-xs font-semibold"
                    >
                      <div className="flex items-center gap-2">
                        <img src={crypto?.image} alt="" width={20} />
                        {crypto?.name}{" "}
                        <span className="text-gray-400">
                          {crypto?.symbol.toUpperCase()}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                      ${formatCurrency(crypto?.current_price)}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-red-600">
                      <div className="flex items-center gap-1">
                        <IoMdArrowDropdown size={20} />
                        {crypto?.price_change_percentage_24h_in_currency.toFixed(
                          2
                        )}
                        %
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold text-green-600">
                      <div className="flex items-center gap-1">
                        <IoMdArrowDropup size={20} />
                        {crypto?.price_change_percentage_7d_in_currency.toFixed(
                          2
                        )}
                        %
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                      ${formatCurrency(crypto?.market_cap)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                      ${formatCurrency(crypto?.total_volume)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                      ${formatCurrency(crypto?.circulating_supply)} BTC
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-semibold">
                      <HiOutlineDotsVertical />
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div className=" my-10 flex justify-center items-center flex-wrap gap-2">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="rotate-90 p-2 rounded-md bg-button"
        >
          <IoMdArrowDropdown />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={`rounded-md border px-4 ${
              page === i + 1 ? "bg-gray-200" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="-rotate-90 p-2 rounded-md bg-button"
        >
          <IoMdArrowDropdown />
        </button>
      </div>
      <CryptoModal
        selectedCrypto={selectedCrypto}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default CryptoTable;
