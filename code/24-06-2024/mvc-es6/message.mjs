class Message {
  errLoadView() {
    return "Error loading view";
  }

  listenOn(port) {
    return `app listening at http://localhost:${port}/provinsi`;
  }

  sengajaError() {
    return Error("sengaja error");
  }
}

export default Message;
