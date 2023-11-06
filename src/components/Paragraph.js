import { Text } from 'react-native';
import classNames from 'classnames';

export function Paragraph({ paragraphClassName, children }) {
  return (
    <Text
      className={classNames(
        'text-base',
        'lg:text-lg',
        'pt-2',
        'pb-2',
        'text-slate-900',
        'dark:text-slate-100',
        'leading-relaxed',
        paragraphClassName,
      )}
    >
      {children}
    </Text>
  );
}
