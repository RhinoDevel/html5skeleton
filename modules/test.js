
// Marcel Timm, 2022

// Notes:
//
// - Modules have their own scope.
// - Modules have strict mode enabled by default.
// - Module files should have the ending ".mjs" (at least during development),
//   but it depends on the HTTP server, if ".mjs" files will be send to client
//   as JavaScript files (so we use ".js", at least for releases).

// ***************************************
// *** Static constants and variables: ***
// ***************************************

let s_lastNr = 0;

// **************************
// *** Private functions: ***
// **************************

function incrementLastNr()
{
    ++s_lastNr;
};

// *************************
// *** Public functions: ***
// *************************

export function getString()
{
    return 'This is some test string returned from test_getString().';
};

export function getNextNr()
{
    incrementLastNr();

    return s_lastNr;
};
