

const { z } = require("zod");

const schema = z.object({
    Name: z
        .string({required_error: "Name is required"})
        .min(3, { message: "Name must be at least 3 characters" })
        .max(24, { message: "Name cannot be greater than 24 characters" }),

    Email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Email is invalid" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(24, { message: "Email cannot be greater than 24 characters" }),

    Phone_number: z
        .string({ required_error: "Phone number is required" })
        .trim()
        .min(3, { message: "Phone number must be at least 3 characters" })
        .max(24, { message: "Phone number cannot be greater than 24 characters" }),


    Password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(3, { message: "Password must be at least 3 characters" })
        .max(24, { message: "Password cannot be greater than 24 characters" }),
});

module.exports = schema;

