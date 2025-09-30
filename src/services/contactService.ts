import { ApiService } from "./api";

export interface IContactFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  hToken?: string;
}

export interface ContactApiResponse {
  status: string;
  message: string;
}

export class ContactService {
  /**
   * Send contact form data to the API
   */
  static async sendMessage(
    data: IContactFormData
  ): Promise<ContactApiResponse> {
    const payload: IContactFormData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
    };

    // Include message if provided
    if (data.message) {
      payload.message = data.message;
    }

    // Prepare headers with hCaptcha token if provided
    const headers: Record<string, string> = {};
    if (data.hToken) {
      headers["X-HCaptcha-Token"] = data.hToken;
    }

    return ApiService.post<ContactApiResponse>("/send-mail", payload, headers);
  }
}
