import jwt from "jsonwebtoken";

export const generateJWt = (id: string, userName: string, userLastName: string) => {
  return jwt.sign(
    {id, userName, userLastName},
    process.env.SECRET_KEY,
    {expiresIn: '30d'}
  )
}