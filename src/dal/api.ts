import type { TrackType } from "@/interfaces/tracks"

interface getTracksType {
    data: TrackType[]
}

interface getTrackLyricsType {
    data: TrackType
}

export const getTracks = () => {
    const promise: Promise<getTracksType> =
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                "api-key": import.meta.env.VITE_API_KEY ,
            }
        }).then((response) => response.json())

    return promise;
}


export const getTrackLyrics = (selectedTrackId: string) => {
    const promise: Promise<getTrackLyricsType> =
        fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
            headers: {
                "api-key": import.meta.env.VITE_API_KEY,
            }
        }).then((response) => response.json())

    return promise
}