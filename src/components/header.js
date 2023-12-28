import logo from "../assets/icons/Logoo.jpeg";
const Header = () => {
  return (
    <div className={"header"}>
      <img className={"logo-img"} src={logo} alt="no-img"></img>
      <div className={"title"}>
        <span>
          <h3>Shopingo</h3>
        </span>
      </div>
      <div className={"search-bar"}>
        <input
          type="text"
          className={"search-input"}
          placeholder="Search..."
        ></input>
      </div>
      <div>
        <button className={"search-btn"}>
          <span class="material-symbols-outlined">search</span>
        </button>
      </div>

      <div className={"buttons"}>
        <button className={"button"}>
          <span class="material-symbols-outlined">credit_card_heart</span>
        </button>
        <button className={"button"}>
          <span class="material-symbols-outlined">shopping_bag</span>
        </button>
      </div>
      <button className={"button"}>
        <span class="material-symbols-outlined">history</span>
      </button>
      <button className={"button"}>
        <span class="material-symbols-outlined">contact_support</span>
      </button>
    </div>
  );
};

export default Header;
