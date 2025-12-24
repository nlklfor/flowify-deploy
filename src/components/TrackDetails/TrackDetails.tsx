import './TrackDetails.css'
import { useTrackDetails } from "@/bll/useTrackDetails";

interface TracksDetailsProps {
    selectedTrackId: string | null;
}

export function TrackDetails({ selectedTrackId }: TracksDetailsProps) {

    const { trackDetails } = useTrackDetails(selectedTrackId);


    return (
        <div className="track-details">
            <h2>Track Details</h2>

            {!selectedTrackId && <p>The track is not selected</p>}

            {trackDetails && selectedTrackId && trackDetails.id !== selectedTrackId && (
                <p>Loading...</p>
            )}

            {trackDetails && trackDetails.id === selectedTrackId && (
                <ul>
                    <li>
                        <strong>Title:</strong> {trackDetails.attributes.title || "There is no title"}
                    </li>
                    <li>
                        <strong>Lyrics:</strong> {trackDetails.attributes.lyrics || "There is no lyrics"}
                    </li>
                </ul>
            )}
        </div>
    )
}