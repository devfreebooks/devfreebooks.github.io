const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public/_categories');
const output = { index: { categories: [] } };

console.log('Generating categories');

fs.readdirSync(PUBLIC_DIR)
  .forEach((file) => {
    output.index.categories.push(file.replace('.json', ''));
  }
);

fs.writeFileSync(
  path.join(PUBLIC_DIR, '_data.json'),
  JSON.stringify(output),
  'utf8'
);

console.log('Categories generated successfully!');
