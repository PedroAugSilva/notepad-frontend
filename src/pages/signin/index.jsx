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
import useAuth from "../../hooks/useAuth";


const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const handleLoginButton = async () => {
    if(!name |!email | !password){
      setError('Fill in all fields')
      return;
    }
    const res = await signin(name, email, password);

    if(res){
      setError(res)
    } else {
      navigate('/home')
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
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button Text="Log In" onClick={handleLoginButton} />
        <LabelArea>
          <Text>Don't have an account yet?
            <Link to="/signup">Register</Link>

          </Text>
          
          
        </LabelArea>
        {error && (
          <Alert>{error}</Alert>
        )}
      </LoginArea>
    </Container>
  );
};

export default Signin;
