import { Outlet, createFileRoute } from '@tanstack/react-router';
import Sidebar from '../../components/Sidebar';
// import GlobalCountrySelection from '../../components/GlobalCountrySelection';
import { Provider } from 'jotai';

export default function DashboardLayout() {
    return (
        <>
            {/* <Provider> */}
            {/* Sidebar */}
            <Sidebar
                isOpen={true}
                setIsOpen={() => { }}
                currentPage="dashboard"
                setCurrentPage={() => { }}
                isMobile={false}
            />

            {/* Main Section */}
            <main className="w-full min-h-screen">
                {/* Header */}
                <div className="w-full h-12 bg-sea-800">
                    {/* Searchbar */}
                    {/* Notifications */}
                    {/* Map Button */}
                    {/* <GlobalCountrySelection /> */}
                </div>

                {/* Render child routes */}
                <div className="p-6">
                    <Outlet />
                </div>
            </main>
            {/* </Provider> */}
        </>
    );
}


export const Route = createFileRoute('/dashboard/_layout')({
    component: DashboardLayout,
})




