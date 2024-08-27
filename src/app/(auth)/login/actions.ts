import { LoginFormData } from "@/lib/defenitions";
import { toast } from "sonner";

export async function onSubmit(data: LoginFormData) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.message || "An error occurred during login");
      return;
    }

    toast.success("Welcome Back!");
  } catch (error) {
    console.error("Login error:", error);
    toast.error("An unexpected error occurred. Please try again.");
  }
}
