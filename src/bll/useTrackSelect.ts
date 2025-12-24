import { useState } from "react";

export function useTrackSelect() {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

    const onSelectedTrackId = (id: string | null) => {
        setSelectedTrackId(id)
    }

    return { selectedTrackId, onSelectedTrackId }
}