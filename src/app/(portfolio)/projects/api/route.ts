import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await prisma.projects.findMany({
      where: {
        featured: true,
      },
    });
    return NextResponse.json({
      data: projects,
    });
  } catch (error) {
    return NextResponse.error();
  }
}
