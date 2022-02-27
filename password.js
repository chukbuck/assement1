const { stringify } = require('querystring');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter your password", function(input){
	tokens = input.split('');
	
const str = (input);

if (input {str.length}) >= 10 {
console.log(`Success!`);
} if (input {str.length}) < 10 { 
    console.log('Failure')
}
	reader.close()
});


