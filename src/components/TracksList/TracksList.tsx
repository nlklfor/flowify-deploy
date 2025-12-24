import './TracksList.css'
import { TrackItem } from "../TrackItem/TrackItem";
import { useTracksList } from "@/bll/useTracksList";

interface TracksListProps {
    onSelectedTrackId: (id: string | null) => void;
    selectedTrackId: string | null;
}

export function TracksList({ onSelectedTrackId, selectedTrackId }: TracksListProps) {

    const { tracks, onReset } = useTracksList(onSelectedTrackId);

    if (!tracks) return <h2>Loading...</h2>;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>

            <button onClick={onReset} className="reset-btn">Reset</button>
            <hr />
            <ul className="tracks-list">
                {tracks.map((track) => (
                    <TrackItem
                        key={track.id}
                        id={track.id}
                        track={track}
                        selectedTrackId={selectedTrackId}
                        onSelectedTrackId={onSelectedTrackId}
                    />
                ))}
            </ul>
        </div>
    )
}