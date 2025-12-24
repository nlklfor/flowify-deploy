import type { TrackType } from "@/interfaces/tracks";

interface getTracksType {
  data: TrackType[];
}

interface getTrackLyricsType {
  data: TrackType;
}

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) return undefined;
  return {
    "api-key": apiKey,
  };
};

export const getTracks = () => {
  const promise: Promise<getTracksType> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: prepareHeaders(),
    }
  ).then((response) => response.json());

  return promise;
};

export const getTrackLyrics = (selectedTrackId: string) => {
  const promise: Promise<getTrackLyricsType> = fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`,
    {
      headers: prepareHeaders(),
    }
  ).then((response) => response.json());

  return promise;
};
