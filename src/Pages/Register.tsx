import { useState } from "react";
import axios from "axios";
import Button from "../Components/Button";
import Input, { ETypeInput } from "../Components/Input"
import LogoContainer, { ETypeLogoContainer } from "../Components/LogoContainer";
import ProgressDots from "../Components/progressDots";
import { DivideSquare } from "lucide-react";


function Register() {
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);


  // user data
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirthdate] = useState("");
  const [country, setCountry] = useState("BR");
  const [state, setState] = useState("SC");
  const [city, setCity] = useState("1");
  const [language, setLanguage] = useState("");
  const [currency, setCurrency] = useState("");
  const [wishCountryOne, setWishCountryOne] = useState("BR");
  const [wishCountryTwo, setWishCountryTwo] = useState("BR");
  const [wishCountryThree, setWishCountryThree] = useState("BR");
  const [travelType, setTravelType] = useState("");
  const [password, setPassword] = useState("");

  async function save() {
    const [day, month, year] = birth.split("/");
    const birthFormatted = `${year}-${month}-${day}`;

    try {
      const response = await axios.post("http://localhost:8000/users/register", {
        fullName,
        nickname,
        email,
        phone,
        birth: birthFormatted,
        country,
        state,
        city,
        language,
        currency,
        wishCountryOne,
        wishCountryTwo,
        wishCountryThree,
        travelType,
        password
      });

      if (response) {
        window.location.href = "/login";
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }


  function changePage(operation: string) {
    if ((page <= 0 && operation == "previous") || (page > 6 && operation == "next")) return;
    if (operation == "previous") setPage(page - 1);
    else {
      if (VerifyData()) {
        setPage(page + 1)
      }
    }
  }

  function VerifyData() {
    // if (page == 0) {
    //   if (fullName == "" || email == "" || nickname == "" || birth == "") {
    //     setError(true);
    //     return;
    //   }
    // } else if (page == 1) {

    // } else if (page == 2) {

    // } else if (page == 3) {
    //   if (password == "" || confirmPassword == "") {
    //     setError(true);
    //     return;
    //   }
    // }
    // setError(false);
    return true;
  }
  {/* {error && 
    (
      <div className="absolute self-center">
        <div className="relative bg-red-400 text-white text-md top-95 left-50 rounded-2xl p-3" >
          <div className="absolute top-11 left-4 w-0 h-0 border-t-[8px] border-t-red-400 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent">
          </div>
          <p>Dados cadastrados inválidos.</p>
        </div>
      </div>
    )} */
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <LogoContainer type={ETypeLogoContainer.small} />
      <div className="bg-white w-full p-1"></div>
      <div className="h-full flex flex-col w-full items-center bg-gradient-to-br from-blue-600 to-blue-400">
        <div className="flex items-center justify-center p-5">
          <ProgressDots total={7} activeDots={page} />
        </div>
        <form className="h-full w-full flex flex-col items-center justify-evenly">

          <div className="h-3/5">
            {page == 0 && (
              <div className="text-white h-full text-center flex flex-col items-center justify-between">
                <div className="text-2xl">
                  <h1>Hello, Welcome!</h1>
                </div>
                <div className="w-3/5">
                  <p className="text-[20px]">
                    We're so happy to have you here! We will ask a few quick questions to help us create a profile that's uniquely yours!
                  </p>
                </div>
                <div className="text-2xl">
                  <h2>Shall we?</h2>
                </div>
              </div>
            )}
            {page == 1 && (
              <div>
                <Input
                  text="Full Name"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <Input
                  text="Email"
                  placeholder="jhon_theCoolOne@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )}
            {page == 2 && (
              <div>
                <Input
                  text="How would you like to be called"
                  placeholder="JD"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                <Input
                  text="Birthdate"
                  placeholder="01/01/2000"
                  value={birth}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </div>
            )}
            {page == 3 && (
              <div>
                <label>País:</label>
                <input name="country" />

                <label>Estado:</label>
                <input name="state" />

                <label>Cidade:</label>
                <input name="city" />

              </div>
            )}
            {page == 4 && (
              <div>
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
                <Input
                  type={ETypeInput.select}
                  text="Favorite Travel Objective"
                  options={["Leisure", "Business", "Adventure", "Culture", "Gastronomy"]}
                  value={travelType}
                  onChange={(e) => setTravelType(e.target.value)}
                />
              </div>
            )}
            {page == 5 && (
              <div>
                <Input
                  type={ETypeInput.select}
                  text="Wish Country Nº1"
                  options={["Brazil", "EUA", "Spain", "France", "Italy", "Germany", "Argentina", "Japan", "China", "Australia"]}
                  value={wishCountryOne}
                  onChange={(e) => setWishCountryOne(e.target.value)}
                />
                <Input
                  type={ETypeInput.select}
                  text="Wish Country Nº2"
                  options={["Brazil", "EUA", "Spain", "France", "Italy", "Germany", "Argentina", "Japan", "China", "Australia"]}
                  value={wishCountryTwo}
                  onChange={(e) => setWishCountryTwo(e.target.value)}
                />
                <Input
                  type={ETypeInput.select}
                  text="Wish Country Nº3"
                  options={["Brazil", "EUA", "Spain", "France", "Italy", "Germany", "Argentina", "Japan", "China", "Australia"]}
                  value={wishCountryThree}
                  onChange={(e) => setWishCountryThree(e.target.value)}
                />

              </div>
            )}
            {page == 6 && (
              <div>
                <Input
                  text="Phone (optional)"
                  placeholder="(99) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  type={ETypeInput.input}
                  text="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}
            {page == 7 && (
              // Tela final
              <div></div>
            )}
          </div>
          {page == 0 && (
            <div
              className="w-full h-[166px] bg-[url('/src/Images/table-icons.png')] bg-repeat-x bg-center bg-[length:460px_136px] "
            />
          )}

          <div className="flex gap-5 w-full items-center justify-center h-2/5 bg-zinc-200 relative">


            {page > 0 && (
              <Button onClick={() => changePage("previous")} hoverColor="hover:bg-blue-400" text="Previous" />
            )}
            {page == 7 && (
              <Button onClick={save} text="Confirm" hoverColor="hover:bg-green-400" />
            )}
            {page != 7 && page != 0 && (
              <Button onClick={() => changePage("next")} text="Next" hoverColor="hover:bg-blue-400" />
            )}
            {page == 0 && (
              <Button onClick={() => changePage("next")} text="Let's go!" width="w-45" height="h-15" color="bg-zinc-800" textColor="text-white" borderColor="border-white" hoverColor="hover:bg-zinc-800" />
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
