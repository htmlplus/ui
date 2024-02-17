export interface BrowseError {
    type: 'min' | 'max';
    message: string;
}
export interface BrowseFileError {
    type: 'accept' | 'min' | 'max';
    message: string;
}
export interface BrowseFile {
    errors?: Array<BrowseFileError>;
    file?: File;
}
export interface BrowseEvent {
    error?: BrowseError;
    files?: Array<BrowseFile>;
}
