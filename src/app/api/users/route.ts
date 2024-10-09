import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const users = await prisma.user.findMany({
    include: { banners: true },
  });
  return NextResponse.json(users);
}

export async function POST(req) {
  const { email, name, company, category } = await req.json();
  const user = await prisma.user.create({
    data: { email, name, company, category },
  });
  return NextResponse.json(user);
}

