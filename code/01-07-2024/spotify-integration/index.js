const express = require("express");
const axios = require("axios");
const querystring = require("querystring");
const crypto = require("crypto");
const app = express();
const port = 3000;

const clientId = "5d5b806550f5404ea50ba9602cea559a";
const redirectUri = "http://localhost:3000/callback";

let codeVerifier;
let codeChallenge;

const base64urlencode = (buffer) => {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

const generateCodeChallenge = (codeVerifier) => {
  const hashed = crypto.createHash("sha256").update(codeVerifier).digest();
  return base64urlencode(hashed);
};

app.get("/login", (request, response) => {
  codeVerifier = crypto.randomBytes(32).toString("hex");
  codeChallenge = generateCodeChallenge(codeVerifier);
  const scope = "user-read-private user-read-email";
  const authUrl =
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
    });
  response.redirect(authUrl);
});

app.get("/callback", async (request, response) => {
  const code = request.query.code;
  try {
    const response_ = await axios.post(
      "https://accounts.spotify.com/api/token",
      querystring.stringify({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: codeVerifier,
      }),
      {
        headers: {
          "Content-Type": "applicaton/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = response_.data.access_token;

    const userResponse = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    response.send(userResponse.data);
  } catch (error) {
    response.send("Error retrieving access token");
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/login`);
});
