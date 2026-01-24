"use client"
import { useActionState } from "react"
import SubmitButton from "../../EditButton"
import updateProductAction from "./action"
export default function EditproductForm({ product }) {
    const [state, formAction] = useActionState(updateProductAction.bind(null, product.id), {})
    return (
        <form action={formAction}>
            <input name="image" defaultValue={product.image} placeholder="Image URL" />
            <input name="name" defaultValue={product.name} placeholder="name" />
            <input name="price" defaultValue={product.price} placeholder="price" />
            <input name="description" defaultValue={product.description} placeholder="Description" />
            {state?.error && <p>{state.error}</p>}
            {state?.success && <p>{state.success}</p>}
            <SubmitButton />
        </form>
    )
}