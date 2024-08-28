import { NextResponse } from "next/server";
import prisma from "./prisma";
import bcrypt from "bcrypt";

export const verifyUser = async (email: string, hasedPassword: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user) {
    const isEqual = await bcrypt.compare(user.password, hasedPassword);

    if (isEqual) {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    } else {
      return null;
    }
  } else {
    return null;
  }
};
