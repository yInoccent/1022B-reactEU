import './App.css'
function App() {
  let nome = "Joãozinho"
  let sobrenome = "Figueiredo Terenciani"
  return (
    <>
      <h1 className="nome">Nome: {nome} </h1>
      <p className="sobrenome">{sobrenome}</p>
    </>
  )// Retorna JSX - JavaScript XML
}
export default App
