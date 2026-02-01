import Link from "next/link";
interface Props {
    name: string;
    section: string;
}

export default function CategoryCard({ name, section }: Props) {
    return (
        <Link href={`/categories/${section}`} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:scale-105 transition">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="font-normal text-gray-500">Browse products</p>
        </Link>
    );
}