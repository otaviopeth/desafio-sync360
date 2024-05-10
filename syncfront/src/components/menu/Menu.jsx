import "./Menu.css";
const Menu = () => {
  return (
    <>
      <header>
        <div className="title">
          <div>
            <h1>Painel do Usuário</h1>
          </div>
        </div>
        <nav className="nav-bar">
          <a href="#user">Usuário</a>
          <a href="#info">Formulário</a>
        </nav>
      </header>
    </>
  );
};

export default Menu;
