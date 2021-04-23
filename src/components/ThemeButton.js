const ThemeButton = ({ theme, themeToggle }) => {
  return (
    <button className={`btn ${theme}btn`} onClick={themeToggle}>
      {theme}
    </button>
  );
};

export default ThemeButton;
