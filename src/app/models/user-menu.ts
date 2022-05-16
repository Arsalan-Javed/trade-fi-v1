export class UserMenu {
    id?: string;
    title?: string;
    icon?: string;
    link?: string;
    order?: number;
    translationKey?: string;
    parentId?: string;
    rightKey?: string;
    selected: boolean = false;
    get description(): string {
        return this.translationKey + '.Description';
    }
}
