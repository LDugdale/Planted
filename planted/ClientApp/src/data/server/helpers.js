import { checkStatus, parseJSON} from '../../services/responseService';
import { getToken } from '../../services/tokenService';
import { isSignedIn } from '../../services/userService';

const PATH_START = 'api/';

export const postData = (path, body) => {  
    return fetchData("POST", path, body);    
}

// export const postMultiPartData = (path, body) => {
//     const contentType = 'multipart/form-data; boundary=AaB03x';
//     return fetchData("POST", path, body, contentType);    
// }

export const getData = (path) => {
    return fetchData("GET", path);
}

const fetchData = async (method, path, body, contentType) => {

    const headers = getHeaders(contentType);

    return await new Promise( async (resolve, reject) =>{
        fetch(path, {
            method: method,
            headers,
            body: body,
        })
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => {
            resolve(data);
        }).catch((error) => {
            reject(error);
        }) 
    });
}

export const postMultiPartData = async (url, data) => {

    const headers = {
        // 'Accept': 'application/json',
        // 'Content-Type': 'multipart/form-data; boundary=AaB03x'
    }

    if (isSignedIn()) {
        headers['Authorization'] = "Bearer " + getToken()
    }

    
    let options = {
      headers,
      method: 'POST',
    };
  
    options.body = new FormData();
    for (let key in data) {
      options.body.append(key, data[key]);
    }
  
    return fetch(url, options)
        .then(response => {
          return response.json()
            .then(responseJson => {
              //You put some checks here
              return responseJson;
            });
        });
  }

const getHeaders = (contentType) => {
    
    const headers = {
        // 'Accept': 'application/json',
        // 'Content-Type': contentType ? contentType : 'application/json' 
    }

    if (isSignedIn()) {
        headers['Authorization'] = "Bearer " + getToken()
    }

    return headers;
}
