import axios from 'axios';

// API base URL from environment variables or default to localhost
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Interface for login request data
interface LoginRequest {
  username: string;
  password: string;
}

// Interface for login response data
interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: number;
    username: string;
  };
}

/**
 * Sends a login request to the server
 * @param {LoginRequest} credentials - User login credentials
 * @returns {Promise<LoginResponse>} - Login response with token and user data
 */
export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  try {
    // Send POST request to the login endpoint
    const response = await axios.post<LoginResponse>(
      `${API_URL}/auth/login`,
      credentials
    );
    
    return response.data;
  } catch (error) {
    // Handle axios errors
    if (axios.isAxiosError(error) && error.response) {
      // Return the error message from the server
      throw new Error(error.response.data.message || 'Login failed');
    }
    
    // Generic error
    throw new Error('Network error. Please try again later.');
  }
};

/**
 * Function to set Authorization header with token for all future requests
 * @param {string} token - JWT token
 */
export const setAuthToken = (token: string | null): void => {
  if (token) {
    // Set the Authorization header for all future axios requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Remove the Authorization header
    delete axios.defaults.headers.common['Authorization'];
  }
};