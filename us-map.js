// US Map SVG Paths for all 50 states + DC
// Paths are simplified versions suitable for an interactive electoral map

const statePaths = {
    "Alabama": "M628.5,397.5 L631,320 L676,323 L678,390.5 L672,403 L665,403.5 L658.5,421.5 L628.5,397.5z",
    "Alaska": "M158.5,453 L115,453 L115,503 L68,503 L68,525 L40,539 L40,555 L80,570 L120,565 L145,538 L170,542 L185,530 L175,510 L158.5,500 L158.5,453z M40,539 L25,548 L25,565 L40,555z M25,565 L10,570 L15,580 L30,575 L25,565z",
    "Arizona": "M205.5,335 L200,415 L152,408 L140,455 L215,468 L280.5,350 L205.5,335z",
    "Arkansas": "M561,340 L623,335 L628.5,397.5 L560,402 L545,390 L543,345 L561,340z",
    "California": "M122,250 L140,317 L117,368 L140,455 L60,410 L48,335 L68,270 L108,210 L122,250z",
    "Colorado": "M285,260 L365,265 L363,335 L280.5,330 L285,260z",
    "Connecticut": "M852,185 L870,180 L873,200 L855,210 L845,200 L852,185z",
    "Delaware": "M820,235 L832,230 L838,260 L825,265 L820,235z",
    "District of Columbia": "M800,255 L810,252 L812,262 L802,265 L800,255z",
    "Florida": "M675,403 L765,420 L785,460 L760,510 L710,522 L690,475 L658.5,421.5 L665,403.5 L675,403z",
    "Georgia": "M678,323 L740,335 L745,395 L702,420 L678,390.5 L678,323z",
    "Hawaii": "M260,515 L280,510 L285,525 L270,535 L255,530 L260,515z M290,505 L305,502 L310,515 L295,520 L290,505z M315,495 L330,490 L338,505 L323,512 L315,495z",
    "Idaho": "M185,115 L220,110 L235,205 L190,225 L165,205 L185,115z",
    "Illinois": "M610,218 L630,215 L645,300 L620,315 L590,305 L588,250 L610,218z",
    "Indiana": "M645,230 L680,225 L685,300 L645,305 L645,230z",
    "Iowa": "M520,210 L585,205 L590,265 L525,270 L520,210z",
    "Kansas": "M380,285 L475,280 L478,335 L378,340 L380,285z",
    "Kentucky": "M625,290 L720,285 L725,320 L630,325 L625,290z",
    "Louisiana": "M545,415 L600,410 L610,458 L575,475 L540,460 L545,415z",
    "Maine": "M880,100 L900,95 L910,145 L890,170 L870,155 L880,100z",
    "Maryland": "M755,250 L820,235 L825,265 L810,285 L755,275 L755,250z",
    "Massachusetts": "M862,170 L895,162 L898,182 L870,190 L862,170z",
    "Michigan": "M615,135 L680,115 L700,180 L670,210 L620,200 L615,135z M580,145 L610,138 L615,175 L585,180 L580,145z",
    "Minnesota": "M500,115 L565,108 L575,195 L510,202 L500,115z",
    "Mississippi": "M600,340 L628.5,335 L628.5,415 L600,420 L590,395 L600,340z",
    "Missouri": "M530,275 L600,270 L610,350 L545,358 L525,330 L530,275z",
    "Montana": "M195,85 L310,78 L315,165 L205,175 L195,85z",
    "Nebraska": "M370,220 L470,215 L475,275 L375,280 L370,220z",
    "Nevada": "M140,200 L190,195 L195,320 L145,335 L140,200z",
    "New Hampshire": "M868,130 L880,125 L885,168 L870,175 L868,130z",
    "New Jersey": "M825,200 L840,195 L845,250 L830,260 L820,235 L825,200z",
    "New Mexico": "M280,340 L365,335 L370,430 L285,435 L280,340z",
    "New York": "M770,145 L850,130 L862,200 L820,210 L790,205 L770,145z",
    "North Carolina": "M730,305 L830,295 L840,330 L750,340 L730,305z",
    "North Dakota": "M375,105 L465,100 L470,160 L380,165 L375,105z",
    "Ohio": "M690,220 L745,215 L750,280 L695,290 L690,220z",
    "Oklahoma": "M380,340 L478,335 L485,395 L395,405 L380,370 L380,340z",
    "Oregon": "M75,135 L165,125 L175,205 L85,218 L75,135z",
    "Pennsylvania": "M745,195 L820,185 L825,240 L750,250 L745,195z",
    "Rhode Island": "M873,180 L882,178 L884,195 L875,198 L873,180z",
    "South Carolina": "M730,340 L785,335 L790,380 L745,395 L730,340z",
    "South Dakota": "M375,165 L470,158 L475,220 L380,227 L375,165z",
    "Tennessee": "M615,320 L730,305 L735,340 L620,355 L615,320z",
    "Texas": "M340,395 L475,380 L520,470 L475,545 L375,530 L320,455 L340,395z",
    "Utah": "M215,210 L280,205 L285,320 L220,328 L215,210z",
    "Vermont": "M853,130 L868,125 L872,168 L858,175 L853,130z",
    "Virginia": "M730,270 L815,258 L820,305 L740,320 L730,270z",
    "Washington": "M95,65 L175,55 L185,125 L105,135 L95,65z",
    "West Virginia": "M730,245 L770,240 L775,290 L735,300 L730,245z",
    "Wisconsin": "M565,140 L620,132 L630,210 L575,218 L565,140z",
    "Wyoming": "M255,165 L340,158 L345,240 L260,248 L255,165z"
};

