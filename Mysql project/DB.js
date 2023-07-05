const readline = require('readline');

const {createPool}=require("mysql2");


const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Jatin.Verma@7889230967",
    database: "jatin-1",
    connectionLimit: 10
})
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter the company ID
rl.question('Enter the company ID: ', (companyId) => {
  // Close the readline interface
  rl.close();

  // Perform the database query using the provided company ID
  pool.query(`SELECT userName FROM user WHERE companyid = ?`, [companyId], function(err, result, fields) {
    if (err) {
      return console.log(err);
    }
    console.log(result);
  });
});
