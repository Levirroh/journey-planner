import { useState } from "react";
import Button from "../Components/Button";

function Register() {
  const [page, setPage] = useState(0);

  // user data
  const [nickname, setNickname] = useState(0);
  const [email, setEmail] = useState(0);
  const [phone, setPhone] = useState(0);
  const [birthdate, setBirthdate] = useState(0);
  const [country, setCountry] = useState(0);
  const [state, setState] = useState(0);
  const [city, setCity] = useState(0);
  const [language, setLanguage] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [wishCountry1, setWishCountry1] = useState(0);
  const [wishCountry2, setWishCountry2] = useState(0);
  const [wishCountry3, setWishCountry3] = useState(0);
  const [travelType, setTravelType] = useState(0);
  const [password, setPassword] = useState(0);

  function changePage(operation: string) {
    console.log(operation)
    if ((page <= 0 && operation == "previous") || (page > 2 && operation == "next")) return;
    if (operation == "previous") setPage(page - 1);
    else setPage(page + 1)
  }

  function save() {

  }

  return (
    <div className="h-screen w-screen flex flex-col items-center">
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
        <div>
          {page > 0 && (
            <Button onClick={changePage("previous")} text="Previous" />
          )}
          {page == 3 && (
            <Button onClick={save()} text="Confirm" />
          )}
          {page != 3 && (
            <Button onClick={changePage("next")} text="Next" />
          )}
        </div>
      </form>

    </div>
  )
}

export default Register
