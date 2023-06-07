import { Amplify } from "aws-amplify";
import queueUpdateQuery from "../queries/queueUpdateQuery";
import awsExports from "../../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });


const updateQueue = async () => {
  const queue = await queueUpdateQuery();
  postMessage(queue);
}

const init = async () => {
  console.log('starting queue worker');

  updateQueue();

  setInterval(() => {
    updateQueue();
  }, 5000)
}

init().catch(console.error);