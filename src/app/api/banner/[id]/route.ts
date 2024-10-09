import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/PrismaDb';

export async function GET(req : NextRequest, { params }) {
  const banner = await prisma.banner.findUnique({
    where: { id: parseInt(params.id) },
    include: { author: true, prompt: true },
  });
  return NextResponse.json(banner);
}

export async function PUT(req : NextRequest, { params }) {
  const { title, description, link } = await req.json();
  const updatedBanner = await prisma.banner.update({
    where: { id: parseInt(params.id) },
    data: { title, description, link },
  });
  return NextResponse.json(updatedBanner);
}

export async function DELETE(req : NextRequest, { params }) {
  await prisma.banner.delete({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json({ message: 'Banner deleted successfully' });
}
