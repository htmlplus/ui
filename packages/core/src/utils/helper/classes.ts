import * as Case from 'case';

export const classes = (...input): string => {

  const names = [];

  for (let i = 0; i < input.length; i++) {

    const element = input[i];

    const type = Object.prototype.toString.call(element);

    switch (type) {

      case '[object Array]':
        names.push(classes(element));
        break;

      case '[object Object]':

        const keys = Object.keys(element);

        for (let i = 0; i < keys.length; i++) {

          const key = keys[i];

          const value = element[key];

          const name = Case.kebab(key);

          const type = Object.prototype.toString.call(value);

          switch (type) {

            case '[object Boolean]':
              value && names.push(`${name}`);
              break;

            case '[object Number]':
              names.push(`${name}-${value}`);
              break;

            case '[object String]':

              switch (value) {

                case '':
                case 'true':
                  names.push(`${name}`);
                  break;

                case 'false':
                  break;

                default:
                  names.push(`${name}-${value}`);
                  break;
              }

              break;
          }
        }

        break;

      case '[object String]':
        names.push(element);
        break;
    }
  }

  return names.join(' ');
};