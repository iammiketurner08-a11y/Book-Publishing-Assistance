import fs from 'fs';
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/indigo/g, 'primary');
fs.writeFileSync(file, content);
console.log('Done');
