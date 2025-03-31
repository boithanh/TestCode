import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { path } from '../../common/path';
const { Header, Content, Footer } = Layout;
// const items = Array.from({ length: 15 }).map((_, index) => ({
//     key: index + 1,
//     label: `nav ${index + 1}`,
// }));

const arrNavlink = [
    {
        to: path.homePage,
        content: "Home"
    },
    {
        to: path.bloodPressure,
        content: "Check huyết áp"
    },
    {
        to: path.randomDefaultLottery,
        content: "Lấy số kiến thiết ngẫu nhiên"
    },
    {
        to: path.randomMega,
        content: "Lấy số Mega ngẫu nhiên"
    },
    {
        to: path.randomPower,
        content: "Lấy số Power ngẫu nhiên"
    }
]


const HomeTemplate = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className="vh-100 vw-100">
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                {/* {arrNavlink.map((item, index) => {
                    return (
                        <NavLink to={item.to} className={({ isActive, isPending }) => {
                            return `mx-3 ${isActive ? "text-danger" : "text-primary"}`
                        }}>{item.content}</NavLink>
                    )
                })
                } */}
                <p className='text-white fs-4'>Welcome to app panel</p>
            </Header>
            <Content style={{ padding: '0 48px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Created by Bối Thạnh ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};
export default HomeTemplate;