"use client";

import React, { useContext, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

type ThemeMode = "dark" | "light";

type Store = {
	mode: ThemeMode;
	toggleMode: () => void;
	setMode: (themeMode: ThemeMode) => void;
};

const DefaultStore: Store = {
	mode: "light",
	toggleMode: () => {},
	setMode: () => {},
};

const Context = React.createContext<Store>(DefaultStore);

interface Props {
	children: React.ReactNode;
}
const ThemeProvider = ({ children }: Props) => {
	const [themeMode, setTheme] = useLocalStorage("theme", DefaultStore.mode);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	const setThemeMode = (themeMode: ThemeMode) => {
		setTheme(themeMode);
	};

	useEffect(() => {
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(themeMode);
	}, [themeMode]);

	const store: Store = { mode: themeMode, toggleMode: toggleTheme, setMode: setThemeMode };

	return <Context.Provider value={store}>{children}</Context.Provider>;
};

const useTheme = () => useContext(Context);

export { ThemeProvider, useTheme };
