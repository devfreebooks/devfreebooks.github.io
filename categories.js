const fs = require('fs-extra');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');
const CATEGORIES_DIR = path.join(PUBLIC_DIR, '_categories');
const output = { index: { categories: [] } };

console.log('Generating categories pages');

fs.readdirSync(CATEGORIES_DIR).forEach((file) => {
  const categoryName = file.replace('.json', '');
  const categoryJSONPath = path.join(CATEGORIES_DIR, file);
  const newCategoryPath = path.join(PUBLIC_DIR, categoryName);
  const newCategoryJSONPath = path.join(newCategoryPath, '_data.json');
  const newCategoryJADEPath = path.join(newCategoryPath, 'index.jade');
  fs.emptyDirSync(newCategoryPath);
  fs.copySync(categoryJSONPath, newCategoryJSONPath);
  fs.writeFileSync(newCategoryJADEPath, '!= partial("../_shared/thumb_books")', 'utf8');
  output.index.categories.push(categoryName);
});

const categoriesPath = path.join(PUBLIC_DIR, '_data.json');
fs.removeSync(categoriesPath);
fs.writeJsonSync(categoriesPath, output);

console.log('Categories generated successfully!');
