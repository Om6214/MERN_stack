

const { z } = require("zod");

// form validaton or registeration
const signupschema = z.object({
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
        .min(10, { message: "Phone number must be at least 10 numbers" })
        .max(10, { message: "Phone number cannot be greater than 10 numbers" }),


    Password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(5, { message: "Password must be at least 5 characters" })
        .max(24, { message: "Password cannot be greater than 24 characters" }),
});

// form validation for login

const loginschema = z.object({
    Email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Email is invalid" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(24, { message: "Email cannot be greater than 24 characters" }),
    Password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(3, { message: "Password must be at least 3 characters" })
        .max(24, { message: "Password cannot be greater than 24 characters" }),
})

// form validation for contact 

const contactSchema = z.object({
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
    
    Message: z
        .string({required_error: "Message is required before submit"})
        .trim()
        .min(10,{message:"Please elaborate in detail about an issue"})
        .max(300,{message:"cannot generate this much amount of message"})
})

module.exports = {signupschema,loginschema ,contactSchema};

