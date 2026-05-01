import { t } from "elysia";

export const AuthenticationRequestModel = t.Object({
  code: t.String(),
});
export const TokenRequestModel = t.Object({
  token: t.String(),
});

export interface AuthenticationProps {
  code: string;
}

export interface TokenRequestProps {
  token: any;
}

export interface DecodedToken {
  userId: string;
  cmuitaccount: string;
  iat: number;
  exp: number;
}
