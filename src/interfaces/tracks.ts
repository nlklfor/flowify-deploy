export interface TrackAttachments {
    url: string;
}

export interface TrackAttributes {
    title: string,
    likesCount?: number,
    lyrics?: string,
    attachments: TrackAttachments[],
}

export interface TrackType {
    id: string,
    attributes: TrackAttributes,
}