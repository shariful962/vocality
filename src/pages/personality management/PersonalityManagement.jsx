import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";  
import { priceData } from "./data";

const PersonalityManagement = () => {
  const navigate = useNavigate(); 

  return (
    <div className="w-full p-6 py-12 bg-[#F9F9FA] rounded-[22px] border border-[#BBBBBB] min-h-[calc(100vh-100px)] text-[#BF9E00]">
      <div className="flex flex-wrap justify-center gap-6">
        {priceData.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl w-[300px] flex flex-col justify-between">
            
            {/* header */}
            <div className="py-3 border-b border-Primary">
              <h2 className="text-2xl font-semibold capitalize text-center">
                {item.type}
              </h2>
            </div>

            {/* content */}
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-3xl font-bold mb-4 text-center">
                {item.price} <sup className="text-xl">$</sup> <sub className="text-sm">One time unlock</sub>
               
              </p>

              <ul className="space-y-3 mb-6 flex-grow">
                {item.features.map((feature, index) => {
                  const isLastTwo = index >= item.features.length - 2;

                  return (
                    <li key={index} className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 ${
                          isLastTwo ? "bg-[#BDBDBD]" : "bg-yellow-500"
                        } text-white`}
                      >
                        <IoMdCheckmark />
                      </div>
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>

              {/* EDIT BUTTON */}
              <button
                className="w-full py-2 bg-Primary text-white rounded-md mt-auto cursor-pointer"
                onClick={() => navigate(`/edit-personality/${item.id}`)}   
              >
                Edit
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalityManagement;


