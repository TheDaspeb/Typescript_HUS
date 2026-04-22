export type PropertyPayload = {
    name?: string;
    value?: number;
    img?: string;
};

export function validateCreatePropertyPayload(payload: PropertyPayload) {
    const errors: string[] = [];

    if (!payload.name || typeof payload.name !== "string" || !payload.name.trim()) {
        errors.push("El campo 'name' es obligatorio y debe ser un texto valido.");
    }

    if (typeof payload.value !== "number" || Number.isNaN(payload.value)) {
        errors.push("El campo 'value' es obligatorio y debe ser un numero valido.");
    }

    if (payload.img !== undefined && typeof payload.img !== "string") {
        errors.push("El campo 'img' debe ser un texto valido.");
    }

    return errors;
}

export function validateUpdatePropertyPayload(payload: PropertyPayload) {
    const errors: string[] = [];

    if (!Object.keys(payload).length) {
        errors.push("Debes enviar al menos un campo para actualizar.");
    }

    if (
        payload.name !== undefined &&
        (typeof payload.name !== "string" || !payload.name.trim())
    ) {
        errors.push("Si envias 'name', debe ser un texto valido.");
    }

    if (
        payload.value !== undefined &&
        (typeof payload.value !== "number" || Number.isNaN(payload.value))
    ) {
        errors.push("Si envias 'value', debe ser un numero valido.");
    }

    if (payload.img !== undefined && typeof payload.img !== "string") {
        errors.push("Si envias 'img', debe ser un texto valido.");
    }

    return errors;
}

export function buildPropertyData(payload: PropertyPayload) {
    const data: PropertyPayload = {};

    if (payload.name !== undefined) {
        data.name = payload.name.trim();
    }

    if (payload.value !== undefined) {
        data.value = payload.value;
    }

    if (payload.img !== undefined) {
        data.img = payload.img.trim();
    }

    return data;
}
