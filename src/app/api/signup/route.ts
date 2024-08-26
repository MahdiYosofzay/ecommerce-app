import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import bcrypt from "bcrypt";
import { createSession } from "@/app/auth/_lib/session";

const prisma = new PrismaClient();

const SignupSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(6).max(32),
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const result = SignupSchema.safeParse(data);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Invalid input",
          errors: result.error.errors,
        },
        { status: 400 }
      );
    }

    const { name, email, password } = result.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    await createSession(user.id);
    return NextResponse.json(
      { message: "Signup successful!", userId: user.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "An error occured during signup." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
