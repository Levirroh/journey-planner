import { useState } from "react";
import Button from "../Components/Button";
import Arrow from "../Components/Arrow"

function Register() {
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);


  // user data
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [language, setLanguage] = useState("");
  const [currency, setCurrency] = useState("");
  const [wishCountry1, setWishCountry1] = useState("");
  const [wishCountry2, setWishCountry2] = useState("");
  const [wishCountry3, setWishCountry3] = useState("");
  const [travelType, setTravelType] = useState("");
  const [password, setPassword] = useState("");


  function changePage(operation: string) {
    if ((page <= 0 && operation == "previous") || (page > 2 && operation == "next")) return;
    if (operation == "previous") setPage(page - 1);
    else setPage(page + 1)
  }

  async function save() {
    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname, email,
          phone, birthdate,
          country, state,
          city, language,
          currency, wishCountry1,
          wishCountry2, wishCountry3,
          travelType, password
        }),
      });

      if (!response.ok) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }

      const data = await response.json();
      console.log("Login bem-sucedido:", data);
    } catch (err) {
      console.error("Erro:", err);
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <Arrow text="Voltar" href="/" />
      <div className="h-2/5 flex bg-blue-400 w-full items-center justify-center font-bold text-white text-6xl">
        <h1>PacknGo</h1>
      </div>
      <form className="h-3/5 bg-slate-200 w-full flex flex-col items-center justify-evenly">
        {page == 0 && (
          <div>
            <div>
              <h2>Crie sua conta</h2>
              <label>Nome completo:</label>
              <input name="fullName" />

              <label>Como gostaria de ser chamado?</label>
              <input name="nickname" />

              <label>Email:</label>
              <input name="email" type="email" />

              <label>Telefone (opcional):</label>
              <input name="phone" type="tel" />

              <label>Data de nascimento:</label>
              <input name="birthdate" type="date" />
            </div>
          </div>
        )}
        {page == 1 && (
          <div>
            <label>País:</label>
            <input name="country" />

            <label>Estado:</label>
            <input name="state" />

            <label>Cidade:</label>
            <input name="city" />

            <label>Idioma preferido:</label>
            <select name="language">
              <option>Português</option>
              <option>Inglês</option>
              <option>Espanhol</option>
            </select>

            <label>Moeda preferida:</label>
            <select name="currency">
              <option>BRL (R$)</option>
              <option>USD ($)</option>
              <option>EUR (€)</option>
            </select>
          </div>
        )}
        {page == 2 && (
          <div>
            <h2>Preferências de viagem (opcional)</h2>
            <label>Três países que gostaria de visitar:</label>
            <select name="wishCountry1"></select>
            <select name="wishCountry2"></select>
            <select name="wishCountry3"></select>

            <label>Tipo de viagem preferido:</label>
            <select name="travelType">
              <option>Lazer</option>
              <option>Negócios</option>
              <option>Aventura</option>
              <option>Cultural</option>
              <option>Gastronômica</option>
            </select>
          </div>
        )}

        {page == 3 && (
          <div>
            <label>Senha:</label>
            <input name="password" type="password" />

            <label>Confirmar senha:</label>
            <input name="confirmPassword" type="password" />
          </div>
        )}
        <div className="flex gap-5">
          {page > 0 && (
            <Button onClick={() => changePage("previous")} hoverColor="hover:bg-blue-400" text="Previous" />
          )}
          {page == 3 && (
            <Button onClick={save} text="Confirm" hoverColor="hover:bg-green-400" />
          )}
          {page != 3 && (
            <Button onClick={() => changePage("next")} text="Next" hoverColor="hover:bg-blue-400" />
          )}
        </div>
      </form>

    </div>
  )
}

export default Register
