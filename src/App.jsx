import Global from "./styles/global";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import { NoteProvider } from "./contexts/notes";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { AnimateSharedLayout } from "framer-motion";
import usePersistedState from "./hooks/usePersistedState";

function App() {
  const [themeSelected, setThemeSelected] = usePersistedState('theme',light);

  return (
    <ThemeProvider theme={themeSelected}>
      <AuthProvider>
        <NoteProvider>
          <AnimateSharedLayout>
            <RoutesApp
              setThemeSelected={setThemeSelected}
              themeSelected={themeSelected}
            />
            <Global />
          </AnimateSharedLayout>
        </NoteProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
