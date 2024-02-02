## E-comm Backend
 
  
 
## Description
 
Back end for an e-commerce site
 
## Table of Contents
 
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Credits](#credits)
- [Questions](#questions)
 
## Installation
 
1. First, ensure that you have Node.js and MySQL installed on your local machine. You can download Node.js from the official website (https://nodejs.org/en/download/) and MySQL from the official website (https://dev.mysql.com/downloads/).

2. Clone the repository to your local machine using the following command:
git clone https://github.com/acantu9/ecom-backend.git
3. Navigate to the project directory:
cd ecom-backend
4. Install the necessary dependencies using the following command:
npm install
5. Create a .env file in the root directory of the project and add the following environment variables:
DB_NAME='ecommerce_db'
DB_USER='your_mysql_username'
DB_PW='your_mysql_password'
6. Run the following command to initialize the database:

npx sequelize-cli db:create
7. Run the following command to seed the database:

npx sequelize-cli db:seed:all
8. Start the server by running the following command:

npm start
9. The server should now be running on port 3001. You can test the API endpoints using a tool like Postman or Insomnia.

10. To stop the server, press Ctrl + C in the terminal.

Note: Make sure to replace 'your_mysql_username' and 'your_mysql_password' with your actual MySQL username and password.
  
## License

This project is licensed under the MIT License.
 
## Contributing

Please note that this project does not accept contributions from external contributors at this time. We appreciate your interest, but we kindly ask that you refrain from submitting pull requests or opening issues for this project. 


If you have any suggestions or feedback, you can reach out to the project maintainer directly. Thank you for your understanding.

## Credits
[Blackbox Ai](blackbox.ai)
[Xpert Learning Assistant](https://bootcampspot.instructure.com/)

## Questions
 
For any questions, please contact me:
 
- GitHub: [acantu9](https://github.com/acantu9)
- Email: adrianaacantu@gmail.com
  
