export default class T20CharacterSheet extends ActorSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/t20/templates/sheets/character-sheet.html",
            width: 600,
            height: 340,
            classes: ["t20", "sheet", "character"]
        });
    }

    getData(){
        const data = super.getData();
        data.config = CONFIG.t20;
        return data;
    }
}