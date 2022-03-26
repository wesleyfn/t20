export default class T20ItemSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: ["t20", "sheet", "item"]
        })
    }

    get template() {
        return `systems/t20/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();
        data.config = CONFIG.t20;
        return data;
    }
}