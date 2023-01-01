import React from 'react';


const WorkExperience = (props) => {
    return (
        <div className="mt-[50px] ml-[1px] grid grid-cols-2 gap-4 motion-safe:animate-fadeIn">
            <ul className="cursor-pointer border-solid border-2 border-violet-900 rounded-full w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl motion-safe:animate-fadeIn">
                <li className="text-center ml-[0px] hover:text-lg font-sans font-extrabold text-lg mt-[20px] motion-safe:animate-fadeIn">Procurement Executive<p className="text-sm font-bold motion-safe:animate-fadeIn">(Current)(3+years) </p></li>
            </ul>
            <ul className="cursor-pointer border-solid border-2 border-violet-900 rounded-full w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
                <li className="text-center ml-[0px] hover:text-lg font-sans font-extrabold text-lg">Customer Accounts Executive<p className="text-sm font-bold ">(Purchasing)(3+years)</p></li>
            </ul>
            <ul className="cursor-pointer border-solid border-2 border-violet-900 rounded-full w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
                <li className="text-center ml-[0px] hover:text-lg font-sans font-extrabold text-lg">Financial Services Consultant</li>
            </ul>
            <ul className="cursor-pointer border-solid border-2 border-violet-900 rounded-full w-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
                <li className="text-center ml-[0px] hover:text-lg font-sans font-extrabold text-lg">Marketing Intern</li>
            </ul>
            <ul className="cursor-grabbing border-solid border-2 border-emerald-500 w-60 bg-emerald-200 shadow-2xl ">
              <li className="text-center ml-[0px] duration-1000 hover:text-lg font-sans hover:text-rose-900 hover:font-black transition-all font-black"><a  href="https://www.mediafire.com/file/nzx14ahnasnlz6o/Latest_Updated_Resume_As_Of_22nd_December_2022_-_Nasmer_Fontanilla.docx/file" target="_blank" >Download My Resume For FULL Details</a></li>
            </ul>
          </div>
    );
};

export default WorkExperience;