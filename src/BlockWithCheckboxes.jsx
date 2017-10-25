// @flow
import * as React from "react";
import Row from "./Row.jsx";
import type {Item} from "./App.jsx";

type BlockWithCheckboxesProps = {
    items: Item[],
    onChange: (value: Item[]) => void,
};

export default class BlockWithCheckboxes extends React.Component<
    BlockWithCheckboxesProps,
    void
> {
    handleItemChange = (index: number, value: Item) => {
        const {items, onChange} = this.props;
        onChange([...items.slice(0, index), value, ...items.slice(index + 1)]);
    };

    render(): React.Element<*> {
        const {items} = this.props;
        return (
            <div>
                {(items || []).map((x, index) => (
                    <Row
                        key={index}
                        item={x}
                        index={index}
                        onChange={this.handleItemChange}
                    />
                ))}
            </div>
        );
    }
}
