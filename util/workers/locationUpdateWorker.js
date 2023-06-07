import { Amplify } from "aws-amplify";
import awsExports from "../../aws-exports";
import locationUpdateQuery from "../queries/locationUpdateQuery";

Amplify.configure({ ...awsExports, ssr: true });

let latitude, longitude, user_id;

const updateLocation = async () => {
  if (!latitude || !longitude || !user_id) return
  await locationUpdateQuery({ latitude, longitude, user_id })
}

const init = async () => {
  console.log('starting location worker');

  updateLocation().catch(console.error);
  
  setInterval(() => {
    updateLocation().catch(console.error);
  }, 3000)
}

init();

addEventListener("message", (event) => {
  if (!event.data.latitude || !event.data.longitude || !event.data.user_id) return;
  latitude = event.data.latitude;
  longitude = event.data.longitude;
  user_id = event.data.user_id;
});
