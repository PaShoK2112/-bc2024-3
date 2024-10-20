const { program } = require('commander');
const fs = require('fs');

program
  .option('-i, --input <path>', 'Input file path')
  .option('-o, --output <path>', 'Output file path')
  .option('-d, --display', 'Display input data');

program.parse();

const options = program.opts();


if (!options.input) {
  console.error("Please, specify input file");
  process.exit(1);
}

if (!fs.existsSync(options.input)) {
  console.error('Cannot find input file');
  process.exit(1);
}

try {

  const inputData = fs.readFileSync(options.input, 'utf8');
  const jsonData = JSON.parse(inputData);


  let minValue = Infinity;
  let minAsset = null;

  jsonData.forEach(asset => {
    if (asset.value < minValue) {
      minValue = asset.value;
      minAsset = asset;
    }
  });


  const result = `${minAsset.txt}:${minAsset.value}`;

 
  if (options.display) {
    console.log(result);
  }


  if (options.output) {
    fs.writeFileSync(options.output, result);
  } else {
    console.log(result);
  }
} catch (error) {
  console.error('Error reading or processing file:', error);
}