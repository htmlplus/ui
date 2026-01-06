export type PlusBrowseError = {
    type: 'min' | 'max';
    message: string;
};
export type PlusBrowseFileError = {
    type: 'accept' | 'min' | 'max';
    message: string;
};
export type PlusBrowseFile = {
    errors: PlusBrowseFileError[];
    file: File;
};
export type PlusBrowseEvent = {
    error?: PlusBrowseError;
    files: PlusBrowseFile[];
};
