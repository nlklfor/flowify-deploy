import { TrackDetails } from './components/TrackDetails/TrackDetails'
import { TracksList } from './components/TracksList/TracksList'
import './MainPage.css'
import { useTrackSelect } from './bll/useTrackSelect'

export function MainPage() {

  const { onSelectedTrackId, selectedTrackId } = useTrackSelect();
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px'
      }}>
        <TracksList selectedTrackId={selectedTrackId} onSelectedTrackId={onSelectedTrackId} />
        <TrackDetails selectedTrackId={selectedTrackId} />
      </div>
    </>
  )
}
