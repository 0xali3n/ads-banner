import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const prompts = await prisma.prompt.findMany({
    include: { author: true, banners: true },
  });
  return NextResponse.json(prompts);
}

export async function POST(req) {
  const { title, description, color_pallete, theme, eg_images, authorId } = await req.json();
  const prompt = await prisma.prompt.create({
    data: { title, description, color_pallete, theme, eg_images, authorId },
  });
  return NextResponse.json(prompt);
}

