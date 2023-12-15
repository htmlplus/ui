export declare enum BrowseError {
    Min = "MIN",
    Max = "MAX"
}
export declare enum BrowseFileError {
    Accept = "ACCEPT",
    Min_Size = "MIN_SIZE",
    Max_Size = "MAX_SIZE"
}
export interface BrowseFile {
    errors?: Array<BrowseFileError>;
    file?: File;
}
export interface BrowseEvent {
    errors?: Array<BrowseError>;
    files?: Array<BrowseFile>;
}
