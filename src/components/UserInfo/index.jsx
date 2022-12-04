import { FaUserAlt } from "react-icons/fa";
import { FiSettings as IoSettingsSharp } from "react-icons/fi";
import {
  Container,
  Button,
  NameLabel,
  ButtonConfig,
  ButtonsConfigArea,
  UserArea,
} from "./style";

import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const UserInfo =  () => {
  const { user } = useAuth(); 
  const navigate = useNavigate();
  return (
    <Container>
      <UserArea>
        <Button>
          <FaUserAlt />
        </Button>
        <NameLabel>{ user[0] !== undefined ? user[0].name : 'carregando...' }</NameLabel>
      </UserArea>
      <ButtonsConfigArea>
        <ButtonConfig onClick={() => navigate('/home/settings')}>
          <IoSettingsSharp />
        </ButtonConfig>
      </ButtonsConfigArea>
    </Container>
  );
};

export default UserInfo;
