import React from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-white border-r hidden md:block p-6">
                <h2 className="font-bold text-xl mb-6">Dashboard</h2>
                <nav className="space-y-4">
                    <div className="text-gray-600 hover:text-black cursor-pointer">Overview</div>
                    <div className="text-gray-600 hover:text-black cursor-pointer">Analytics</div>
                    <div className="text-gray-600 hover:text-black cursor-pointer">Settings</div>
                </nav>
            </aside>
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}
