import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const banners = await prisma.banner.findMany({
    include: { author: true, prompt: true },
  });
  return NextResponse.json(banners);
}


export async function POST(req) {
  const { title, description, link, authorId, promptId } = await req.json();
  const banner = await prisma.banner.create({
    data: { title, description, link, authorId, promptId },
  });
  return NextResponse.json(banner);
}

