import clsx from "clsx";
import { useRef, useState, ReactNode, MouseEvent } from "react";
import { Link } from "react-router-dom";

type TNavItem = {
  key?: string;
  title: string;
  path: string;
};

interface IHeaderProps {
  logo?: ReactNode;
  navItems: TNavItem[];
}
export function Header({ logo, navItems }: IHeaderProps) {
  const [index, setIndex] = useState(0);
  const indicator = useRef<HTMLDivElement>(null);
  const navList = useRef<HTMLUListElement>(null);

  const moveIndicatorTo = (navLink?: HTMLAnchorElement) => {
    if (navLink && indicator.current && navList.current) {
      const translateX = (navLink.parentElement?.offsetLeft || 0) + 16;

      indicator.current.style.width = `${navLink?.clientWidth - 32}px`;
      indicator.current.style.translate = `${translateX}px`;
    }
  };

  const onMouseEnterNavItem = (e: MouseEvent<HTMLLIElement>) => {
    const navLink = e.currentTarget.querySelector(".nav-link");

    if (navLink) {
      moveIndicatorTo(navLink as HTMLAnchorElement);
    }
  };

  const onMouseLeaveNavList = () => {
    const navLink = navList.current?.querySelectorAll(".nav-link")?.[index];

    if (navLink) {
      moveIndicatorTo(navLink as HTMLAnchorElement);
    }
  };

  const onClickNavItem = (index: number) => {
    setIndex(index);
  };

  return (
    <header className="flex justify-center sticky top-0 bg-black/20">
      <div className="header-inner mx-auto py-2 flex justify-between">
        {logo}
        <nav className="relative">
          <div
            ref={indicator}
            className="h-1 absolute bottom-0 left-0 duration-300 bg-red-600"
          />
          <ul
            ref={navList}
            className="py-2 list-none flex"
            onMouseLeave={onMouseLeaveNavList}
          >
            {navItems.map((item, i) => {
              return (
                <li
                  key={i}
                  className={clsx("flex", i === index && "text-yellow-400")}
                  onMouseEnter={onMouseEnterNavItem}
                  onClick={() => onClickNavItem(i)}
                >
                  <Link className="px-4 nav-link" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* <ul className="list-none flex space-x-4">
            {navItems.map((item, i) => {
              return (
                <li key={item.key ?? i}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul> */}
        </nav>
      </div>
    </header>
  );
}
