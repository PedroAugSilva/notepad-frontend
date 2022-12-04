import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isCadastred, setIsCadastred] = useState(false);

  useEffect(() => {
    const consult = async  ( email ) => {
      const response = await api.get('/users');
      const users = response.data.users.filter((user) => user.email === email)
      setUser(users)
    }
    const hasUser = JSON.parse(localStorage.getItem('user_token'));
    if(hasUser){
      setIsCadastred(true);
      consult(hasUser[0].email)
    }
  }, [])

  const refresh = async (email) => {
    const response = await api.get('/users');
      const users = response.data.users.filter((user) => user.email === email)
      setUser(users)
  }

  const signin = async ( name, email, password ) => {
    const response = await api.get('/users');
    const hasUser = response.data.users.filter((user) => user.email === email);
    if (hasUser.length > 0 ) {
      if (
        hasUser[0].name === name &&
        hasUser[0].email === email &&
        hasUser[0].password === password
      ) {
        const token = Math.random().toString(8).substring(2);
        const userLogged = [
          {
            email: email,
            token: token,
          },
        ];
        localStorage.setItem("user_token", JSON.stringify(userLogged));
        setIsCadastred(true)
        setUser(hasUser)
      } else {
        return "Name, email or password are incorrect";
      }
    } else {
      return "User not found";
    }
  };
    
  

  const signup =  async (name, email, password) => {
    const response = await api.get("/users");
    const hasUser = response.data.users.filter((user) => user.email === email);
    if (hasUser?.length) {
      return "User already exists";
    } else {
      await api.post("/user", { name, email, password });
    }
  };

  const editUser = async ( id, name, email, password) => {
     await api.put(`/user/${id}`, { 
      name: name,
      email: email,
      password: password
    })
    refresh(user[0].email)
  }

  const deleteUser = async (id) => {
    await api.delete(`/user/${id}`);
  }

  const signout = () => {
    setUser(null);
    setIsCadastred(false)
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ isCadastred, user, signin, signup, signout, editUser, deleteUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
