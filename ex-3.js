//  Start coding here
class FacebookWeb {
  constructor(username, name) {
    this.username = username;
    this.name = name;
  }
}
class Content extends FacebookWeb {
  constructor(username, name, postContent, comment) {
    super(username, name, postContent, comment);
    this.postContent = postContent;
    this.comment = comment;
  }
  clickShare() {}
  postComment() {
    console.log(this.postComment);
  }
  clickLike() {}
}

class Community extends FacebookWeb {
  constructor(username, name, page, group) {
    super(username, name, page, group);
    this.page = page;
    this.group = group;
  }
  createPage() {}
  createGroup() {}
}

class Notification extends Facebook {
  constructor(username, name, notificationMessage) {
    super(username, name, notificationMessage);
    this.notificationMessage = notificationMessage;
  }
  sendNotification() {
    console.log("");
  }
}
