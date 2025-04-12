// // import React from 'react';

// const Visitors = () => {
//     return (
//         <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex justify-center items-center" >
//             <div className="stats shadow">

//                 <div className="stat">
//                     <div className="stat-figure text-primary">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
//                     </div>
//                     <div className="stat-title">Total Projects</div>
//                     <div className="stat-value text-primary">2.6K</div>
//                     <div className="stat-desc">21% more than last month</div>
//                 </div>

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
//                     </div>
//                     <div className="stat-title">Working on</div>
//                     <div className="stat-value text-secondary">34</div>
//                     <div className="stat-desc">10% more than last month</div>
//                 </div>

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <div className="avatar online">
//                             <div className="w-16 rounded-full">
//                                 <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="stat-value">86%</div>
//                     <div className="stat-title">Tasks done</div>
//                     <div className="stat-desc text-secondary">31 tasks remaining</div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Visitors;


const Visitors = () => {
    return (
        <div className="max-w-[1040px] mx-auto px-4 md:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Total Projects Card */}
                <div className="stat-card bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <svg 
                                className="w-8 h-8 text-primary" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="1.5" 
                                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                                />
                            </svg>
                        </div>
                        <div>
                            <div className="stat-title text-base-content/70">Total Projects</div>
                            <div className="stat-value text-primary">2.6K</div>
                            <div className="stat-desc text-primary">21% more than last month</div>
                        </div>
                    </div>
                </div>

                {/* Active Projects Card */}
                <div className="stat-card bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-secondary/10 rounded-lg">
                            <svg 
                                className="w-8 h-8 text-secondary" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="1.5" 
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div>
                            <div className="stat-title text-base-content/70">Working on</div>
                            <div className="stat-value text-secondary">34</div>
                            <div className="stat-desc text-secondary">10% more than last month</div>
                        </div>
                    </div>
                </div>

                {/* Progress Card */}
                <div className="stat-card bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div>
                            <div className="stat-title text-base-content/70">Tasks done</div>
                            <div className="stat-value">86%</div>
                            <div className="stat-desc text-secondary">31 tasks remaining</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Visitors;