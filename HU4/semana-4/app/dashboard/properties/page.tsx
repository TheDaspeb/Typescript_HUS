"use client";

import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

import {
    deleteProperty,
    getProperties,
    postProperty,
    type PropertyItem,
    updateProperty,
} from "@/src/services/properties";
import type { PropertyPayload } from "@/src/validations/property";

type FormState = {
    name: string;
    value: string;
    img: string;
};

const initialFormState: FormState = {
    name: "",
    value: "",
    img: "",
};

function getErrorMessage(error: unknown) {
    if (axios.isAxiosError(error)) {
        const apiMessage = error.response?.data?.message;

        if (typeof apiMessage === "string" && apiMessage.trim()) {
            return apiMessage;
        }
    }

    if (error instanceof Error && error.message.trim()) {
        return error.message;
    }

    return "Ocurrio un error inesperado. Intenta nuevamente.";
}

function formatCurrency(value: number) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
    }).format(value);
}

export default function PropertiesPage() {
    const [properties, setProperties] = useState<PropertyItem[]>([]);
    const [formData, setFormData] = useState<FormState>(initialFormState);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function loadProperties() {
        setIsLoading(true);
        setErrorMessage("");

        try {
            const response = await getProperties();
            setProperties(response.data);
        } catch (error) {
            setErrorMessage(getErrorMessage(error));
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        let isMounted = true;

        getProperties()
            .then((response) => {
                if (!isMounted) {
                    return;
                }

                setProperties(response.data);
            })
            .catch((error: unknown) => {
                if (!isMounted) {
                    return;
                }

                setErrorMessage(getErrorMessage(error));
            })
            .finally(() => {
                if (!isMounted) {
                    return;
                }

                setIsLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    function resetForm() {
        setFormData(initialFormState);
        setEditingId(null);
    }

    function handleInputChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setMessage("");
        setErrorMessage("");

        const payload: PropertyPayload = {
            name: formData.name,
            value: Number(formData.value),
            img: formData.img,
        };

        try {
            if (editingId) {
                const response = await updateProperty(editingId, payload);

                setProperties((current) =>
                    current.map((property) =>
                        property._id === editingId ? response.data : property
                    )
                );
                setMessage("La propiedad fue actualizada correctamente.");
            } else {
                const response = await postProperty(payload);

                setProperties((current) => [response.data, ...current]);
                setMessage("La propiedad fue creada correctamente.");
            }

            resetForm();
        } catch (error) {
            setErrorMessage(getErrorMessage(error));
        } finally {
            setIsSubmitting(false);
        }
    }

    function handleEdit(property: PropertyItem) {
        setEditingId(property._id);
        setFormData({
            name: property.name,
            value: String(property.value),
            img: property.img,
        });
        setMessage("");
        setErrorMessage("");
    }

    async function handleDelete(id: string) {
        const shouldDelete = window.confirm(
            "¿Seguro que deseas eliminar esta propiedad?"
        );

        if (!shouldDelete) {
            return;
        }

        setMessage("");
        setErrorMessage("");

        try {
            await deleteProperty(id);
            setProperties((current) =>
                current.filter((property) => property._id !== id)
            );

            if (editingId === id) {
                resetForm();
            }

            setMessage("La propiedad fue eliminada correctamente.");
        } catch (error) {
            setErrorMessage(getErrorMessage(error));
        }
    }

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
                <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
                    <div className="mb-6 flex flex-col gap-2">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                            Dashboard de Propiedades
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                            Gestion de propiedades
                        </h1>
                        <p className="max-w-2xl text-sm text-slate-600">
                            Crea, edita y elimina propiedades desde esta vista.
                            El formulario reutiliza la misma estructura para
                            registro y actualizacion.
                        </p>
                    </div>

                    <form
                        className="grid gap-4 md:grid-cols-2"
                        onSubmit={handleSubmit}
                    >
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-slate-700">
                                Nombre de la propiedad
                            </span>
                            <input
                                className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-600 focus:bg-white"
                                name="name"
                                onChange={handleInputChange}
                                placeholder="Ej. Apartamento en el centro"
                                required
                                value={formData.name}
                            />
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-slate-700">
                                Valor
                            </span>
                            <input
                                className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-600 focus:bg-white"
                                min="0"
                                name="value"
                                onChange={handleInputChange}
                                placeholder="Ej. 350000000"
                                required
                                type="number"
                                value={formData.value}
                            />
                        </label>

                        <label className="flex flex-col gap-2 md:col-span-2">
                            <span className="text-sm font-medium text-slate-700">
                                URL de la imagen
                            </span>
                            <input
                                className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-600 focus:bg-white"
                                name="img"
                                onChange={handleInputChange}
                                placeholder="Ej. https://sitio.com/imagen.jpg"
                                value={formData.img}
                            />
                        </label>

                        <div className="flex flex-wrap gap-3 md:col-span-2">
                            <button
                                className="rounded-2xl bg-cyan-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-60"
                                disabled={isSubmitting}
                                type="submit"
                            >
                                {isSubmitting
                                    ? "Guardando..."
                                    : editingId
                                        ? "Actualizar propiedad"
                                        : "Crear propiedad"}
                            </button>

                            <button
                                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
                                disabled={isSubmitting}
                                onClick={resetForm}
                                type="button"
                            >
                                Limpiar formulario
                            </button>
                        </div>
                    </form>

                    {message ? (
                        <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                            {message}
                        </p>
                    ) : null}

                    {errorMessage ? (
                        <p className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
                            {errorMessage}
                        </p>
                    ) : null}
                </section>

                <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-950">
                                Listado de propiedades
                            </h2>
                            <p className="text-sm text-slate-600">
                                Total registradas: {properties.length}
                            </p>
                        </div>

                        <button
                            className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                            onClick={() => void loadProperties()}
                            type="button"
                        >
                            Recargar
                        </button>
                    </div>

                    {isLoading ? (
                        <div className="rounded-2xl bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
                            Cargando propiedades...
                        </div>
                    ) : properties.length === 0 ? (
                        <div className="rounded-2xl bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
                            Aun no hay propiedades registradas.
                        </div>
                    ) : (
                        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {properties.map((property) => (
                                <article
                                    className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
                                    key={property._id}
                                >
                                    <div className="flex h-48 items-center justify-center bg-slate-200">
                                        {property.img ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                alt={property.name}
                                                className="h-full w-full object-cover"
                                                src={property.img}
                                            />
                                        ) : (
                                            <span className="px-6 text-center text-sm text-slate-500">
                                                Esta propiedad no tiene imagen.
                                            </span>
                                        )}
                                    </div>

                                    <div className="space-y-4 p-5">
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-bold text-slate-900">
                                                {property.name}
                                            </h3>
                                            <p className="text-sm text-slate-500">
                                                ID: {property._id}
                                            </p>
                                        </div>

                                        <p className="text-xl font-semibold text-cyan-700">
                                            {formatCurrency(property.value)}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
                                                onClick={() => handleEdit(property)}
                                                type="button"
                                            >
                                                Editar
                                            </button>

                                            <button
                                                className="rounded-2xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
                                                onClick={() =>
                                                    void handleDelete(property._id)
                                                }
                                                type="button"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}

