import { NextRequest, NextResponse } from 'next/server';
import { Db } from 'mongodb';
import { mongoClient } from '@/lib/mongodb';

const staticCategories = [
  { name: 'Body Lotions', slug: 'body-lotions' },
  { name: 'Bath Soaps', slug: 'bath-soaps' },
  { name: 'Face Creams & Cleansers', slug: 'face-creams-cleansers' },
  { name: 'Perfumes', slug: 'perfumes' },
  { name: 'Hair & Accessories', slug: 'hair-accessories' },
  { name: 'Skincare Sets', slug: 'skincare-sets' },
];

async function getDatabase(): Promise<{ db: Db }> {
  await mongoClient.connect();
  const db = mongoClient.db();
  return { db };
}

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');

    if (secret !== 'cynkare-seed-2024') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const results = [];

    const { db } = await getDatabase();
    const categoriesCollection = db.collection('Category');

    for (const category of staticCategories) {
      try {
        const existing = await categoriesCollection.findOne({ slug: category.slug });

        if (!existing) {
          await categoriesCollection.insertOne({
            name: category.name,
            slug: category.slug,
            image: null,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
          results.push({ status: 'created', category: category.name });
        } else {
          results.push({ status: 'exists', category: category.name });
        }
      } catch (error) {
        results.push({ status: 'error', category: category.name, error: String(error) });
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: 'Seed failed' }, { status: 500 });
  }
}