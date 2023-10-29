import React from "react";
import { Moon, Sun } from "lucide-react";
import './index.css'

const ThemeToggler = () => {
  const [isDark, setIsDark] = React.useState<boolean>(false);
  const initialMount = React.useRef<boolean>(true);

  React.useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }
    document.body.classList.toggle("dark-theme-variables");
  }, [isDark]);
  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <>
      <button className="theme__toggler" onClick={handleDarkMode}>{isDark ? <Sun /> : <Moon />}</button>
    </>
  );
};

export default ThemeToggler;
