export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = encodeURIComponent("http://localhost:3000/");
const clientId = "27fcc8e98cf840fc8125e3925443640d";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const getTokenFromUrl = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");
    return code
  };

  export const loginUrl =  `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`;