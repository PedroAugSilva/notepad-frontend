import React from "react";
import Home from "../home";
import { Container } from "./style";
import SettingsItems from "../../components/SettingsItem";
import ThemeSelector from "../../components/ThemeSelector";
import SettingsApp from "../../components/SettingsApp";
import { AnimatePresence } from "framer-motion";

const Settings = ({ setThemeSelected, themeSelected }) => {
  
  return (
    <Home setThemeSelected={setThemeSelected} themeSelected={themeSelected} >
      <Container layout>
        <AnimatePresence>
          <SettingsApp backTo='/home'>
            <SettingsItems opition="Account settings" />
            <SettingsItems opition="Theme">
              <AnimatePresence>
                <ThemeSelector
                  setThemeSelected={setThemeSelected}
                  themeSelected={themeSelected}
                />
              </AnimatePresence>
            </SettingsItems>
            <SettingsItems opition="Log out" />
          </SettingsApp>
        </AnimatePresence>
      </Container>
    </Home>
  );
};

export default Settings;
