'use client'
import React, { useEffect, useState, Fragment, useRef } from "react";
import Image from 'next/image';
import Threed from "./Threed";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'; // changed icon

interface Fabric {
  fabric_id: string;
  image: string;
}

const ITEMS_PER_PAGE = 12;

const Customization = () => {
  const [fabrics, setFabrics] = useState<Fabric[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFabric, setSelectedFabric] = useState<Fabric | null>(null);
  const [selectedFabricId, setSelectedFabricId] = useState<string | null>(null);

  const [selections, setSelections] = useState({
    bodyType: 'Slim',
    sleeveType: 'half',
    collarType: 'normal',
  });

  // State to toggle dropdown settings panel
  const [settingsOpen, setSettingsOpen] = useState(false);

  const settingsRef = useRef<HTMLDivElement>(null); // ref for dropdown panel
  const buttonRef = useRef<HTMLButtonElement>(null); // ref for icon button

  const bodyTypes = ['Slim', 'fat'];
  const sleeveTypes = ['half', 'full'];
  const collarTypes = ['normal', 'nehru'];

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchFabrics = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/fabrics/images`);
        const data = await res.json();
        setFabrics(data);
      } catch (error) {
        console.error('Error fetching fabrics:', error);
      }
    };
    fetchFabrics();
  }, [backendUrl]);

  // Click outside handler to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        settingsOpen &&
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setSettingsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settingsOpen]);

  const totalPages = Math.ceil(fabrics.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentFabrics = fabrics.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFabricClick = (fabric: Fabric) => {
    const isSame = selectedFabric?.fabric_id === fabric.fabric_id;
    setSelectedFabric(isSame ? null : fabric);
    setSelectedFabricId(isSame ? null : fabric.fabric_id);
  };

  const handleChange = (key: keyof typeof selections, value: string) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const dropdowns = [
    { key: 'bodyType' as const, options: bodyTypes, label: 'Body Type' },
    { key: 'sleeveType' as const, options: sleeveTypes, label: 'Sleeve Type' },
    { key: 'collarType' as const, options: collarTypes, label: 'Collar Type' }
  ];

  return (
    <div className="w-full bg-gray-100 py-16 px-6 md:px-12 lg:px-24 scroll-mt-10" id="customization">
      <div className="text-center mb-12">
        <h4 className="text-5xl font-bold text-black">Shirt Customization Studio</h4>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center">

        {/* Left Box: 3D Model & Dropdowns */}
        <div className="relative flex flex-col items-center text-center p-8 bg-white border border-gray-200 shadow-lg rounded-xl w-full md:w-1/2 h-[384.5px]">

          {/* Settings icon button top-left */}
          <button
            ref={buttonRef}
            onClick={() => setSettingsOpen((open) => !open)}
            aria-label="Toggle settings"
            className="absolute top-4 left-4 p-2 rounded hover:bg-gray-200 transition"
          >
            <AdjustmentsHorizontalIcon className="h-6 w-6 text-gray-500" />
          </button>

          {/* Dropdown panel */}
          <Transition
            show={settingsOpen}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="absolute top-16 left-0 z-30 w-72 bg-white border border-gray-300 rounded-lg p-4 shadow-lg"
            ref={settingsRef}
          >

            <div className="grid grid-cols-1 gap-4">
              {dropdowns.map(({ key, options, label }) => (
                <div key={key} className="relative w-full">
                  <label
                    htmlFor={key}
                    className="absolute -top-2 left-2 bg-white px-1 text-[11px] text-orange-500 font-medium z-10"
                  >
                    {label}
                  </label>

                  <Listbox value={selections[key]} onChange={(value) => handleChange(key, value)}>
                    {({ open }) => (
                      <div>
                        <Listbox.Button
                          id={key}
                          className="relative w-full cursor-default rounded-md bg-white border border-gray-300 py-2.5 pl-3 pr-8 text-left text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <span className="block truncate capitalize">{selections[key]}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                            <ChevronUpDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                          </span>
                        </Listbox.Button>

                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-50 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-md ring-1 ring-orange ring-opacity-5 focus:outline-none">
                            {options.map((opt) => (
                              <Listbox.Option
                                key={opt}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-1.5 pl-3 pr-3 ${
                                    active ? 'bg-orange-100 text-orange-900' : 'text-gray-900'
                                  }`
                                }
                                value={opt}
                              >
                                <span
                                  className={`block truncate capitalize ${
                                    selections[key] === opt ? 'font-medium' : 'font-normal'
                                  }`}
                                >
                                  {opt}
                                </span>
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    )}
                  </Listbox>
                </div>
              ))}
            </div>
          </Transition>

          {/* 3D Model container adjusts height depending on dropdown open/close */}
          <div
            className={`w-full mt-6 transition-all duration-300 ${
              settingsOpen ? 'h-[280px]' : 'h-[380px]'
            }`}
          >
            <Threed
              fabricUrl={
                selectedFabricId
                  ? fabrics.find((f) => f.fabric_id === selectedFabricId)?.image || null
                  : null
              }
              selections={selections}
            />
          </div>
        </div>

        {/* Right Box: Fabric List */}
        <div className="flex flex-col items-center text-center p-8 bg-white border border-gray-200 shadow-lg rounded-xl w-full md:w-1/2 h-96 overflow-hidden">
          <h1 className="text-xl font-bold mb-4 text-gray-800">Fabrics</h1>

          {fabrics.length === 0 ? (
            <p className="text-gray-500 mt-4">No fabrics available</p>
          ) : (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-auto">
                {currentFabrics.map((fabric) => {
                  const isSelected = selectedFabric?.fabric_id === fabric.fabric_id;
                  return (
                    <div
                      key={fabric.fabric_id}
                      className="relative w-[95px] h-[95px] cursor-pointer perspective"
                      onClick={() => handleFabricClick(fabric)}
                    >
                      <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isSelected ? 'rotate-y-180' : ''}`}>
                        <div className="absolute inset-0 backface-hidden">
                          <Image
                            src={fabric.image}
                            alt={`Fabric ${fabric.fabric_id}`}
                            layout="fill"
                            className="rounded-md object-cover"
                          />
                        </div>

                        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-md overflow-hidden">
                          <Image
                            src={fabric.image}
                            alt={`Fabric ${fabric.fabric_id}`}
                            layout="fill"
                            className="object-cover opacity-30"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-black"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center mt-4 space-x-4">
                  <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 border rounded disabled:opacity-50">
                    Prev
                  </button>
                  <span className="text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
                  <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-3 py-1 border rounded disabled:opacity-50">
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customization;
