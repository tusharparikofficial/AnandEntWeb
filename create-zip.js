const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const output = fs.createWriteStream('project.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('Project has been zipped successfully.');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Add the source files to the zip
archive.directory('src/', 'src');
archive.file('package.json', { name: 'package.json' });
archive.file('index.html', { name: 'index.html' });
archive.file('vite.config.ts', { name: 'vite.config.ts' });
archive.file('tsconfig.json', { name: 'tsconfig.json' });
archive.file('tsconfig.app.json', { name: 'tsconfig.app.json' });
archive.file('tsconfig.node.json', { name: 'tsconfig.node.json' });
archive.file('postcss.config.js', { name: 'postcss.config.js' });
archive.file('tailwind.config.js', { name: 'tailwind.config.js' });
archive.file('eslint.config.js', { name: 'eslint.config.js' });

archive.finalize();