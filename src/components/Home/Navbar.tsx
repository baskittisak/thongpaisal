"use client";
import { useEffect, useState } from "react";
import { Drawer, Space, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title } = Typography;

const Nav = styled(Space)`
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
`;

const MenuButton = styled(MenuOutlined)`
  display: none;
  cursor: pointer;
  color: #fff;
  font-size: 2rem;

  @media (max-width: 1024px) {
    display: block;
  }
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

const MENUS = ["หน้าแรก", "เกี่ยวกับเรา", "สินค้า", "ติดต่อเรา"];

export default function NavBar() {
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

  return (
    <>
      <MenuButton onClick={() => setOpen(true)} />

      <Nav size="large">
        {MENUS.map((menu) => (
          <Title
            key={menu}
            level={4}
            className={activeMenu === menu ? "active" : ""}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </Title>
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
          {MENUS.map((menu) => (
            <Title
              key={menu}
              level={5}
              onClick={() => {
                setActiveMenu(menu);
                setOpen(false);
              }}
              className={activeMenu === menu ? "active" : ""}
            >
              {menu}
            </Title>
          ))}
        </DrawerMenu>
      </Drawer>
    </>
  );
}
