import "./DropDown.css";
import { useState } from "react";
import arrowIcon from "../../../assets/icons/arrow_vertical.svg";

const renderData = (data) => {
  if (Array.isArray(data)) {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={`item-${index}`}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{data}</p>;
};

function DropDown({ title, data }) {
  const [isOpen, setIsOpen] = useState(false);

  const arrowClasses = `DropDown__header__arrow ${isOpen ? "rotate" : ""}`;
  const bodyClasses = `DropDown__body ${isOpen ? "opened" : ""}`;

  return (
    <article className="DropDown">
      <header className="DropDown__header">
        <p>{title}</p>
        <img
          src={arrowIcon}
          alt="fleche"
          className={arrowClasses}
          onClick={() => setIsOpen(!isOpen)}
        />
      </header>
      <section className={bodyClasses}>{isOpen && renderData(data)}</section>
    </article>
  );
}

export default DropDown;
