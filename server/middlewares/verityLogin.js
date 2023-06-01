import Joi from "@hapi/joi";

const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(255).email().required(),
  password: Joi.string().min(6).max(1024).required(),
});

export const checkSchemaLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const { error } = schemaLogin.validate({ email, password });

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }

  next();
};
