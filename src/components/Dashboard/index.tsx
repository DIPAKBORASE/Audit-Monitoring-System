import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import {
    Users,
    Calendar,
    User,
    DollarSign,
    TrendingUp,
    ArrowUpRight,
    ArrowDownLeft,
    Star,
    MapPin,
    Clock,
    Eye,
    MoreVertical,
    Activity,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import Sidebar from '../Sidebar';

// Mock data - you can move this to a separate service/store
const mockStats = [
    {
        title: 'Total Candidates',
        value: '156',
        icon: Users,
        color: 'from-blue-500 to-blue-600',
        change: '+12%',
        isPositive: true,
        description: 'Active professionals'
    },
    {
        title: 'Active Assignments',
        value: '23',
        icon: Calendar,
        color: 'from-emerald-500 to-emerald-600',
        change: '+8%',
        isPositive: true,
        description: 'Ongoing audits'
    },
    {
        title: 'Total Clients',
        value: '89',
        icon: User,
        color: 'from-purple-500 to-purple-600',
        change: '+5%',
        isPositive: true,
        description: 'Business partners'
    },
    {
        title: 'Monthly Revenue',
        value: '₹2,45,000',
        icon: DollarSign,
        color: 'from-orange-500 to-orange-600',
        change: '+15%',
        isPositive: true,
        description: 'This month earnings'
    }
];

const recentActivities = [
    {
        id: 1,
        type: 'assignment',
        title: 'New assignment created',
        description: 'TechCorp Solutions - Rajesh Kumar',
        time: '2 minutes ago',
        icon: Calendar,
        color: 'text-blue-600 bg-blue-100'
    },
    {
        id: 2,
        type: 'completion',
        title: 'Audit completed',
        description: 'Manufacturing Ltd by Priya Sharma',
        time: '15 minutes ago',
        icon: CheckCircle,
        color: 'text-green-600 bg-green-100'
    },
    {
        id: 3,
        type: 'payment',
        title: 'Payment received',
        description: '₹15,000 from TechCorp Solutions',
        time: '1 hour ago',
        icon: DollarSign,
        color: 'text-emerald-600 bg-emerald-100'
    },
    {
        id: 4,
        type: 'alert',
        title: 'Assignment reminder',
        description: 'Tomorrow: Retail Chain Co audit',
        time: '2 hours ago',
        icon: AlertCircle,
        color: 'text-orange-600 bg-orange-100'
    }
];

const upcomingAssignments = [
    {
        id: 1,
        clientName: 'TechCorp Solutions',
        candidateName: 'Rajesh Kumar',
        date: '2025-07-30',
        time: '10:00 AM',
        location: 'Bandra, Mumbai',
        amount: 15000,
        status: 'confirmed'
    },
    {
        id: 2,
        clientName: 'Manufacturing Ltd',
        candidateName: 'Priya Sharma',
        date: '2025-08-01',
        time: '9:00 AM',
        location: 'Hinjewadi, Pune',
        amount: 12000,
        status: 'pending'
    },
    {
        id: 3,
        clientName: 'Retail Chain Co',
        candidateName: 'Amit Patel',
        date: '2025-08-03',
        time: '11:00 AM',
        location: 'Satellite, Ahmedabad',
        amount: 20000,
        status: 'confirmed'
    }
];

const topPerformers = [
    {
        id: 1,
        name: 'Amit Patel',
        location: 'Ahmedabad, Gujarat',
        rating: 4.8,
        completedAudits: 67,
        onTimeRate: 98,
        avatar: 'AP'
    },
    {
        id: 2,
        name: 'Rajesh Kumar',
        location: 'Mumbai, Maharashtra',
        rating: 4.5,
        completedAudits: 45,
        onTimeRate: 95,
        avatar: 'RK'
    },
    {
        id: 3,
        name: 'Priya Sharma',
        location: 'Pune, Maharashtra',
        rating: 4.2,
        completedAudits: 28,
        onTimeRate: 92,
        avatar: 'PS'
    }
];

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar - Fixed and Sticky */}
            <div className="flex-shrink-0 shadow-lg">
                <Sidebar
                    isOpen={sidebarOpen}
                    setIsOpen={setSidebarOpen}
                    currentPage="dashboard"
                    setCurrentPage={() => { }}
                    isMobile={false}
                />
            </div>

            {/* Main Content Area - Scrollable */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Welcome Header - Fixed */}
                <div className="bg-white border-b border-gray-200 px-6 py-6 flex-shrink-0">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Welcome back, CA Professional 👋
                                </h1>
                                <p className="text-gray-600 mt-1">
                                    Here's what's happening with your audit management today.
                                </p>
                            </div>
                            <div className="hidden md:flex items-center space-x-4">
                                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                                    <div className="text-center">
                                        <p className="text-xs opacity-90">Today's Audits</p>
                                        <p className="text-lg font-bold">5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Content - Scrollable */}
                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            {mockStats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                                                <Icon className="text-white" size={20} />
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                {stat.isPositive ? (
                                                    <ArrowUpRight className="text-emerald-500" size={20} />
                                                ) : (
                                                    <ArrowDownLeft className="text-red-500" size={20} />
                                                )}
                                                <span className={`text-sm font-semibold ${stat.isPositive ? 'text-emerald-600' : 'text-red-600'
                                                    }`}>
                                                    {stat.change}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                                            <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                                            <p className="text-xs text-gray-500">{stat.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Recent Activities */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                                    <div className="p-4 border-b border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                                <Activity className="mr-2 text-purple-600" size={20} />
                                                Recent Activities
                                            </h3>
                                            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                                                View All
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="space-y-3">
                                            {recentActivities.map((activity) => {
                                                const Icon = activity.icon;
                                                return (
                                                    <div key={activity.id} className="flex items-start space-x-3">
                                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${activity.color}`}>
                                                            <Icon size={16} />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                                                            <p className="text-sm text-gray-600">{activity.description}</p>
                                                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Upcoming Assignments */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                                    <div className="p-4 border-b border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                                <Calendar className="mr-2 text-purple-600" size={20} />
                                                Upcoming Assignments
                                            </h3>
                                            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                                                View Calendar
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="space-y-3">
                                            {upcomingAssignments.map((assignment) => (
                                                <div
                                                    key={assignment.id}
                                                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex-1">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <h4 className="font-semibold text-gray-900">{assignment.clientName}</h4>
                                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${assignment.status === 'confirmed'
                                                                    ? 'bg-emerald-100 text-emerald-700'
                                                                    : 'bg-yellow-100 text-yellow-700'
                                                                    }`}>
                                                                    {assignment.status}
                                                                </span>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                                                                <div className="flex items-center">
                                                                    <User size={14} className="mr-2" />
                                                                    {assignment.candidateName}
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <Clock size={14} className="mr-2" />
                                                                    {assignment.date} at {assignment.time}
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <MapPin size={14} className="mr-2" />
                                                                    {assignment.location}
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <DollarSign size={14} className="mr-2" />
                                                                    ₹{assignment.amount.toLocaleString()}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className="ml-4 p-2 hover:bg-gray-200 rounded-lg transition-colors">
                                                            <MoreVertical size={16} className="text-gray-500" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Top Performers */}
                        <div className="mt-6">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="p-4 border-b border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                            <TrendingUp className="mr-2 text-purple-600" size={20} />
                                            Top Performers This Month
                                        </h3>
                                        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                                            View All Candidates
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {topPerformers.map((performer, index) => (
                                            <div
                                                key={performer.id}
                                                className="relative p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all duration-300"
                                            >
                                                {index === 0 && (
                                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                                                        <span className="text-white text-xs font-bold">👑</span>
                                                    </div>
                                                )}
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                                                        <span className="text-white font-semibold">{performer.avatar}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">{performer.name}</h4>
                                                        <p className="text-sm text-gray-600">{performer.location}</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3 text-sm">
                                                    <div className="flex items-center">
                                                        <Star className="text-yellow-400 fill-current mr-1" size={14} />
                                                        <span className="font-medium">{performer.rating}</span>
                                                    </div>
                                                    <div className="text-gray-600">
                                                        {performer.completedAudits} audits
                                                    </div>
                                                    <div className="text-emerald-600 font-medium">
                                                        {performer.onTimeRate}% on-time
                                                    </div>
                                                    <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center">
                                                        <Eye size={14} className="mr-1" />
                                                        View
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}