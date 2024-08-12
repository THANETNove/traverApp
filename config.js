// config.js
const getUrl = () => {
    const https_url = "http://localhost/project/trave_api";
    // const https_url = "https://medocargo.com/API";
    return https_url;
};
const getUrlImage = () => {
    const https_url = "http://localhost/project/traverWeb/public/";
    // const https_url = "https://medocargo.com/API";
    return https_url;
};

export const apiUrl = getUrl();
export const apiUrlImage = getUrlImage();
