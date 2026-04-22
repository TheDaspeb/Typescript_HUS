import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

import Property from "@/src/database/models/Property";
import { connectDB } from "@/src/lib/db";
import { buildPropertyData, type PropertyPayload, validateCreatePropertyPayload,  validateUpdatePropertyPayload, } from "@/src/validations/property";

function getIdFromRequest(request: NextRequest) {
    return request.nextUrl.searchParams.get("id");
}

function isValidObjectId(id: string) {
    return mongoose.Types.ObjectId.isValid(id);
}

export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const id = getIdFromRequest(request);

        if (id) {
            if (!isValidObjectId(id)) {
                return NextResponse.json(
                    { message: "El id enviado no tiene un formato valido." },
                    { status: 400 }
                );
            }

            const property = await Property.findById(id);

            if (!property) {
                return NextResponse.json(
                    { message: "Propiedad no encontrada." },
                    { status: 404 }
                );
            }

            return NextResponse.json(
                { message: "Propiedad obtenida correctamente.", data: property },
                { status: 200 }
            );
        }

        const properties = await Property.find().sort({ createdAt: -1 });

        return NextResponse.json(
            {
                message: "Listado de propiedades obtenido correctamente.",
                total: properties.length,
                data: properties,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Error al obtener las propiedades.",
                error: error instanceof Error ? error.message : "Error desconocido.",
            },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const payload = (await request.json()) as PropertyPayload;
        const errors = validateCreatePropertyPayload(payload);

        if (errors.length) {
            return NextResponse.json(
                {
                    message: "Error de validacion al crear la propiedad.",
                    errors,
                },
                { status: 400 }
            );
        }

        const propertyData = buildPropertyData(payload);
        const newProperty = await Property.create(propertyData);

        return NextResponse.json(
            {
                message: "Propiedad creada correctamente.",
                data: newProperty,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Error al crear la propiedad.",
                error: error instanceof Error ? error.message : "Error desconocido.",
            },
            { status: 500 }
        );
    }
}

export async function PUT(request: NextRequest) {
    try {
        await connectDB();

        const id = getIdFromRequest(request);

        if (!id) {
            return NextResponse.json(
                { message: "Debes enviar el parametro 'id' para actualizar." },
                { status: 400 }
            );
        }

        if (!isValidObjectId(id)) {
            return NextResponse.json(
                { message: "El id enviado no tiene un formato valido." },
                { status: 400 }
            );
        }

        const payload = (await request.json()) as PropertyPayload;
        const errors = validateUpdatePropertyPayload(payload);

        if (errors.length) {
            return NextResponse.json(
                {
                    message: "Error de validacion al actualizar la propiedad.",
                    errors,
                },
                { status: 400 }
            );
        }

        const propertyData = buildPropertyData(payload);
        const updatedProperty = await Property.findByIdAndUpdate(id, propertyData, {
            new: true,
            runValidators: true,
        });

        if (!updatedProperty) {
            return NextResponse.json(
                { message: "Propiedad no encontrada." },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: "Propiedad actualizada correctamente.",
                data: updatedProperty,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Error al actualizar la propiedad.",
                error: error instanceof Error ? error.message : "Error desconocido.",
            },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    try {
        await connectDB();

        const id = getIdFromRequest(request);

        if (!id) {
            return NextResponse.json(
                { message: "Debes enviar el parametro 'id' para eliminar." },
                { status: 400 }
            );
        }

        if (!isValidObjectId(id)) {
            return NextResponse.json(
                { message: "El id enviado no tiene un formato valido." },
                { status: 400 }
            );
        }

        const deletedProperty = await Property.findByIdAndDelete(id);

        if (!deletedProperty) {
            return NextResponse.json(
                { message: "Propiedad no encontrada." },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: "Propiedad eliminada correctamente.",
                data: deletedProperty,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Error al eliminar la propiedad.",
                error: error instanceof Error ? error.message : "Error desconocido.",
            },
            { status: 500 }
        );
    }
}
