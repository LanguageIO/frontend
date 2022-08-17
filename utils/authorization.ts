import { IncomingMessage } from "http";
import jwt from "jsonwebtoken";
import { NextApiRequest } from "next";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

export type User = {
  id: string;
  name: string;
  email: string;
  surname: string;
  role: string;
}

export type MaybeAuthorized = {
  user: User | null;
}

export type Authorized = {
  registeredUser: User;
}

export async function authorize(cookies: { [key: string]: string }): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const authToken = cookies.auth_token;
    if (!authToken) return reject(new Error("No auth token"));
    
    jwt.verify(
      authToken,
      process.env.JWT_SECRET as string,
      (err: any, decoded: any) => {
        if (err) return reject(new Error("Invalid auth token"));
        
        resolve(decoded)
      }
    )
  })
}

export type AuthorizationResult = {
  authorized: boolean;
  user: User | null;
}

export async function checkAuthorization(
  req: NextApiRequest | (IncomingMessage & { cookies: NextApiRequestCookies })
): Promise<AuthorizationResult> {
  try {
    const decoded = await authorize(req.cookies);
    return {
      authorized: true,
      user: decoded as User
    }
  } catch (e) {
    return {
      authorized: false,
      user: null
    }
  }
}