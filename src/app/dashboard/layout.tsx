import Sidebar from "@/components/layout/Sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar ثابت طول الشاشة */}
            <Sidebar />

            {/* Main content يملأ كامل المساحة */}
            <main className="flex-1 flex flex-col p-6 text-gray-900 dark:text-gray-100">
                <div className="flex-1">{children}</div>
            </main>
        </div>
    )
}