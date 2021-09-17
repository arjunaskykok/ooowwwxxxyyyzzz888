import consumer from "./consumer"

consumer.subscriptions.create({ channel: "ReviewsChannel" }, {
  received(data) {
    const container = document.body;
    const refreshEvent = new Event("refresh");
    const refreshDispatch = () => container.dispatchEvent(refreshEvent);

    refreshDispatch();
  },
})
