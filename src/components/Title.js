import { Text } from "react-native";
import classNames from "classnames";

export function Title({ titleClassName, children }) {
  const classes = classNames(
    "text-3xl",
    "font-bold",
    "underline",
    "text-slate-900",
    "dark:text-pink",
    titleClassName
  );
  return <Text className={classes}>{children}</Text>;
}
