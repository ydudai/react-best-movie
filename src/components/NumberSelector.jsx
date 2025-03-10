import React, { useState } from 'react';

export default function NumberSelector() {
    const [selectedNumber, setSelectedNumber] = useState(null);
    const numbers = [1, 2, 3, 4, 5];
     let averageRate = 4.5; 

    const handleNumberSelect = (number) => {
        setSelectedNumber(number);
    };

    return (
        <div className="p-1 max-w-min">
            <div className="bg-purple-600 p-1 rounded-lg">
                <div className="flex justify-items-start bg-blue-300 rounded-md p-2">
                    {numbers.map((number) => (
                        <button
                            key={number}
                            className={`w-4 h-4 rounded-full text-xs font-bold flex items-center justify-center transition-all
                ${selectedNumber === number
                                    ? 'bg-purple-600 text-black scale-100 shadow-md'
                                    : 'bg-white text-gray-800 hover:bg-gray-100'}`}
                            onClick={() => handleNumberSelect(number)}
                            aria-label={`Select number ${number}`}
                        >
                            {number}
                        </button>
                    ))}
                     <div className='ml-10 mr-10 font-bold'>{averageRate}</div>
                </div>
                
            </div>
        </div>
    )
}
