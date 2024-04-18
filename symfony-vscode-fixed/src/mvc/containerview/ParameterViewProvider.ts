import { Parameter } from "../../symfony/Parameter";
import { AbstractContainerViewProvider } from "./AbstractContainerViewProvider";
import { AbstractContainerTreeItem } from "./AbstractContainerTreeItem";
import { ParameterTreeItem } from "./ParameterTreeItem";

export class ParameterViewProvider extends AbstractContainerViewProvider {
    private _parameters: Parameter[] = [];

    constructor() {
        super();
    }

    onParametersChanges(parameters: Parameter[]) {
        this._parameters = parameters;
        this._onDidChangeTreeData.fire(undefined);
    }

    getTreeItems(): AbstractContainerTreeItem[] {
        let treeItems: ParameterTreeItem[] = [];

        this._parameters.forEach(parameter => {
            if (this.acceptSearchable(parameter)) {
                treeItems.push(new ParameterTreeItem(parameter));
            }
        });

        return treeItems;
    }

    protected _getSearchItemContext(): string {
        return 'symfony-vscode.searchItem.parameter';
    }
}