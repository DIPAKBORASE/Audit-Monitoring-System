import { useLocation } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import {
    Home,
    Users,
    Calendar,
    User,
    MapPin,
    DollarSign,
    FileText,
    Settings,
    LogOut,
    Menu,
    X,
    Bell,
    ChevronDown
} from 'lucide-react';

type SidebarProps = {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    isMobile: boolean;
};

export default function Sidebar({
    currentPage,
    setCurrentPage,
    isOpen,
    setIsOpen,
    isMobile,
}: SidebarProps) {
    const location = useLocation();

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/', badge: null },
        { id: 'candidates', label: 'Candidates', icon: Users, path: '/candidates', badge: '156' },
        { id: 'assignments', label: 'Assignments', icon: Calendar, path: '/assignments', badge: '23' },
        { id: 'clients', label: 'Clients', icon: User, path: '/clients', badge: '89' },
        { id: 'tracking', label: 'Live Tracking', icon: MapPin, path: '/tracking', badge: '5' },
        { id: 'payments', label: 'Payments', icon: DollarSign, path: '/payments', badge: null },
        { id: 'reports', label: 'Reports', icon: FileText, path: '/reports', badge: null },
        { id: 'settings', label: 'Settings', icon: Settings, path: '/settings', badge: null }
    ];

    const handleMenuClick = (pageId: string) => {
        setCurrentPage(pageId);
        if (isMobile) {
            setIsOpen(false);
        }
    };

    const sidebarClasses = isMobile
        ? `fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`
        : 'w-72 bg-white  border-r border-gray-100';

    return (
        <>
            {/* Mobile Overlay */}
            {isMobile && isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={sidebarClasses}>
                {/* Header */}
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center ">
                                <FileText className="text-white" size={24} />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                                    Assisto4u
                                </h1>
                                <p className="text-xs text-gray-600 font-medium">Audit Management System</p>
                            </div>
                        </div>
                        {isMobile && (
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg hover:bg-white hover:bg-opacity-70 transition-colors"
                            >
                                <X size={20} className="text-gray-600" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="mt-6 px-4 flex-1">
                    <div className="space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = currentPage === item.id || location.pathname === item.path;

                            return (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-xl transition-all duration-200 group ${isActive
                                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white transform scale-[0.98]'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600 hover:scale-[1.02]'
                                        }`}
                                    onClick={() => handleMenuClick(item.id)}
                                >
                                    <div className="flex items-center space-x-3">
                                        <Icon
                                            size={20}
                                            className={`transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-purple-600'
                                                }`}
                                        />
                                        <span className="font-medium">{item.label}</span>
                                    </div>
                                    {item.badge && (
                                        <span className={`px-2 py-1 text-xs rounded-full font-medium transition-colors ${isActive
                                                ? 'bg-white bg-opacity-20 text-white'
                                                : 'bg-purple-100 text-purple-700 group-hover:bg-purple-200'
                                            }`}>
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* User Profile Section */}
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">CA</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">CA Professional</p>
                            <p className="text-xs text-gray-500">Admin Account</p>
                        </div>
                        <ChevronDown size={16} className="text-gray-400" />
                    </div>
                </div>

                {/* Logout Button */}
                <div className="p-4">
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 group">
                        <LogOut size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

