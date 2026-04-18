import * as icons from 'lucide-react';
import fs from 'fs';

const keys = Object.keys(icons).filter(k => 
  k.toLowerCase().includes('github') || 
  k.toLowerCase().includes('linkedin') || 
  k.toLowerCase().includes('mail')
);

fs.writeFileSync('icons.txt', keys.join('\n'));
