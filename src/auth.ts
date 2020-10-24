export interface Token {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
  scope?: string;
  refresh_token_expires_in?: number;
}

export interface TokenRequest {
  grant_type: string;
  refresh_token?: string;
  access_type?: string;
  code?: string;
  client_id: string;
  redirect_uri?: string;
}
