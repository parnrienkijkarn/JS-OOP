class Notification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}
class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
    this.email = receiver;
  }
}

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
    this.phoneNumber = receiver;
  }
}

const person1 = new EmailNotification(
  "1",
  "Sep 15, 2022",
  "Darmuscus",
  "parn.rien@gmail.com"
);

person1.send();

const person2 = new SMSNotification(
  "2",
  "Sep 15, 2022",
  "Beirut",
  "0879316420"
);

person2.send();

// งง Syntax บรรทัดที่ 12-15 กับ 19-22