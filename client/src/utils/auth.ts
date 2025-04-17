import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  id: number;
  username: string;
  exp: number;
}

class AuthService {
  // Get the decoded token (user info)
  getProfile(): DecodedToken | null {
    const token = this.getToken();
    return token ? jwtDecode<DecodedToken>(token) : null;
  }

  // Check if user is logged in
  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Check if token is expired
  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return true;
    }
  }

  // Get token from localStorage
  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  // Save token and redirect
  login(idToken: string): void {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Remove token and redirect
  logout(): void {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
