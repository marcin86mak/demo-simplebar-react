import React from "react";
import { createRoot } from 'react-dom/client';
import {PageLayout} from "./PageLayout";

import 'simplebar/dist/simplebar.min.css';

const ExamplePage = () =>{

    return (
        <PageLayout/>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ExamplePage />);