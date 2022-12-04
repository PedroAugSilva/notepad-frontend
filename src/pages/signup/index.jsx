import React, { useState } from "react";
import Button from "../../components/ButtonLogin";
import {
  Container,
  LoginArea,
  Title,
  LabelArea,
  Text,
  Alert,
  Input
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth'


const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [confirmEmail, setConfirmEmail] = useState();
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

const handleRegisterButton = async () =>{
  if(!name | !email | !password | !confirmEmail){
    setError('Fill in all fields')
    return
  } else if(email !== confirmEmail){
    setError('The emails are not the same')
    return
  }
  const res = await signup(name, email, password);
  if(res){
    setError(res);
  } else {
  navigate('/')
}

}

  return (
    <Container>
      <LoginArea>
        <Title>Notepad</Title>
        <Input
          placeholder="Name..."
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email..."
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Email confirmation..."
          type="email"
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        <Input
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button Text="Register" onClick={handleRegisterButton}/>
        <LabelArea>
          <Text>already have an account?
            <Link to="/">Sign In</Link>

          </Text>
          
          
        </LabelArea>
        {error && (
          <Alert>{error}</Alert>
        )}
      </LoginArea>
    </Container>
  );
};

export default Signup;
