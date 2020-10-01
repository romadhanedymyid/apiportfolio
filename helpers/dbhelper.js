var aws = require('aws-sdk');
var lambda = new aws.Lambda({
  region: 'ap-southeast-1'
});

module.exports = {
    request: async (functionName, data) => {
        var params = {
            FunctionName: functionName,
            Payload: JSON.stringify(data)
        }
        let result = await lambda.invoke(params).promise()
        
        return JSON.parse(result.Payload)
    }
}