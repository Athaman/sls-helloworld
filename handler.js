'use strict';

module.exports.hello = async event => {
  const name = event.pathParameters.name;
  const reply = `Greetings there ${name}`;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: reply
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
