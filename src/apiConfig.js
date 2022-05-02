let APILink

const apiUrls = {
    production: "https://brie-app-server.herokuapp.com/",
    development: "https://brie-app-server.herokuapp.com/"
}

if (window.location.hostname === "localhost") {
    APILink = apiUrls.development
} else {
    APILink = apiUrls.production
}

export default APILink