
function Register() {

  return (
    <div>
      <h1>PacknGo</h1>

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

      <label>Senha:</label>
      <input name="password" type="password" />

      <label>Confirmar senha:</label>
      <input name="confirmPassword" type="password" />

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

      <button>Confirmar cadastro</button>

    </div>
  )
}

export default Register
