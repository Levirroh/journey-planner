import { useState } from "react";
import axios from "axios";


function Register() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_nickname: "",
    user_phone: "",
    user_birth: "",
    user_country: "",
    user_state: "",
    user_city: "",
    user_password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:8000/users/", formData)
      console.log("Usuário criado:", response.data)
    } catch (err) {
      console.error("Erro ao criar usuário:", err)
    }
  }

  var page = 0;

  function changePage(operation: string) {
    if (operation == "return") page--;
    else if (operation == "next") page++
  }

  function save() {

  }

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="h-2/5 flex bg-blue-400 w-full items-center justify-center font-bold text-white text-6xl">
        <h1>PacknGo</h1>
      </div>
      <form onSubmit={handleSubmit} className="h-3/5 bg-slate-200 w-full flex flex-col items-center justify-evenly">
        {page == 0 && (
          <div>
            <div>
              <h2>Crie sua conta</h2>
              <label>Nome completo:</label>
              <input name="fullName" onChange={handleChange} />

              <label>Como gostaria de ser chamado?</label>
              <input name="nickname" onChange={handleChange} />

              <label>Email:</label>
              <input name="email" type="email" onChange={handleChange} />

              <label>Telefone (opcional):</label>
              <input name="phone" type="tel" onChange={handleChange} />

              <label>Data de nascimento:</label>
              <input name="birthdate" type="date" onChange={handleChange} />
            </div>
          </div>
        )}
        {page == 1 && (
          <div>
            <label>País:</label>
            <input name="country" onChange={handleChange} />

            <label>Estado:</label>
            <input name="state" onChange={handleChange} />

            <label>Cidade:</label>
            <input name="city" onChange={handleChange} />

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
            <input name="password" type="password" onChange={handleChange} />

            <label>Confirmar senha:</label>
            <input name="confirmPassword" type="password" onChange={handleChange} />
          </div>
        )}
        <div>
          <button onClick={() => changePage("previous")}>Previous</button>
          {page == 3 && (
            <button onClick={() => save()}>Confirm</button>
          )}
          {page != 3 && (
            <button onClick={() => changePage("next")}>Next</button>
          )}
        </div>
      </form>

    </div>
  )
}

export default Register
