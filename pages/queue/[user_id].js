import Queue from '../../components/Queue';
import useOnQueueUpdated from '../../hooks/useOnQueueUpdated';
import { useSession } from 'next-auth/react'

export default function UserQueuePage({ userProfile }) {
  const { user_id } = userProfile
  let queue = useOnQueueUpdated({ user_id });
  const {status} = useSession();
  if (status != "authenticated") return;
  if (!queue) queue = []
	return (
			<Queue profile={userProfile} queue={queue} />
	)
}

export async function getServerSideProps(context) {
  const userProfile = {
    user_id: context.params.user_id,
    display_name: context.query.display_name,
    profile_pic_url: context.query.profile_pic_url,
  }
  return {
    props: { userProfile }
  }
}