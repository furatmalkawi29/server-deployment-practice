/**
 * This function accepts HTTP request and response,
 * it sends json object with request status 404 and 
 * a message that page isnt found . 
 * 
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 */

module.exports =(req,res) => {
  res.status(404).json({
    status: 404,
    message: 'page not found',
  });
};