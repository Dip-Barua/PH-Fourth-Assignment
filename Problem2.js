function sendNotification(email) {
    
    if (email.indexOf('@') === -1 || email.split('@').length !== 2) {
        return "Invalid Email";
    }
 
    let [username, domainname] = email.split('@');
    
    let notificationMessage = `${username} sent you an email from ${domainname}`;
    
    return notificationMessage;
}

console.log(sendNotification("zihad@gmail.com")); 
console.log(sendNotification("sadia8icloud.com")); 