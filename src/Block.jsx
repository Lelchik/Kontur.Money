// @flow
import * as React from "react";
import Row from "./Row.jsx";
import type {Item} from "./App.jsx";

type BlockProps = {
    caption: string,
    children?: any,
};

export default class Block extends React.Component<BlockProps, void> {
    render(): React.Element<*> {
        const {caption, children} = this.props;
        return (
            <div className={"block-root"}>
                <h3>{caption}</h3>
                {children}
            </div>
        );
    }
}
