import React from "react";
import Auxs from "../../components/hoc/Auxs";

const layout = (props) => (
    <Auxs>
        <div>Toolbar, Sidebar, Backdrop</div>,
        <main>
            {props.children}
        </main>
    </Auxs>
);
export default layout;