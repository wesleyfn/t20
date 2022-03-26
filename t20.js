import { t20 } from "./module/config.js";
import T20ItemSheet from "./module/sheets/T20ItemSheet.js";
import T20CharacterSheet from "./module/sheets/T20CharacterSheet.js";

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/t20/templates/sheets/character-sheet.html"
    ];
    return loadTemplates(templatePaths);
};

Hooks.once("init", function() {
    console.log("t20 | Iniciando o sistema de Tormenta 20");

    CONFIG.t20 = t20;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("t20", T20ItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("t20", T20CharacterSheet, { makeDefault: true });

    preloadHandlebarsTemplates();

    Handlebars.registerHelper("mod", (attributeValue) => {
        let result = Math.floor((attributeValue - 10) / 2);
        return result;
    });
});