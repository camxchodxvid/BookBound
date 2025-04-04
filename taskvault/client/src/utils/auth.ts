import { setAuthToken } from '../api/authAPI';

// Key for storing token in localStorage
const TOKEN_KEY = 'taskflow_token';
const USER_KEY = 'taskflow_user';

// Define user type
interface User {
  id: number;
  username: string;
}

/**
 * AuthService class for managing authentication state
 */
class AuthService {
  /**
   * Checks if a token is present in localStorage
   * @returns {boolean} - True if user is logged in
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  /**
   * Sets the token in localStorage and configures axios
   * @param {string} token - JWT token
   */
  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
    setAuthToken(token);
  }

  /**
   * Gets the token from localStorage
   * @returns {string | null} - JWT token or null if not found
   */
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  /**
   * Stores user data in localStorage
   * @param {User} user - User object
   */
  setUser(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  /**
   * Gets user data from localStorage
   * @returns {User | null} - User object or null if not found
   */
  getUser(): User | null {
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;
    
    try {
      return JSON.parse(userStr);
    } catch (e) {
      return null;
    }
  }

  /**
   * Logs in a user by setting token and user data
   * @param {string} token - JWT token
   * @param {User} user - User object
   */
  login(token: string, user: User): void {
    this.setToken(token);
    this.setUser(user);
  }

  /**
   * Logs out a user by removing token and user data
   */
  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setAuthToken(null);
  }

  /**
   * Initializes the auth state when the app loads
   */
  initAuth(): void {
    const token = this.getToken();
    if (token) {
      // Set the auth token for axios requests
      setAuthToken(token);
    }
  }
}

// Create singleton instance
const authService = new AuthService();

export default authService;