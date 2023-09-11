import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";

interface IGenerateJWT {
  key: string;
  secret: string;
  username: string;
}

export const generateApiToken = ({ key, secret, username }: IGenerateJWT) => {
  const result = generateJWT({ key, secret, username });
  //   save the token to local storage
  return result;
};

function generateJWT({ key, secret, username }: IGenerateJWT) {
  var body = {
    uid: key,
    exp: Math.floor(new Date().getTime() / 1000) + 3600,
    iat: Math.floor(new Date().getTime() / 1000) - 10,
    username: username,
  };

  var header = {
    alg: "HS256",
    typ: "JWT",
  };
  var token = [];
  token[0] = base64url(JSON.stringify(header));
  token[1] = base64url(JSON.stringify(body));
  token[2] = genTokenSign({ token, secret });

  return token.join(".");
}

interface IGenTokenSign {
  token: string[];
  secret: string;
}

function genTokenSign({ token, secret }: IGenTokenSign) {
  if (token.length != 2) {
    return;
  }
  var hash = hmacSHA256(token.join("."), secret);
  var base64Hash = Base64.stringify(hash);
  return urlConvertBase64(base64Hash);
}

function base64url(input: any) {
  var base64String = btoa(input);
  return urlConvertBase64(base64String);
}

function urlConvertBase64(input: any) {
  var output = input.replace(/=+$/, "");
  output = output.replace(/\+/g, "-");
  output = output.replace(/\//g, "_");

  return output;
}
