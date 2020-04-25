module.exports.response = (httpCode, code, description, data = null) => ({
  httpCode,
  code,
  description,
  data
});
