import { getTrackLyrics } from "@/dal/api";
import type { TrackType } from "@/interfaces/tracks";
import { useState, useEffect } from "react";

export function useTrackDetails(selectedTrackId: string | null) {
    const [trackDetails, setTrackDetails] = useState<TrackType | null>(null)

    useEffect((() => {
        if (!selectedTrackId) {
            return;
        }
        getTrackLyrics(selectedTrackId).then((json) => setTrackDetails(json.data))
    }), [selectedTrackId])

    return { trackDetails }
}