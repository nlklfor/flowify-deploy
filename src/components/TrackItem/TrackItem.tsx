import './TrackItem.css'
import type { TrackType } from "@/interfaces/tracks"

interface TrackItemProps {
    track: TrackType,
    id: string,
    selectedTrackId: string | null,
    onSelectedTrackId: (id: string) => void;
}


export function TrackItem({ track, selectedTrackId, onSelectedTrackId, id }: TrackItemProps) {
    return (
        <li
            className={`track-item ${selectedTrackId === track.id ? "selected" : ""}`}
            onClick={() => onSelectedTrackId(track.id)}
            key={id}
        >
            <div className="track-title">
                {track.attributes.title}
            </div>

            <audio
                className="track-audio"
                controls
                src={track.attributes.attachments[0].url}
            />
        </li>
    )
}