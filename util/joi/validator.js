import AppError from "../utils/error/appError.js";

/**
 * Validates payload against a Joi schema.
 * @throws {AppError} – 422 if validation fails
 * @returns {object} – sanitised data
 */
export const validator = (schema, payload) => {
  const { error, value } = schema.validate(payload, {
    abortEarly: false, // return every violation
    stripUnknown: true, // drop keys not in the schema
  });

  if (error) {
    // Join all details into one readable string
    const msg = error.details.map((d) => d.message).join(", ");
    throw new AppError(msg, 422);
  }
  return value;
};
