import { useState } from "react";
import Button from "../Components/Button";
import Arrow from "../Components/Arrow"
import Input, { ETypeInput } from "../Components/Input"


function Register() {
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);


  // user data
  const [fullName, setFullName] = useState("");
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
  const [confirmPassword, setConfirmPassword] = useState("");


  function changePage(operation: string) {
    if ((page <= 0 && operation == "previous") || (page > 2 && operation == "next")) return;
    if (operation == "previous") setPage(page - 1);
    else {
      if (VerifyData()) {
        setPage(page + 1)
      }
    }
  }

  function VerifyData() {
    if (page == 0) {
      if (fullName == "" || email == "" || nickname == "" || birthdate == "") {
        setError(true);
        return;
      }
    } else if (page == 1) {

    } else if (page == 2) {

    } else if (page == 3) {
      if (password == "" || confirmPassword == "") {
        setError(true);
        return;
      }
    }
    setError(false);
    return true;
  }

  async function save() {
    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
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
      <div className="h-2/5 flex bg-blue-400 w-full items-center justify-center font-bold text-white relative">
        <Arrow text="Voltar" href="/" />
        <h1 className="text-6xl">PacknGo</h1>
        <h2 className="absolute left-5 bottom-3 text-2xl">Crie sua conta</h2>
      </div>
      <form className="h-3/5 bg-slate-200 w-full flex flex-col items-center justify-evenly">
        {error &&
          (
            <div className="absolute self-center">
              <div className="relative bg-red-400 text-white text-md rounded-2xl p-3" >
                <div className="absolute top-11 left-4 w-0 h-0 border-t-[8px] border-t-red-400 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent">
                </div>
                <p>Dados cadastrados inválidos.</p>
              </div>
            </div>
          )}
        {page == 0 && (
          <div>
            <div className="flex w-screen justify-center gap-50">
              <div>
                <Input
                  text="Full Name"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />

                <Input
                  text="How would you like to be called"
                  placeholder="JD"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />

                <Input
                  text="Email"
                  placeholder="jhon_theCoolOne@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  text="Birthdate"
                  placeholder="01/01/2000"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
                <Input
                  text="Phone (optional)"
                  placeholder="(99) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
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


            <Input
              type={ETypeInput.select}
              text="Favorite Language"
              options={["Portuguese", "English", "Spanish"]}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />

            <Input
              type={ETypeInput.select}
              text="Favorite Currency"
              options={["BRL (R$)", "USD ($)", "EUR (€)"]}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            />
          </div>
        )}
        {page == 2 && (
          <div>
            <h2>Preferências de viagem (opcional)</h2>
            <label>Três países que gostaria de visitar:</label>
            <Input
              type={ETypeInput.select}
              text="Wish Country Nº1"
              options={["Brazil", "EUA", "Spain", "France", "Italy", "Germany", "Argentina", "Japan", "China", "Australia"]}
              value={wishCountry1}
              onChange={(e) => setWishCountry1(e.target.value)}
            />
            <Input
              type={ETypeInput.select}
              text="Wish Country Nº1"
              options={["Brazil", "EUA", "Spain", "France", "Italy", "Germany", "Argentina", "Japan", "China", "Australia"]}
              value={wishCountry1}
              onChange={(e) => setWishCountry1(e.target.value)}
            />
            <Input
              type={ETypeInput.select}
              text="Wish Country Nº2"
              options={["Brazil", "EUA", "Spain", "France", "Italy", "Germany", "Argentina", "Japan", "China", "Australia"]}
              value={wishCountry2}
              onChange={(e) => setWishCountry2(e.target.value)}
            />
            <Input
              type={ETypeInput.select}
              text="Wish Country Nº3"
              options={["Brazil", "EUA", "Spain", "France", "Italy", "Germany", "Argentina", "Japan", "China", "Australia"]}
              value={wishCountry3}
              onChange={(e) => setWishCountry3(e.target.value)}
            />

            <Input
              type={ETypeInput.select}
              text="Favorite Travel Objective"
              options={["Leisure", "Business", "Adventure", "Culture", "Gastronomy"]}
              value={travelType}
              onChange={(e) => setTravelType(e.target.value)}
            />
          </div>
        )}

        {page == 3 && (
          <div>
            <Input
              type={ETypeInput.input}
              text="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              type={ETypeInput.input}
              text="Confirm you password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

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
