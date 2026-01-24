"use client"

import { useActionState, useRef } from "react"
import { requestFormReset, useFormStatus } from "react-dom"
import createProduct from "./action"

export default function NewProductForm() {
    const [state, formAction] = useActionState()
    const ref = useRef()
    const { pending } = useFormStatus

    if (state?.success) {
        ref.current?.reset()
    }

    return (
        <form action={formAction} ref={ref} className="space-y-4 max-w-md">
            <input name="name" placeholder="Product name" className="w-full border p-2 rounded" />
            <input name="price" placeholder="Product price" type="number" className="w-full border p-2 rounded" />
            <input name="image" placeholder="image URL" className="w-full border p-2 rounded" />
            {state?.error && <p className="text-red-500">{state.error}</p>}
            {state?.success && <p className="text-green-600">{state.success}</p>}
            <button disabled={pending} className="bg-blue-600 text-white px-4 py-2 rounded">
                {pending ? "Add product" : "Adding ..."}
            </button>
        </form>

    )
}