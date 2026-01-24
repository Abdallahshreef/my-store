import Link from "next/link";
export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-5">
            <h2 className="text-xl font-bold mb-6">My store</h2>
            <ul className="space-y-3">
                <li><Link className="text-gray-700 hover:text-black" href="/dashboard">Dashboard</Link></li>
                <li><Link className="text-gray-700 hover:text-black" href="/dashboard/products">Products</Link></li>
                <li><Link className="text-gray-700 hover:text-black" href="/dashboard/orders">Orders</Link></li>
                <li><Link className="text-gray-700 hover:text-black" href="/dashboard/users">Users</Link></li>
            </ul>
        </aside>
    )
}