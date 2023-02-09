export type BrowseError = 'MIN' | 'MAX';
export type BrowseFileError = 'ACCEPT' | 'MIN_SIZE' | 'MAX_SIZE';
export interface BrowseFile {
    errors?: Array<BrowseFileError>;
    file?: File;
}
export interface BrowseEvent {
    errors?: Array<BrowseError>;
    files?: Array<BrowseFile>;
}
