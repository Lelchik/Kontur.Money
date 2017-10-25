// @flow
import * as React from "react";
import TopBar from "@skbkontur/react-ui/TopBar";
import Gapped from "@skbkontur/react-ui/Gapped";
import Block from "./Block.jsx";
import BlockWithCheckboxes from "./BlockWithCheckboxes.jsx";

import "./style.less";

export type Item = {
    text: string,
    caption: string,
    checked?: boolean,
};

type AppState = {
    first: Item[],
    second: Item[],
    third: Item[],
};

type AppProps = {
    data: {header: string, items: Item[], weight: number}[],
};

export default class App extends React.Component<AppProps, AppState> {
    state = {
        first: [],
        second: [],
        third: [],
    };
    componentWillMount() {
        const {data} = this.props;
        this.setState({
            first: data[0].items,
            second: data[1].items,
            third: data[2].items,
        });
    }

    handleChangeBlock = (block: string) => (value: Item[]) =>
        this.setState({[block]: value});

    handleChangeFirstBlock = this.handleChangeBlock("first");
    handleChangeSecondBlock = this.handleChangeBlock("second");
    handleChangeThirdBlock = this.handleChangeBlock("third");

    calc = ([k, i]: [number, Item[]]) => k * i.filter(x => x.checked).length;
    calculateMax = () => {
        const {data} = this.props;
        const {first, second, third} = this.state;
        return (
            Math.max(
                ...[
                    [data[0].weight, first],
                    [data[1].weight, second],
                    [data[2].weight, third],
                ].map(this.calc)
            ) + this.calc([2, first])
        );
    };

    calculateSum = () => {
        const {first, second, third} = this.state;
        return (
            this.calc([1, first]) +
            this.calc([1, second]) +
            this.calc([1, third])
        );
    };

    render() {
        const {data} = this.props;
        const {first, second, third} = this.state;
        return (
            <div>
                <TopBar suffix="Деньги" noWidget color="#1E79BE" />
                <div className={"page"}>
                    <div className={"content"}>
                        <Block caption={data[0].header}>
                            <BlockWithCheckboxes
                                items={first}
                                onChange={this.handleChangeFirstBlock}
                            />
                        </Block>
                        <Block caption={data[1].header}>
                            <BlockWithCheckboxes
                                items={second}
                                onChange={this.handleChangeSecondBlock}
                            />
                        </Block>
                        <Block caption={data[2].header}>
                            <BlockWithCheckboxes
                                items={third}
                                onChange={this.handleChangeThirdBlock}
                            />
                        </Block>
                    </div>
                    <div>
                        <Block caption={`Результат: ${this.calculateMax()}`} />
                    </div>
                </div>
            </div>
        );
    }
}
