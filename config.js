// config.js
const getUrl = () => {
    const https_url = "http://192.168.1.103/project/trave_api";
    // const https_url = "https://medocargo.com/API";
    return https_url;
};
const getUrlImage = () => {
    const https_url = "http://192.168.1.103/project/traverWeb/public/";
    // const https_url = "https://medocargo.com/API";
    return https_url;
};

export const apiUrl = getUrl();
export const apiUrlImage = getUrlImage();
