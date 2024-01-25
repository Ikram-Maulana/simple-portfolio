import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const data = await prisma.projects.findMany();

  return NextResponse.json(data);
}
