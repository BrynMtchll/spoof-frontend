import { Amplify } from "aws-amplify";
import awsExports from "../../aws-exports";
import locationUpdateQuery from "../queries/locationUpdateQuery";

Amplify.configure({ ...awsExports, ssr: true });

let latitude, longitude;

const updateLocation = async () => {
  if (!latitude || !longitude) return
  await locationUpdateQuery({ latitude, longitude })
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
  if (!event.data.latitude || !event.data.longitude) return;
  latitude = event.data.latitude;
  longitude = event.data.longitude;
});
