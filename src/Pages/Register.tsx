import { useState } from "react";
import axios from "axios";
import Button from "../Components/Button";
import Input, { ETypeInput } from "../Components/Input"
import LogoContainer, { ETypeLogoContainer } from "../Components/LogoContainer";
import ProgressDots from "../Components/progressDots";
import ErrorMessage from "../Components/Utils/ErrorMessage";


function Register() {
  const [page, setPage] = useState(0);
  const [errorTrigger, setErrorTrigger] = useState(0);


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
      setErrorTrigger(prev => prev + 1);
    }
  }


  function changePage(operation: "previous" | "next") {
    if (operation === "previous") {
      if (page <= 0) return;
      setPage(page - 1);
      return;
    }

    const hasError = VerifyData();
    if (hasError) return;

    if (page === 6) {
      window.location.href = "/login";
    } else {
      setPage(page + 1);
    }
  }

  function VerifyData() {
    let hasError = false;

    if (page === 1) hasError = !fullName || !email;
    else if (page === 2) hasError = !nickname || !birth;
    else if (page === 3) hasError = !country || !state || !city;
    else if (page === 4) hasError = !language || !currency || !travelType;
    else if (page === 6) hasError = !password || !phone;

    if (hasError) {
      setErrorTrigger(prev => prev + 1);
    }

    return hasError;
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center relative">
      <LogoContainer type={ETypeLogoContainer.small} />
      <ErrorMessage text="Please, fill all the fields!" trigger={errorTrigger} />
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
              <div className="h-full flex flex-col items-center">
                <div className=" flex flex-col pt-5 items-center text-white h-full gap-5">
                  <img src="src\Images\plane-icon.png" className="h-[60px] w-[79px]" />
                  <div className="text-center text-[18px]">
                    <h2>Great! How can we call you?</h2>
                    <h2>And what's your email?</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <Input
                    width="w-66"
                    height="h-12"
                    text="Full Name"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <Input
                    width="w-66"
                    height="h-12"
                    text="Email"
                    placeholder="jhon_theCoolOne@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            )}
            {page == 2 && (
              <div className="h-full flex flex-col items-center">
                <div className=" flex flex-col pt-5 items-center text-white h-full gap-5">
                  <img src="src\Images\passport-icon.png" className="h-[60px] w-[79px]" />
                  <div className="text-center text-[18px]">
                    <h2>We need a little more information</h2>
                    <h2>It's quick!</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <Input
                    width="w-66"
                    height="h-12"
                    text="How would you like to be called"
                    placeholder="JD"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                  <Input
                    width="w-66"
                    height="h-12"
                    text="Birthdate"
                    placeholder="01/01/2000"
                    value={birth}
                    onChange={(e) => setBirthdate(e.target.value)}
                  />
                </div>
              </div>
            )}
            {page == 3 && (
              <div className="h-full flex flex-col items-center">
                <div className=" flex flex-col pt-5 items-center text-white h-full gap-5 pb-5">
                  <img src="src\Images\earth-icon.png" className="h-[70px] w-[65px]" />
                  <div className="text-center text-[18px]">
                    <h2>Tell us where you live at the moment!</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-5">

                </div>
              </div>
            )}
            {page == 4 && (
              <div className="h-full flex flex-col items-center">
                <div className=" flex flex-col pt-5 items-center text-white h-full gap-5 pb-5">
                  <img src="src\Images\case-icon.png" className="h-[60px] w-[79px]" />
                  <div className="text-center text-[18px]">
                    <h2>Teel us about your preferences!</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <Input
                    width="w-66"
                    height="h-12"
                    type={ETypeInput.select}
                    text="Favorite Language"
                    options={["Portuguese", "English", "Spanish"]}
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                  <Input
                    width="w-66"
                    height="h-12"
                    type={ETypeInput.select}
                    text="Favorite Currency"
                    options={["BRL (R$)", "USD ($)", "EUR (€)"]}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  />
                  <Input
                    width="w-66"
                    height="h-12"
                    type={ETypeInput.select}
                    text="Favorite Travel Objective"
                    options={["Leisure", "Business", "Adventure", "Culture", "Gastronomy"]}
                    value={travelType}
                    onChange={(e) => setTravelType(e.target.value)}
                  />
                </div>
              </div>
            )}
            {page == 5 && (
              <div className="h-full flex flex-col items-center">
                <div className=" flex flex-col pt-5 items-center text-white h-full gap-5 pb-5">
                  <img src="src\Images\map-icon.png" className="h-[60px] w-[79px]" />
                  <div className="text-center text-[18px]">
                    <h2>Now, A few extra data that will make the profile, your image!</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <Input
                    width="w-66"
                    height="h-12"
                    type={ETypeInput.select}
                    text="Wish Country Nº3"
                    options={["Brazil", "EUA", "Spain", "France", "Italy", "Germany", "Argentina", "Japan", "China", "Australia"]}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  <Input
                    width="w-66"
                    height="h-12"
                    type={ETypeInput.select}
                    text="Wish Country Nº3"
                    options={["Santa Catarina", "São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia", "Paraná", "Rio Grande do Sul", "Ceará", "Pernambuco", "Goiás"]}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                  <Input
                    width="w-66"
                    height="h-12"
                    type={ETypeInput.select}
                    text="Wish Country Nº3"
                    options={["Joinville", "Florianópolis", "Blumenau", "São José", "Criciúma", "Itajaí", "Lages", "Balneário Camboriú", "Tubarão", "Palhoça"]}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
            )}
            {page == 6 && (
              <div className="h-full flex flex-col items-center w-full">
                <div className=" flex flex-col pt-5 items-center text-white h-full gap-5">
                  <img src="src\Images\plane-icon.png" className="h-[60px] w-[79px]" />
                  <div className="text-center flex flex-col items-center w-full text-[18px]">
                    <h2 className="w-2/3">And, at last but not least! What's your phone number for account recovery</h2>
                    <h2>and what will be your password?</h2>
                  </div>
                </div>
                <div className="flex flex-col gap-5 w-fit h-fit">
                  <Input
                    width="w-66"
                    height="h-12"
                    text="Phone (optional)"
                    placeholder="(99) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Input
                    width="w-66"
                    height="h-12"
                    type={ETypeInput.input}
                    text="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            )}
            {/* {page == 7 && (
              // Tela final
              <div>
              </div>
            )} */}
          </div>
          {page == 0 && (
            <div
              className="w-full h-[166px] bg-[url('/src/Images/table-icons.png')] bg-repeat-x bg-center bg-[length:460px_136px] "
            />
          )}

          <div className={`flex gap-10 w-full items-center justify-center h-2/5 ${page == 0 ? "bg-zinc-200" : "bg-transparent"} relative`}>


            {page > 0 && (
              <Button onClick={() => changePage("previous")} color="bg-zinc-800" textColor="text-white" hoverColor="hover:bg-zinc-800" text="Previous" width="w-45" height="h-15" />
            )}
            {page == 7 && (
              <Button onClick={save} text="Confirm" hoverColor="hover:bg-green-400" width="w-45" height="h-15" />
            )}
            {page != 7 && page != 0 && (
              <Button onClick={() => changePage("next")} text="Next" hoverColor="hover:bg-zinc-800" width="w-45" height="h-15" />
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
