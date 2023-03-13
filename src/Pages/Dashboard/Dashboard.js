import React from 'react';

const Dashboard = () => {
        return (
                <div>
                        <div className="drawer drawer-mobile">
                                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content flex flex-col items-center justify-center">
                                        <label for="my-drawer-2" className="btn btn-sm bg-gradient-to-l from-accent to-secondary text-sm font-bold text-pink-700 w-full max-w-xs drawer-button lg:hidden">Dashboard</label>
                                </div>
                                <div className="drawer-side">
                                        <label for="my-drawer-2" className="drawer-overlay"></label>
                                        <ul className="menu p-4 w-80 bg-gradient-to-b from-accent to-secondary text-sm font-bold text-pink-700 text-base-content">
                                                <li><a>Sidebar Item 1</a></li>
                                                <li><a>Sidebar Item 2</a></li>
                                        </ul>

                                </div>
                        </div>
                </div>
        );
};

export default Dashboard;