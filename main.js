
// Marcel Timm, 2022

import * as test from "./modules/test.js";

// Notes:
//
// - To be executed as script of type module on page load.
//
// - Modules have their own scope.
// - Modules have strict mode enabled by default.
// - Module files should have the ending ".mjs" (at least during development),
//   but it depends on the HTTP server, if ".mjs" files will be send to client
//   as JavaScript files (so we use ".js", at least for releases).

/** To-be-called after page load.
 */
function init()
{
    document.body.textContent = test.getString();

    for(let i = 0;i < 10; ++i)
    {
        console.log(`Next nr. is: ${test.getNextNr().toString()}.`);
    }
};

// Trigger execution of initialization:
//
window.addEventListener('load', init);
