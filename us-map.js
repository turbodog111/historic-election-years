// US Map Integration for Historic Campaign Trail
// Uses accurate SVG map from Simplemaps

// State abbreviation to full name mapping
const stateNames = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas",
    "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware",
    "DC": "District of Columbia", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii",
    "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
    "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine",
    "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota",
    "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska",
    "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico",
    "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio",
    "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island",
    "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas",
    "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington",
    "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"
};

// Full name to abbreviation mapping
const stateAbbreviations = {};
for (const [abbr, name] of Object.entries(stateNames)) {
    stateAbbreviations[name] = abbr;
}

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

// Initialize the map - loads SVG and sets up event handlers
async function initializeMap() {
    const mapContainer = document.getElementById('map-wrapper');
    if (!mapContainer) return;

    try {
        // Load the SVG file
        const response = await fetch('us.svg');
        const svgText = await response.text();

        // Create a container and insert the SVG
        mapContainer.innerHTML = svgText;

        // Get the SVG element and set its ID
        const svg = mapContainer.querySelector('svg');
        if (svg) {
            svg.id = 'us-map';
            svg.style.width = '100%';
            svg.style.height = 'auto';
            svg.style.maxHeight = '400px';

            // Add event listeners to each state path
            const paths = svg.querySelectorAll('path[id]');
            paths.forEach(path => {
                const stateAbbr = path.getAttribute('id');
                if (stateAbbr && stateNames[stateAbbr]) {
                    path.style.cursor = 'pointer';
                    path.style.transition = 'opacity 0.2s ease, stroke-width 0.2s ease';

                    path.addEventListener('mouseenter', () => handleStateHover(stateAbbr));
                    path.addEventListener('mouseleave', handleStateLeave);
                    path.addEventListener('click', () => handleStateClick(stateAbbr));
                }
            });
        }

        // Initial color update
        updateMapColors();
    } catch (error) {
        console.error('Error loading map:', error);
        mapContainer.innerHTML = '<p style="color: #a0aec0; text-align: center;">Map loading...</p>';
    }
}

// Handle state hover
function handleStateHover(stateAbbr) {
    const stateName = stateNames[stateAbbr];
    const tooltip = document.getElementById('state-tooltip');
    if (!tooltip || !stateName || !gameState.statePolling[stateName]) return;

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

    // Highlight the state
    const svg = document.getElementById('us-map');
    if (svg) {
        const path = svg.querySelector(`#${stateAbbr}`);
        if (path) {
            path.style.opacity = '0.8';
            path.style.strokeWidth = '2';
            path.style.stroke = '#fff';
        }
    }
}

// Handle state leave
function handleStateLeave() {
    const tooltip = document.getElementById('state-tooltip');
    if (tooltip) {
        tooltip.classList.add('hidden');
    }

    // Reset all state styles
    const svg = document.getElementById('us-map');
    if (svg) {
        const paths = svg.querySelectorAll('path[id]');
        paths.forEach(path => {
            path.style.opacity = '1';
            path.style.strokeWidth = '0.97';
            path.style.stroke = '#000';
        });
    }
}

// Handle state click
function handleStateClick(stateAbbr) {
    const stateName = stateNames[stateAbbr];
    console.log(`Clicked: ${stateName} (${stateAbbr})`);
}

// Update map colors based on current polling
function updateMapColors() {
    const svg = document.getElementById('us-map');
    if (!svg || !gameState.statePolling) return;

    for (const [stateName, data] of Object.entries(gameState.statePolling)) {
        const abbr = stateAbbreviations[stateName];
        if (abbr) {
            const path = svg.querySelector(`#${abbr}`);
            if (path) {
                const color = getStateColor(data.margin);
                path.style.fill = color;
            }
        }
    }
}
