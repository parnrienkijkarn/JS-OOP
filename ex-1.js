class EmailNotification {
  constructor(notificationId, createdTime, content, email) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.email = email;
  }

  send() {
    console.log(`Notification has been sent to ${this.email}`);
  }
}

const person1 = new EmailNotification(
  "1",
  "Sep 15, 2022",
  "Darmuscus",
  "parn.rien@gmail.com"
);
person1.send();
class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }

  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

const person2 = new SMSNotification(
  "2",
  "Sep 15, 2022",
  "Beirut",
  "0879316420"
);
person2.send();
