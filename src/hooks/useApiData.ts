import { useState, useEffect } from "react";
import type { ApiResponse } from "../types/api";

const API_URL = "http://localhost/mortgage/index.php";
const STORAGE_KEY = "mortgage_api_data";
const REFETCH_INTERVAL = 5;

export const useApiData = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const apiData: ApiResponse = await response.json();

      localStorage.setItem(STORAGE_KEY, JSON.stringify(apiData));
      setData(apiData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch data";
      setError(errorMessage);
      console.error("API fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadFromStorage = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedData: ApiResponse = JSON.parse(stored);
        setData(parsedData);
        return true;
      }
    } catch (err) {
      console.error("Error loading from localStorage:", err);
    }
    return false;
  };

  useEffect(() => {
    const hasStoredData = loadFromStorage();

    if (!hasStoredData) {
      fetchData();
    } else {
      setLoading(false);
      fetchData();
    }

    const interval = setInterval(() => {
      fetchData();
    }, REFETCH_INTERVAL * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const refreshData = () => {
    fetchData();
  };

  return {
    data,
    loading,
    error,
    refreshData,
  };
};
