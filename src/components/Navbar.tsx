"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Drawer, Space, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styled, { css } from "styled-components";

interface NavbarProps {
  type?: "fixed" | "default";
}

const { Title } = Typography;

const Nav = styled(Space)<NavbarProps>`
  white-space: pre;

  .ant-typography {
    cursor: pointer;
    position: relative;
    display: inline-block;
  }

  .ant-typography::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease-in-out;
    transform: translateX(-50%);
  }

  .ant-typography:hover::after {
    width: 100%;
  }

  .active {
    font-weight: bold;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }

  ${({ type }) =>
    type === "fixed" &&
    css`
      width: 100%;
      padding: 24px 36px;
      justify-content: flex-end;
      z-index: 1;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.4)
      );
      backdrop-filter: blur(8px);

      .ant-typography {
        color: #fff;
      }
    `}
`;

const MenuButton = styled(MenuOutlined)<NavbarProps>`
  display: none;
  cursor: pointer;
  color: #fff;
  font-size: 2rem;

  @media (max-width: 1024px) {
    display: block;
  }

  ${({ type }) =>
    type === "fixed" &&
    css`
      width: 100%;
      padding: 24px 36px;
      justify-content: flex-end;
      z-index: 1;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.4)
      );
      backdrop-filter: blur(8px);

      @media (max-width: 1024px) {
        display: flex !important;
      }
    `}
`;

const DrawerMenu = styled(Space)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  .ant-typography {
    cursor: pointer;
    position: relative;
    display: inline-block;
  }

  .ant-typography::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #000;
    transition: width 0.3s ease-in-out;
    transform: translateX(-50%);
  }

  .ant-typography:hover::after {
    width: 100%;
  }

  .active {
    font-weight: bold;

    &::after {
      width: 100%;
    }
  }
`;

const MENUS = [
  { name: "หน้าแรก", path: "/" },
  { name: "เกี่ยวกับเรา", path: "/about-us" },
  { name: "สินค้า", path: "/products" },
  { name: "ติดต่อเรา", path: "/contact-us" },
];

export default function NavBar({ type = "default" }: NavbarProps) {
  const pathName = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const [drawerWidth, setDrawerWidth] = useState<string | number>(300);
  const [activeMenu, setActiveMenu] = useState<string>("หน้าแรก");

  useEffect(() => {
    const updateDrawerWidth = () => {
      if (window.innerWidth <= 425) {
        setDrawerWidth("100%");
      } else {
        setDrawerWidth(300);
      }
    };

    updateDrawerWidth();
    window.addEventListener("resize", updateDrawerWidth);

    return () => window.removeEventListener("resize", updateDrawerWidth);
  }, []);

  useEffect(() => {
    const activeMenu = MENUS.find((menu) => menu.path === pathName)?.name;
    if (activeMenu) {
      setActiveMenu(activeMenu);
    }
  }, [pathName]);

  return (
    <>
      <MenuButton onClick={() => setOpen(true)} type={type} />

      <Nav size="large" type={type}>
        {MENUS.map(({ name, path }) => (
          <Link key={name} href={path} passHref>
            <Title
              level={4}
              className={activeMenu === name ? "active" : ""}
              onClick={() => setActiveMenu(name)}
            >
              {name}
            </Title>
          </Link>
        ))}
      </Nav>

      <Drawer
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={drawerWidth}
        styles={{
          header: { display: "none" },
        }}
      >
        <DrawerMenu>
          {MENUS.map(({ name, path }) => (
            <Link key={name} href={path} passHref>
              <Title
                level={5}
                onClick={() => {
                  setActiveMenu(name);
                  setOpen(false);
                }}
                className={activeMenu === name ? "active" : ""}
              >
                {name}
              </Title>
            </Link>
          ))}
        </DrawerMenu>
      </Drawer>
    </>
  );
}
