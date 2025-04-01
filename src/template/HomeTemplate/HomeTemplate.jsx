import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { path } from '../../common/path';
import MobileMenu from '../../Components/MobileMenu';
import { useMediaQuery } from 'react-responsive';
const { Header, Content, Footer } = Layout;

const arrNavlink = [
    {
        to: path.homePage,
        content: "Home"
    },
    {
        to: path.bloodPressure,
        content: "BloodPresure Check"
    },
    {
        to: path.randomDefaultLottery,
        content: "Lottery Random"
    },
    {
        to: path.randomMega,
        content: "6/45 Random"
    },
    {
        to: path.randomPower,
        content: "6/55 Random"
    }
]


const HomeTemplate = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    console.log(isMobile);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className="vh-100 vw-100">
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                {
                    isMobile ? (<MobileMenu arrNavlink={arrNavlink} />)
                        : (arrNavlink.map((item, index) => {
                            return (
                                isMobile ? <MobileMenu /> : <NavLink to={item.to} className={({ isActive, isPending }) => {
                                    return `mx-2 ${isActive ? "text-dark btn btn-light" : "text-light"}`
                                }} style={{ textDecoration: "none" }}>{item.content}</NavLink>
                            )
                        }))
                }

            </Header>
            <Content style={{ padding: 0, width: "100%" }}>
                <div style={{
                    background: colorBgContainer,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', maxHeight: "max-content" }}>
                Created by Bối Thạnh ©{new Date().getFullYear()}
            </Footer>
        </Layout >
    );
};
export default HomeTemplate;