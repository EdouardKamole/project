"use server";
import { db } from "@/lib/db";

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
  role?: string;
}) {
  // TODO: hash password, create user via BetterAuth
}
