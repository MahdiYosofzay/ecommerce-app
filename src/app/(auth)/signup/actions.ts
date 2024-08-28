import { SignupFormData } from "@/lib/defenitions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export async function onSubmit(
  data: SignupFormData,
  router: ReturnType<typeof useRouter>
) {
  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.message || "An error occurred during signup.");
      return;
    }

    toast.success("Account created successfully!");
    router.push("/dashboard");
  } catch (error) {
    console.error("Signup error:", error);
    toast.error("An unexpected error occurred. Please try again.");
  }
}
