import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req, { params }) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
    include: { banners: true },
  });
  return NextResponse.json(user);
}

export async function PUT(req, { params }) {
  const { email, name, company, category } = await req.json();
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data: { email, name, company, category },
  });
  return NextResponse.json(updatedUser);
}

export async function DELETE(req, { params }) {
  await prisma.user.delete({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json({ message: 'User deleted successfully' });
}

