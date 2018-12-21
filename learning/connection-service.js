const axios = require('axios');
const querystring = require('querystring');

const HEADER_PROPERTIES  = {
    CONTENT_TYPE : 'Content-Type'
}
const CONTENT_TYPE = {
    FORM_DATA : 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA : 'multipart/form-data',
    JSON_APPLICATION : 'application/json'
}

class RestClient{


    get(url, param, header) {
        header = header || {};

        return executeRequest(url, 'get', param, null, header);
    }

    post(url, param, body, header) {
        header = header || {};
        header[HEADER_PROPERTIES.CONTENT_TYPE] = CONTENT_TYPE.JSON_APPLICATION;

        return executeRequest(url, 'post', param, body, header);
    }

    put(url, param, body, header) {
        header = header || {};
        header[HEADER_PROPERTIES.CONTENT_TYPE] = CONTENT_TYPE.JSON_APPLICATION;

        return executeRequest(url, 'put', param, body, header);
    }
}

const executeRequest = (url, method, param, data, headers)=>{
    param = querystring.stringify(param || {}); // convert param json to query param.
    return axios({
        method: method,
        url: url + '?' + param,
        data : data,
        headers : headers
    }).then(
        response => {
            return response;
        },
        err =>{
            throw err.response;
        }
    )
}

module.exports = new RestClient();