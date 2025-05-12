import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mealsData from '../data/meals.json';

import img1 from '../assets/1.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import elephant from '../assets/elephant.svg';
import smallorange from '../assets/smallorange.svg';
import smallbrown from '../assets/smallbrown.svg';
import vines from '../assets/vines.svg';

const imageMap = {
  img3, img4, img5, img6, img7, img8,
};

const Menu = () => {
  const navigate = useNavigate();
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [hoveredMeal, setHoveredMeal] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const mealKeys = Object.keys(mealsData);
  const mealToDisplayKey = hoveredMeal || selectedMeal;
  const mealToDisplay = mealToDisplayKey ? mealsData[mealToDisplayKey] : null;

  const base = mealToDisplay?.base || { cal: 0, fat: 0, protein: 0, carbs: 0 };
  const image = mealToDisplay?.image ? imageMap[mealToDisplay.image] : img1;
  const description = mealToDisplay?.description || '';
  const displayName = mealToDisplay?.name || '';

  return (
    
    <div className="w-full min-h-screen font-mulish relative overflow-hidden" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 800 }}>
      {/* Blurs Container */}
      <div className="absolute inset-0 z-2 pointer-events-none overflow-hidden">
      <div className="absolute top-[42%] left-0 h-[200px] w-[200px] bg-[rgb(255,255,101)] opacity-70 blur-[100px] rounded-full z-0 -translate-y-1/2" />
      <div className="absolute top-[26%] left-240 h-[300px] w-[200px] bg-[#fc8971] opacity-40 blur-[100px] rounded-full translate-x-[280%]"></div>
      
      </div>
      {/* Decorative Images */}
      <img src={smallorange} alt="orangleaf" className="absolute left-8 top-1/4 w-[100px] -translate-y-10 hidden xl:flex z-[100]" />
      <img src={smallbrown} alt="brownleaf" className="absolute left-30 top-1/3 w-[60px] -translate-y-5 hidden xl:flex z-[100]" />
      <img src={elephant} alt="Elephant" className="hidden xl:block absolute left-4 top-[52%] w-[230px] -translate-y-1/2 z-10" />
      <img src={vines} alt="vines" className="absolute right-38 top-1/2 w-[350px] -translate-y-40 hidden xl:flex z-[100] " />
      
      {/* Top Section */}
      <div className="bg-amber-50 py-8 px-4 w-full z-[100] shadow-md">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-[100]">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#7C2D53] z-[100]" >MENU</h1>
            <p className="text-md md:text-lg text-gray-700" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 600 }}>Pick your meal and see nutrition details!</p>
          </div>

          <div className="flex gap-6 text-center z-[100]">
            <div>
              <p className="text-3xl font-bold">{base.cal} cal</p>
              <p className="text-sm text-gray-600">Calories</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{base.fat}g</p>
              <p className="text-sm text-gray-600">Fat</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{base.protein}g</p>
              <p className="text-sm text-gray-600">Protein</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{base.carbs}g</p>
              <p className="text-sm text-gray-600">Carbs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" py-10 px-4 w-full z-[100]">
        <div
          className="max-w-screen-lg mx-auto flex flex-col lg:flex-row gap-12 z-[100]"
          onMouseLeave={() => setHoveredMeal(null)}
        >
          {/* Meal List */}
          <div className="w-full lg:w-1/3 pl-4 xl:pl-8 z-[100]">
            <h2 className="text-3xl font-bold text-[#7C2D53] mb-6 text-center lg:text-left z-[100]">Select Your Meal</h2>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-6 text-base z-[100] "
            />
            <ul className="space-y-5 text-lg  z-[100]">
              {mealKeys
                .filter((key) =>
                  mealsData[key].name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((key) => (
                  <li
                    key={key}
                    className="font-bold text-[#7C2D53] cursor-pointer hover:underline hover:text-[#5a1f3c] transition z-[100]"
                    onMouseEnter={() => setHoveredMeal(key)}
                    onClick={() => {
                      setSelectedMeal(key);
                      setHoveredMeal(null);
                      navigate(`/details/${key}`);
                    }}
                  >
                    {mealsData[key].name}
                  </li>
                
                  



                ))}
            </ul>
          </div>

          {/* Meal Image & Description */}
          <div className="w-full lg:w-2/3 flex flex-col items-center z-[100]">
            <img
              src={image}
              alt="Meal Preview"
              className="w-full max-w-[600px] h-[400px] object-contain mb-6 z-[100]"
            />
           {selectedMeal && (
  <div className="text-center w-full px-4 z-[300] relative">
    <h3 className="text-3xl font-bold text-[#7C2D53] mb-2">{displayName}</h3>
    <p className="text-lg text-gray-700 mb-4">{description}</p>

    {/* Button Container with High z-index */}
    <div className="flex justify-center mt-4 z-[100000] relative">
      <button
        className="bg-[#7C2D53] hover:bg-[#5a1f3c] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
        onClick={() => alert(`Order placed for {displayName}`)}
      >
        Place Order
      </button>
    </div>
  </div>
)}



            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
