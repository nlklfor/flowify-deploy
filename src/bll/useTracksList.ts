import { getTracks } from "@/dal/api";
import type { TrackType } from "@/interfaces/tracks";
import { useState, useEffect } from "react";

export function useTracksList(onSelectedTrackId: (id: string | null) => void) {
    const [tracks, setTracks] = useState<TrackType[] | null>(null);

    useEffect((() => {
        getTracks().then((json) => setTracks(json.data));
    }), [])

    const onReset = () => {
        onSelectedTrackId(null);
    }

    return { tracks, setTracks, onReset }

}