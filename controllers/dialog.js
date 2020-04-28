module.exports.getDialogs = async (handler) => {
  const params = {

    TableName: handler.config.appData.dynamoTable,
    ProjectionExpression: 'Id, #Name',
    KeyConditionExpression: 'Id = :Id',
    ExpressionAttributeNames: { '#Name': 'Name' },

  };

  return new Promise((resolve, reject) => {
    handler.config.aws.dynamoDB.scan(params, (err, data) => {

      if (err != null) return reject(handler.config.response(err.statusCode, 'err_controller', err.message));
    
      return resolve(handler.config.response(200, 'ok', 'Esta es la lista de dialogos', data.Items));
      
   
      });
  }).catch((result) => {
    handler.config.logger.error(__filename, result.body.description);
    return result;
  });


};


// module.exports.Dialog = (Req, Res, Next) => {
//   const params = {

//     TableName: process.env.DIALOG_TABLE,
//     ProjectionExpression: 'Id, #Text, #Name',
//     KeyConditionExpression: 'Id = :Id',
//     ExpressionAttributeNames: { '#Text': 'Text', '#Name': 'Name' },
//     ExpressionAttributeValues: { ':Id': Req.params.DialogId },
//   };


//   Req.CC.DynamoDB.query(params, (err, data) => {
//     if (err) return Req.CC.CR.SetResponseWithError(Res, err.statusCode, err.message);
//     Req.body = data.Items[0];
//     Next();
//     // return Req.CC.CR.SetResponseWithOk(Res, 200, 'ok', data.Items[0]);
//   });
  
// };
