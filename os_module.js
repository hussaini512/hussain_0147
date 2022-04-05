// os module
const os=require('os');
 const user=os.userInfo();
 console.log(user);
 console.log(`the system uptime is: ${os.uptime()} seconds`);
 function system(){
     console.log(os.type());
     console.log(os.hostname());
     console.log(os.release());
     console.log(os.freemem());
     console.log(os.totalmem());
 }
 system();
