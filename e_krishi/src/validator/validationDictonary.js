export const validationDictionary = {
    email: {
        presence: {
            allowEmpty: false,
            message: "^This is required"
        },
        email: {
            message: "^Email address must be valid"
        }
    },
    password: {
        presence: {
            allowEmpty: false,
            message: "^This is required"
        }
    }
}