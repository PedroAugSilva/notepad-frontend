import React, { useState } from "react";
import Home from "../home";
import { Container, Input, Buttons } from "./style";
import SettingsApp from "../../components/SettingsApp";
import { AnimatePresence } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditAccount = ({ setThemeSelected, themeSelected }) => {
  const { user, editUser } = useAuth();
  const [ id, setId ] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  useEffect(() => {
    setId(user[0] ? user[0]._id : "loading...")
    setName(user[0] ? user[0].name : "loading...");
    setEmail(user[0] ? user[0].email : "loading...");
    setPassword(user[0] ? user[0].password : "loading...");
  }, [user]);

  const navigate = useNavigate();

  const handleSave = async () => {
        await editUser(id, name, email, password)
  }

  return (
    <Home setThemeSelected={setThemeSelected} themeSelected={themeSelected}>
      <Container layout>
        <AnimatePresence>
          <SettingsApp backTo='/home/settings'>
            <Input
              placeholder="Name..."
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email..."
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password..."
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Buttons>
                <button className="Cancel" onClick={() => navigate('/home/settings')}>Cancel</button>
                <button className="Save" onClick={handleSave}>Save</button>
            </Buttons>
          </SettingsApp>
        </AnimatePresence>
      </Container>
    </Home>
  );
};

export default EditAccount;
