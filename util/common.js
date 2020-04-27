module.exports.response = (statusCode, code, description, data = null) => ({
  statusCode,
  body: {
    code,
    description,
    data,
  },
});
