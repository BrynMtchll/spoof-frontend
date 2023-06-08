import Track from '@/components/Track';

export default function TrackList({ tracks }) {
  return (
    <>
      {
        tracks.map((track, i) => 
          <Track position={i+1} key={i} track={track} />
        )
      }
    </>
  )
}