import { ApiService } from "./api";
import type { ApiResponse } from "../types/api";

export class FeedService {
  /**
   * Fetch all feed data from the API
   */
  static async getFeeds(): Promise<ApiResponse> {
    return ApiService.get<ApiResponse>("/feeds");
  }
}
