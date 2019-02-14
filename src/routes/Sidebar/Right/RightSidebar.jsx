import React, { Component } from "react";

class RightSidebar extends Component {
  state = {};

  render() {
    const { pageName } = this.props;
    let classes = ["sidebar__right"];
    switch (pageName) {
      case "about":
      case "edu":
      case "blog":
      case "store":
      case "contacts":
        classes.push("light_theme");
        break;
      default:
        break;
    }
    let links = [
      {
        href: "#main",
        text: `ГЛАВНАЯ`
      },
      {
        href: "#about",
        text: `О ПРОЕКТЕ`
      },
      {
        href: "#edu",
        text: `ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ`
      },
      {
        href: "#blog",
        text: `БЛОГ`
      },
      {
        href: "#family",
        text: `ATOM FAMILY`
      },
      {
        href: "#store",
        text: `ATOM STORE`
      },
      {
        href: "#contacts",
        text: `КОНТАКТЫ`
      }
    ];
    return (
      <div className="vertical-line right">
        <nav className={classes.join(" ")}>
          <div className="atom-logo" />
          <div className="flex flex-col flex-acen">
            {links.map((link, index) => {
              const classes = ["list-item"];
              link.href === "#" + pageName && classes.push("selected");
              return (
                <a key={index} className={classes.join(" ")} href={link.href}>
                  {link.text}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    );
  }
}

export default RightSidebar;
