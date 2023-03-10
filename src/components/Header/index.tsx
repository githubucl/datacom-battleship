import React from "react";
import "./Header.scss";
const Header = (): JSX.Element => {
  return (
    <header className="Header d-flex p-2">
      <button type="button" className="Header__button-1 btn rounded-0 " />
      <input className="Header__input form-control rounded-0" type="text" />
      <button type="button" className="Header__button-2 btn rounded-0 " />
      <button type="button" className="Header__button-3 btn rounded-0 " />
      <button
        type="button"
        className="Header__button-3 btn rounded-0 d-none d-sm-block"
      />
      <button
        type="button"
        className="Header__button-3 btn rounded-0 d-none d-sm-block"
      />
    </header>
  );
};

export default Header;