// State abbreviations for display
const stateAbbreviations = {
    "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR",
    "California": "CA", "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE",
    "District of Columbia": "DC", "Florida": "FL", "Georgia": "GA", "Hawaii": "HI",
    "Idaho": "ID", "Illinois": "IL", "Indiana": "IN", "Iowa": "IA",
    "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME",
    "Maryland": "MD", "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN",
    "Mississippi": "MS", "Missouri": "MO", "Montana": "MT", "Nebraska": "NE",
    "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM",
    "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH",
    "Oklahoma": "OK", "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI",
    "South Carolina": "SC", "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX",
    "Utah": "UT", "Vermont": "VT", "Virginia": "VA", "Washington": "WA",
    "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY"
};

// Color scale for margins (Dem positive, Rep negative)
function getStateColor(margin) {
    if (margin >= 15) return "#1e40af";      // Safe Dem (dark blue)
    if (margin >= 8) return "#3b82f6";       // Lean Dem (blue)
    if (margin >= 3) return "#93c5fd";       // Tilt Dem (light blue)
    if (margin > -3) return "#a855f7";       // Tossup (purple)
    if (margin > -8) return "#fca5a5";       // Tilt Rep (light red)
    if (margin > -15) return "#ef4444";      // Lean Rep (red)
    return "#991b1b";                         // Safe Rep (dark red)
}

// Convert margin to vote percentages
function marginToPercentages(margin) {
    // Base is around 50-50, margin shifts the percentages
    // A margin of +10 means roughly 55-45
    const demPct = 50 + (margin / 2);
    const repPct = 50 - (margin / 2);

    // Clamp values between reasonable bounds
    return {
        dem: Math.min(Math.max(demPct, 20), 80).toFixed(1),
        rep: Math.min(Math.max(repPct, 20), 80).toFixed(1)
    };
}

// Get status text based on margin
function getStatusText(margin) {
    if (margin >= 15) return { text: "Safe Democrat", class: "dem" };
    if (margin >= 8) return { text: "Likely Democrat", class: "dem" };
    if (margin >= 3) return { text: "Lean Democrat", class: "dem" };
    if (margin > -3) return { text: "Tossup", class: "tossup" };
    if (margin > -8) return { text: "Lean Republican", class: "rep" };
    if (margin > -15) return { text: "Likely Republican", class: "rep" };
    return { text: "Safe Republican", class: "rep" };
}

// Initialize the map
function initializeMap() {
    const svg = document.getElementById('us-map');
    if (!svg) return;

    // Clear existing content
    svg.innerHTML = '';

    // Add each state path
    for (const [stateName, pathData] of Object.entries(statePaths)) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", pathData);
        path.setAttribute("data-state", stateName);
        path.setAttribute("fill", "#4a5568"); // Default gray

        // Add hover events
        path.addEventListener('mouseenter', () => handleStateHover(stateName));
        path.addEventListener('mouseleave', handleStateLeave);
        path.addEventListener('click', () => handleStateClick(stateName));

        svg.appendChild(path);
    }
}

// Handle state hover
function handleStateHover(stateName) {
    const tooltip = document.getElementById('state-tooltip');
    if (!tooltip || !gameState.statePolling[stateName]) return;

    const stateData = gameState.statePolling[stateName];
    const percentages = marginToPercentages(stateData.margin);
    const status = getStatusText(stateData.margin);
    const scenario = gameState.selectedScenario;

    tooltip.classList.remove('hidden');

    document.getElementById('tooltip-state-name').textContent = stateName;
    document.getElementById('tooltip-ev').textContent = `Electoral Votes: ${stateData.ev}`;
    document.getElementById('tooltip-dem-name').textContent = scenario.candidates.democrat.name.split(' ').pop();
    document.getElementById('tooltip-rep-name').textContent = scenario.candidates.republican.name.split(' ').pop();
    document.getElementById('tooltip-dem-pct').textContent = `${percentages.dem}%`;
    document.getElementById('tooltip-rep-pct').textContent = `${percentages.rep}%`;

    const statusEl = document.getElementById('tooltip-status');
    statusEl.textContent = status.text;
    statusEl.className = `tooltip-status ${status.class}`;
}

// Handle state leave
function handleStateLeave() {
    const tooltip = document.getElementById('state-tooltip');
    if (tooltip) {
        tooltip.classList.add('hidden');
    }
}

// Handle state click (optional - could show more details)
function handleStateClick(stateName) {
    console.log(`Clicked: ${stateName}`);
}

// Update map colors based on current polling
function updateMapColors() {
    const svg = document.getElementById('us-map');
    if (!svg) return;

    const paths = svg.querySelectorAll('path');
    paths.forEach(path => {
        const stateName = path.getAttribute('data-state');
        if (gameState.statePolling[stateName]) {
            const margin = gameState.statePolling[stateName].margin;
            path.setAttribute('fill', getStateColor(margin));
        }
    });
}
