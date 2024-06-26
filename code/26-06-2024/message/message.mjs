class Message {
  errLoadView() {
    return "Error loading view";
  }

  listenOn(port) {
    return `app listening at http://localhost:${port}`;
  }
}

export default Message;
