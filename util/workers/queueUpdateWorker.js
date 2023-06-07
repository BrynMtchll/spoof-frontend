import { Amplify } from "aws-amplify";
import queueUpdateQuery from "../queries/queueUpdateQuery";
import awsExports from "../../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

let accessToken, user_id;

const updateQueue = async () => {
  if (!accessToken || !user_id) return
  const queue = await queueUpdateQuery({accessToken, user_id});
  postMessage(queue);
}

const init = async () => {
  console.log('starting queue worker');
  postMessage("session request")


  setInterval(() => {
    postMessage("session request")

    updateQueue();
  }, 5000)
}

init().catch(console.error);

addEventListener("message", (event) => {
  if (!event.data.accessToken || !event.data.user_id) return;
  accessToken = event.data.accessToken;
  user_id = event.data.user_id;
});