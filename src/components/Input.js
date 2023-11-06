import classNames from 'classnames';
import { TextInput } from 'react-native';

export function Input({ labelChildren, ...rest }) {
  return (
    <TextInput
      aria-label={labelChildren}
      placeholder={labelChildren}
      type="text"
      {...rest}
      className={classNames(
        `bg-gray-50 border border-gray-300 text-gray-900
          mb-6 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
        rest.inputClassName,
      )}
    />
  );
}
