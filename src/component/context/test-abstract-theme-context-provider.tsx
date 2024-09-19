import React, {
  ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

export interface Theme<T> {
  name: string;
  value: T;
}

interface TestAbstractThemeContextProviderProps<ThemeValue> {
  themes: Array<Theme<ThemeValue>>;
  defaultTheme: Theme<ThemeValue>;
  onThemeSelect: (
    selected: Theme<ThemeValue>,
    before?: Theme<ThemeValue>
  ) => void;
  children?: React.ReactNode;
}

export interface TestAbstractThemeContextProviderActions<ThemeValue> {
  theme: Theme<ThemeValue>;
  setTheme: (theme: string) => Theme<ThemeValue>;
}

export const TestAbstractThemeContext = React.createContext<
  TestAbstractThemeContextProviderActions<unknown>
>({} as TestAbstractThemeContextProviderActions<unknown>);

export const TestAbstractThemeContextProvider = <ThemeValue,>(
  props: TestAbstractThemeContextProviderProps<ThemeValue>
): ReactNode => {
  const [themeName, setThemeName] = useState<string>(props.defaultTheme.name);

  useLayoutEffect(() => {
    props.onThemeSelect(props.defaultTheme, undefined);
  }, [props]);

  const findThemeByName = useCallback(
    (themeName: string) => {
      return props.themes.find((theme) => {
        return theme.name === themeName;
      });
    },
    [props.themes]
  );

  const _setTheme = useCallback(
    (_themeName: string): Theme<ThemeValue> => {
      const currentTheme = findThemeByName(themeName)!;
      let newTheme = findThemeByName(_themeName) ?? props.defaultTheme;
      if (!newTheme) {
        newTheme = props.defaultTheme;
      }

      if (currentTheme.name === _themeName) {
        return currentTheme;
      } else {
        props.onThemeSelect(currentTheme, newTheme);
        setThemeName(newTheme.name);

        return newTheme;
      }
    },
    [findThemeByName, themeName, props]
  );

  const actions = useMemo<
    TestAbstractThemeContextProviderActions<ThemeValue>
  >(() => {
    return {
      theme: findThemeByName(themeName) ?? props.defaultTheme,
      setTheme: _setTheme,
    };
  }, [findThemeByName, themeName, props.defaultTheme, _setTheme]);

  return (
    <TestAbstractThemeContext.Provider value={actions}>
      {props.children}
    </TestAbstractThemeContext.Provider>
  );
};
