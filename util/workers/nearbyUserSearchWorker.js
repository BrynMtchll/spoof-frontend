import { Amplify } from "aws-amplify";
import awsExports from "../../aws-exports";
import nearbyUserSearchQuery from '../queries/nearbyUserSearchQuery';

Amplify.configure({ ...awsExports, ssr: true });

let latitude, longitude;

const searchUsers = async () => {
  if (!latitude || !longitude) return;
  const nearbyUsers = await nearbyUserSearchQuery({latitude, longitude });
  postMessage(nearbyUsers);
}

const init = () => {
  console.log('starting nearby user search worker')

  setInterval(() => {
    searchUsers().catch(console.error);
  }, 3000);
}

init();

addEventListener("message", (event) => {
  if (!event.data.latitude || !event.data.longitude) return;
  latitude = event.data.latitude;
  longitude = event.data.longitude;
});
