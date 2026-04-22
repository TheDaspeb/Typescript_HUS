import { model, models, Schema, type InferSchemaType } from "mongoose";

// Schema principal para las propiedades registradas en MongoDB.
// Define tipos, campos requeridos y el valor por defecto de la imagen.
const propertySchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "El nombre de la propiedad es obligatorio"],
            trim: true,
        },
        value: {
            type: Number,
            required: [true, "El valor de la propiedad es obligatorio"],
        },
        img: {
            type: String,
            default: "",
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export type PropertyDocument = InferSchemaType<typeof propertySchema>;

const Property = models.Property || model("Property", propertySchema);

export default Property;
