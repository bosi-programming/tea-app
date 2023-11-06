import { useState } from 'react';
import classNames from 'classnames';
import DropDownPicker from 'react-native-dropdown-picker';

export function Selector({ labelChildren, options, ...rest }) {
  const [open, setOpen] = useState(false);
  return (
    <DropDownPicker
      open={open}
      setOpen={setOpen}
      items={options}
      {...rest}
      className={classNames(
        `bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500`,
        rest.selectorClassName,
      )}
    />
  );
}
