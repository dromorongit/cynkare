import mongoose from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL;
if (!MONGODB_URI) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const categorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  slug: { type: String, unique: true, required: true },
  image: { type: String, default: null },
}, { timestamps: true });

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

const staticCategories = [
  { name: 'Body Lotions', slug: 'body-lotions' },
  { name: 'Bath Soaps', slug: 'bath-soaps' },
  { name: 'Face Creams & Cleansers', slug: 'face-creams-cleansers' },
  { name: 'Perfumes', slug: 'perfumes' },
  { name: 'Hair & Accessories', slug: 'hair-accessories' },
];

async function main() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI as string);
  console.log('Connected to MongoDB');

  console.log('Seeding static categories...');

  for (const category of staticCategories) {
    try {
      const existing = await Category.findOne({ slug: category.slug });
      
      if (!existing) {
        await Category.create(category);
        console.log(`Created category: ${category.name}`);
      } else {
        console.log(`Category already exists: ${category.name}`);
      }
    } catch (error) {
      console.error(`Error processing category ${category.name}:`, error);
    }
  }

  console.log('Seeding completed!');
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });