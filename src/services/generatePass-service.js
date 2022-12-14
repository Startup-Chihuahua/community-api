const request = require('request');
const userData = require('../database/user-data');
const length = '16';

const generate = async (req,res) => {
    const [data] = await userData.getUsers();
    for (let x = 0; x < data.length; x++) {
        const element = data[x].user;
        request.get({
            url: 'https://api.api-ninjas.com/v1/passwordgenerator?length=' + length,
            headers: {
              'X-Api-Key': 'qG1FIj6LWs3u4X87AppDfh1srFidxP3scfYL52GZ'
            },
          },async function(error, response, body) {
            if(error){
                return console.error('Request failed:', error);
            }else if(response.statusCode != 200) {
                return console.error('Error:', response.statusCode, body.toString('utf8'));
            }else{
                try {
                    const newPass = JSON.parse(body).random_password;
                    console.log(`ID: ${element} - ${newPass}`);
                    await userData.setPassword(element, newPass);
                } catch (error) {
                    res.status(400).send({
                        status: "FAILED",
                        data: { error: error?.message || error }
                    });
                }
            }
          });
    }
    res.send({
        status: "OK",
        rowsModify: data.length
    });
};

module.exports = generate;
