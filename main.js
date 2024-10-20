const {program} = require(`commander`);
const fs = require (`fs`);

program
.option (`-i, --input <path>`)
.option ('-o, --output <path>')
.option ('-d, --display');

program.parse();

const options = program.opts();
if (!options.input) {
    console.error ("Please, specify input file");
}

if (!fs.existsSync(options.input)) {
    console.error('Cannot find input file');
  }
  
  const inputData = fs.readFileSync(options.input, 'utf8');
  
  if (options.display) {
    console.log('Input Data:', inputData);
  }
  
  if (options.output) {
    fs.writeFileSync(options.output, inputData);
  }