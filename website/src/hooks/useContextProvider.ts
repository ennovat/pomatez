import { useContext } from "react";
import { ThemeContext, ViewportContext, NavContext } from "../contexts";

export const useContextProvider = () => {
	const { isDarkMode, themeToggler } = useContext(ThemeContext);

	const { isMenuOpen, toggleMenu } = useContext(NavContext);

	const { width } = useContext(ViewportContext);

	const isOnDesktop = width > 1024;

	return { isDarkMode, themeToggler, isOnDesktop, isMenuOpen, toggleMenu };
};
