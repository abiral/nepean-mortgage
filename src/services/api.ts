// Base API configuration and utilities
const API_HOST =
  import.meta.env.VITE_API_HOST ||
  "https://data.stage.nepeanmortgage.com.au/api";

export class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export class ApiService {
  private static baseUrl = API_HOST;

  private static async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    // Merge default headers with custom headers
    const defaultHeaders = {
      "Content-Type": "application/json",
    };

    const mergedHeaders = {
      ...defaultHeaders,
      ...options.headers,
    };

    const config: RequestInit = {
      ...options,
      headers: mergedHeaders,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new ApiError(
          `HTTP error! status: ${response.status}`,
          response.status
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }

      throw new ApiError(
        error instanceof Error ? error.message : "Network error occurred"
      );
    }
  }

  static async get<T>(
    endpoint: string,
    customHeaders?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "GET",
      headers: customHeaders,
    });
  }

  static async post<T>(
    endpoint: string,
    data?: unknown,
    customHeaders?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
      headers: customHeaders,
    });
  }

  static async put<T>(
    endpoint: string,
    data?: unknown,
    customHeaders?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
      headers: customHeaders,
    });
  }

  static async delete<T>(
    endpoint: string,
    customHeaders?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "DELETE",
      headers: customHeaders,
    });
  }
}
