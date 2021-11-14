export type BrowseEventError = 'MIN' | 'MAX';

export type BrowseEventFileError = 'ACCEPT' | 'MIN_SIZE' | 'MAX_SIZE';

export interface BrowseEventFile {
  errors?: Array<BrowseEventFileError>;
  file?: File;
}

export interface BrowseEvent {
  errors?: Array<BrowseEventError>;
  files?: Array<BrowseEventFile>;
}