import * as Joi from "joi";

const postValidator =
    Joi.object({
        title: Joi.string()
            .pattern(/w{2,}/)
            .required()
            .error(errors => {
                console.log(errors);
                errors.forEach(error => {
                    switch (error.code) {
                        case 'string.empty':
                            error.message = 'title cannot be empty ';
                            break;
                        case 'string.min':
                            error.message = 'title can\'t be lower than 2';
                            break;
                        default:
                            break;
                    }
                })
                return errors;
            }),
        body: Joi.string()
            .min(3)
            .required()
            .messages({
                "string.min": "password must be at least 3 chars"
            })
    })

export default postValidator;