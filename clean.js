const fs = require('fs-extra');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');
const CATEGORIES_DIR = path.join(PUBLIC_DIR, '_categories');

console.log('Cleaning categories folders');

fs.readdirSync(CATEGORIES_DIR).forEach((file) => {
  const categoryName = file.replace('.json', '');
  const categoryPath = path.join(PUBLIC_DIR, categoryName);
  console.log(categoryPath);
  fs.removeSync(categoryPath);
});

console.log('Categories removed successfully!');
