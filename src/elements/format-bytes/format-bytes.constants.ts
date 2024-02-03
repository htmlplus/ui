export const FORMAT_BYTES_STANDARD = {
  METRIC: {
    base: 1000,
    unit: 'bytes',
    units: [
      ['B', ''],
      ['kB', 'kilo'],
      ['MB', 'mega'],
      ['GB', 'giga'],
      ['TB', 'tera'],
      ['PB', 'peta'],
      ['EB', 'exa'],
      ['ZB', 'zetta'],
      ['YB', 'yotta']
    ]
  },
  METRIC_OCTET: {
    base: 1000,
    unit: 'octets',
    units: [
      ['o', ''],
      ['ko', 'kilo'],
      ['Mo', 'mega'],
      ['Go', 'giga'],
      ['To', 'tera'],
      ['Po', 'peta'],
      ['Eo', 'exa'],
      ['Zo', 'zetta'],
      ['Yo', 'yotta']
    ]
  },
  IEC: {
    base: 1024,
    unit: 'bytes',
    units: [
      ['B', ''],
      ['KiB', 'kibi'],
      ['MiB', 'mebi'],
      ['GiB', 'gibi'],
      ['TiB', 'tebi'],
      ['PiB', 'pebi'],
      ['EiB', 'exbi'],
      ['ZiB', 'zebi'],
      ['YiB', 'yobi']
    ]
  },
  IEC_OCTET: {
    base: 1024,
    unit: 'octets',
    units: [
      ['o', ''],
      ['Kio', 'kibi'],
      ['Mio', 'mebi'],
      ['Gio', 'gibi'],
      ['Tio', 'tebi'],
      ['Pio', 'pebi'],
      ['Eio', 'exbi'],
      ['Zio', 'zebi'],
      ['Yio', 'yobi']
    ]
  }
};
