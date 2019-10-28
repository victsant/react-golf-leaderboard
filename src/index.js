import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from './store/provider';
import './styles/theme.scss';

//Components
import Layout from './components/layout';
import Container from './components/container';

const Index = () => (
    <StoreProvider>
        <Layout>
            <Container />
        </Layout>
    </StoreProvider>
);

ReactDOM.render(<Index />, document.getElementById("index"));