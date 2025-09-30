import { useState, useCallback } from "react";
import { ContactService } from "../services";
import type { IContactFormData } from "../services";

interface UseContactFormReturn {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  submitForm: (data: IContactFormData) => Promise<void>;
  resetForm: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = useCallback(
    async (data: IContactFormData) => {
      if (isSubmitting) return;

      setIsSubmitting(true);
      setError(null);

      try {
        const result = await ContactService.sendMessage(data);

        if (result.status === "success") {
          setIsSuccess(true);
        } else {
          throw new Error(result.message || "Failed to send message");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Failed to send message. Please try again.";
        setError(errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    },
    [isSubmitting]
  );

  const resetForm = useCallback(() => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  }, []);

  return {
    isSubmitting,
    isSuccess,
    error,
    submitForm,
    resetForm,
  };
};
