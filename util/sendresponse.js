export default (res, { statusCode = 200, message = "success", data }) =>
  res.status(statusCode).json({ status: message, data });
