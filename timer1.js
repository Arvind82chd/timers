let inputV = process.argv.slice(2);
if (!inputV) {
  return;
} else {

  for (let input of inputV) {
        
    if (input !== NaN && input > 0) {
    
      setTimeout(() => process.stdout.write('\x07'), input * 1000);
    }
    
  } return;

}
