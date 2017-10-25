// @flow
import * as React from "react";
import Toggle from "@skbkontur/react-ui/Toggle";
import Tooltip from "@skbkontur/react-ui/Tooltip";

import type {Item} from "./App";

type RowProps = {
    item: Item,
    index: number,
    onChange: (index: number, value: Item) => void,
};

export default class Row extends React.Component<RowProps, void> {
    renderTooltip = () => {
        const {item} = this.props;
        return <div>{item.caption}</div>;
    };

    handleChange = (checked: boolean) => {
        const {item, index, onChange} = this.props;
        onChange(index, {...item, checked: checked});
    };

    render(): React.Element<*> {
        const {item} = this.props;
        return (
            <div className={"row"}>
                <Tooltip render={this.renderTooltip} pos="top right">
                    <div>{item.text}</div>
                </Tooltip>
                <Toggle
                    checked={Boolean(item.checked)}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
