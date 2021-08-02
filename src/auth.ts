export interface Token {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
  scope?: string;
  refresh_token_expires_in?: number;
}

export interface TokenRequest {
  grant_type: 'authorization_code' | 'refresh_token';
  refresh_token?: string;
  access_type?: 'offline';
  code?: string;
  client_id: string;
  redirect_uri?: string;
  state?: string;
}
