import { Box, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';
import { useState, useCallback, useRef } from 'react';
import { wait } from '../util/helpers';
import TrackList from '../components/TrackList';
import searchTracksQuery from '@/util/queries/searchTracksQuery';
import { useSession } from 'next-auth/react';
import BodyColumn from '@/components/BodyColumn';
import Divider from '@/components/Divider';

export default function Search() {
	const [inCooldown, setInCooldown] = useState(false);
	const [tracks, setTracks] = useState([])
	const [value, setValue] = useState('');
	const [noMatches, setNoMatches] = useState(false);

	const valueRef = useRef();
	valueRef.current = value;

	const onChange = useCallback(async (event) => {
		setValue(event.target.value);

		if (inCooldown) return;

		setInCooldown(true);
		await wait(1000);
		setInCooldown(false);

		if (!valueRef.current.replace(/\s/g, '').length) {
			setTracks([]);
			setNoMatches(false);
			return;
		}
		const tracks = await searchTracksQuery({ queryString: valueRef.current });
		if (!valueRef.current) {
			setTracks([])
			return
		}
		if (!tracks.length) {
			setNoMatches(true);
		} else {
			setNoMatches(false);
		}

		setTracks(tracks);
	}, [inCooldown])


	const {status} = useSession();
  if (status != "authenticated") return;



	const clearSearch = async () => {
		setValue('')
		setTracks([])
		setNoMatches(false);
	}

	return (
		<>
			<BodyColumn fixed={true}>
				<SearchBar value={value} onChange={onChange} clearSearch={clearSearch} />
				<Divider />
			</BodyColumn>
			<Box sx={{pt: 10}}>
				<Box sx={{
					pt: 10,
					display: noMatches ? 'flex' : 'none',
					color: 'text.secondary',
					justifyContent: 'center',
					px: 2,
				}}>
					<Typography sx={{textAlign: 'center', maxWidth: 400, wordBreak: 'break-word'}} variant="h5">
						No search results for &apos;{value}&apos;
					</Typography>
				</Box>
				<TrackList tracks={tracks} />
			</Box>
		</>
	)
}