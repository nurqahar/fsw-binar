class Message {
  errLoadView() {
    return "Error loading view";
  }

  listenOn(port) {
    return `app listening on port: ${port}`;
  }
}

export default Message;
