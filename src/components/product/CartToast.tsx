"use client"
interface Props {
    message: string
}
export default function CartToast({ message }: Props) {
    return (
        <div className="fixed top-5 right-5 bg-black text-white px-5 py-3 rounded-lg shadow-lg animate-SlideIn z-50">
            {message}
        </div>
    )
}