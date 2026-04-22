import axios from "axios";

import type { PropertyPayload } from "@/src/validations/property";

const PROPERTIES_ENDPOINT = "/api/properties";

export type PropertyItem = {
    _id: string;
    name: string;
    value: number;
    img: string;
    createdAt: string;
    updatedAt: string;
};

type GetPropertiesResponse = {
    message: string;
    total: number;
    data: PropertyItem[];
};

type PropertyResponse = {
    message: string;
    data: PropertyItem;
};

export async function getProperties() {
    const response = await axios.get<GetPropertiesResponse>(PROPERTIES_ENDPOINT);
    return response.data;
}

export async function postProperty(payload: PropertyPayload) {
    const response = await axios.post<PropertyResponse>(PROPERTIES_ENDPOINT, payload);
    return response.data;
}

export async function updateProperty(id: string, payload: PropertyPayload) {
    const response = await axios.put<PropertyResponse>(
        `${PROPERTIES_ENDPOINT}?id=${id}`,
        payload
    );

    return response.data;
}

export async function deleteProperty(id: string) {
    const response = await axios.delete<PropertyResponse>(
        `${PROPERTIES_ENDPOINT}?id=${id}`
    );

    return response.data;
}
