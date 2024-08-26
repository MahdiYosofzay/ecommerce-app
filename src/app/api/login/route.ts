import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import { createSession } from "@/app/auth/_lib/session";

const prisma = new PrismaClient();

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(32),
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const result = LoginSchema.safeParse(data);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Invalid input",
          errors: result.error.errors,
        },
        { status: 400 }
      );
    }

    const { email, password } = result.data;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid email or password.",
        },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    await createSession(user.id);

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "An error occurred during login." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
