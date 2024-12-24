import apiService from "./apiService";

class OAuth2Service {
    constructor(clientId, clientSecret, authBaseUrl, tokenEndpoint, redirectUri) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.authBaseUrl = authBaseUrl; // Base URL for the OAuth2 provider
        this.tokenEndpoint = tokenEndpoint; // Token endpoint
        this.redirectUri = redirectUri; // Redirect URI for authorization code flow
    }

    /**
     * Generates the OAuth2 authorization URL.
     * @param {string} responseType - "code" (Authorization Code) or "token" (Implicit).
     * @param {string} scope - Scope of access.
     * @param {string} state - Optional state parameter for CSRF protection.
     * @returns {string} - Authorization URL.
     */
    generateAuthUrl(responseType = "code", scope = "", state = "") {
        const params = new URLSearchParams({
            client_id: this.clientId,
            redirect_uri: this.redirectUri,
            response_type: responseType,
            scope,
            state,
        });
        return `${this.authBaseUrl}?${params.toString()}`;
    }

    /**
     * Exchanges an authorization code for an access token.
     * @param {string} code - Authorization code.
     * @returns {Promise<object>} - Access token response.
     */
    async exchangeAuthCodeForToken(code) {
        try {
            const data = {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                code,
                redirect_uri: this.redirectUri,
                grant_type: "authorization_code",
            };

            const response = await apiService.post(this.tokenEndpoint, data);
            return response;
        } catch (error) {
            throw new Error(`Failed to exchange auth code for token: ${error.message}`);
        }
    }

    /**
     * Refreshes the access token using a refresh token.
     * @param {string} refreshToken - The refresh token.
     * @returns {Promise<object>} - New access token response.
     */
    async refreshToken(refreshToken) {
        try {
            const data = {
                client_id: this.clientId,
                client_secret: this.clientSecret,
                refresh_token: refreshToken,
                grant_type: "refresh_token",
            };

            const response = await apiService.post(this.tokenEndpoint, data);
            return response;
        } catch (error) {
            throw new Error(`Failed to refresh token: ${error.message}`);
        }
    }
}

export default OAuth2Service;
