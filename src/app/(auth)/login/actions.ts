import { LoginFormData } from "@/lib/defenitions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export async function onSubmit(
  data: LoginFormData,
  router: ReturnType<typeof useRouter>
) {
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
    router.push("/dashboard");
  } catch (error) {
    console.error("Login error:", error);
    toast.error("An unexpected error occurred. Please try again.");
  }
}
