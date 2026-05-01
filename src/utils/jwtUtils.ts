export const generateJwtToken = async (jwt: any, payload: any) => {
  return await jwt.sign({
    ...payload,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // หมดอายุใน 24 ชม.
  });
};
