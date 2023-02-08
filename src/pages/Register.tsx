import { gql } from "@apollo/client";
import { useState } from "react";
import { client } from "../lib/apollo";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const { data } = await client.query({
      query: gql`
        query MyQuery {
          subscribers {
            email
            password
          }
        }
      `,
      variables: { email, password },
    });
    const userPassword = data.subscribers.filter(
      (it: any) => it.password === password
    );
    const userEmail = data.subscribers.filter((it: any) => it.email === email);

    if (userPassword[0] && userEmail[0]) {
      navigate("/event");
      return;
    } else {
      alert("Email ou Senha inválido");
      return;
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Log in</button>
    </form>
  );
}
