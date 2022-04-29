/**
 * SocketIO Server
 */
const SOCKET_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? window.location.hostname
    : "http://localhost:4001";

/**
 * SocketIO event names
 */
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";


const config = {
  NEW_CHAT_MESSAGE_EVENT,
  SOCKET_SERVER_URL,
};

export default config;