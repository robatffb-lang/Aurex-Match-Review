// ==========================================
// 1. COUNTRY ISO MAP FOR FLAGS (211 NATIONS)
// ==========================================
const countryCodes = {
  "Afghanistan": "af", "Albania": "al", "Algeria": "dz", "American Samoa": "as", "Andorra": "ad", "Angola": "ao", "Anguilla": "ai", "Antigua and Barbuda": "ag", "Argentina": "ar", "Armenia": "am", "Aruba": "aw", "Australia": "au", "Austria": "at", "Azerbaijan": "az",
  "Bahamas": "bs", "Bahrain": "bh", "Bangladesh": "bd", "Barbados": "bb", "Belarus": "by", "Belgium": "be", "Belize": "bz", "Benin": "bj", "Bermuda": "bm", "Bhutan": "bt", "Bolivia": "bo", "Bosnia and Herzegovina": "ba", "Botswana": "bw", "Brazil": "br", "British Virgin Islands": "vg", "Brunei": "bn", "Bulgaria": "bg", "Burkina Faso": "bf", "Burundi": "bi",
  "Cabo Verde": "cv", "Cambodia": "kh", "Cameroon": "cm", "Canada": "ca", "Cayman Islands": "ky", "Central African Republic": "cf", "Chad": "td", "Chile": "cl", "China": "cn", "Chinese Taipei": "tw", "Colombia": "co", "Comoros": "km", "Congo": "cg", "Costa Rica": "cr", "Croatia": "hr", "Cuba": "cu", "Curaçao": "cw", "Cyprus": "cy", "Czech Republic": "cz",
  "Denmark": "dk", "Djibouti": "dj", "Dominica": "dm", "Dominican Republic": "do", "DR Congo": "cd",
  "Ecuador": "ec", "Egypt": "eg", "El Salvador": "sv", "England": "gb-eng", "Equatorial Guinea": "gq", "Eritrea": "er", "Estonia": "ee", "Eswatini": "sz", "Ethiopia": "et",
  "Faroe Islands": "fo", "Fiji": "fj", "Finland": "fi", "France": "fr",
  "Gabon": "ga", "Gambia": "gm", "Georgia": "ge", "Germany": "de", "Ghana": "gh", "Gibraltar": "gi", "Greece": "gr", "Grenada": "gd", "Guam": "gu", "Guatemala": "gt", "Guinea": "gn", "Guinea-Bissau": "gw", "Guyana": "gy",
  "Haiti": "ht", "Honduras": "hn", "Hong Kong": "hk", "Hungary": "hu",
  "Iceland": "is", "India": "in", "Indonesia": "id", "Iran": "ir", "Iraq": "iq", "Israel": "il", "Italy": "it", "Ivory Coast": "ci",
  "Jamaica": "jm", "Japan": "jp", "Jordan": "jo",
  "Kazakhstan": "kz", "Kenya": "ke", "Kosovo": "xk", "Kuwait": "kw", "Kyrgyzstan": "kg",
  "Laos": "la", "Latvia": "lv", "Lebanon": "lb", "Lesotho": "ls", "Liberia": "lr", "Libya": "ly", "Liechtenstein": "li", "Lithuania": "lt", "Luxembourg": "lu",
  "Macau": "mo", "Madagascar": "mg", "Malawi": "mw", "Malaysia": "my", "Maldives": "mv", "Mali": "ml", "Malta": "mt", "Mauritania": "mr", "Mauritius": "mu", "Mexico": "mx", "Moldova": "md", "Mongolia": "mn", "Montenegro": "me", "Montserrat": "ms", "Morocco": "ma", "Mozambique": "mz", "Myanmar": "mm",
  "Namibia": "na", "Nepal": "np", "Netherlands": "nl", "New Caledonia": "nc", "New Zealand": "nz", "Nicaragua": "ni", "Niger": "ne", "Nigeria": "ng", "North Korea": "kp", "North Macedonia": "mk", "Northern Ireland": "gb-nir", "Norway": "no",
  "Oman": "om",
  "Pakistan": "pk", "Palestine": "ps", "Panama": "pa", "Papua New Guinea": "pg", "Paraguay": "py", "Peru": "pe", "Philippines": "ph", "Poland": "pl", "Portugal": "pt", "Puerto Rico": "pr",
  "Qatar": "qa",
  "Republic of Ireland": "ie", "Romania": "ro", "Russia": "ru", "Rwanda": "rw",
  "San Marino": "sm", "Saudi Arabia": "sa", "Scotland": "gb-sct", "Senegal": "sn", "Serbia": "rs", "Seychelles": "sc", "Sierra Leone": "sl", "Singapore": "sg", "Slovakia": "sk", "Slovenia": "si", "Solomon Islands": "sb", "Somalia": "so", "South Africa": "za", "South Korea": "kr", "South Sudan": "ss", "Spain": "es", "Sri Lanka": "lk", "St. Kitts and Nevis": "kn", "St. Lucia": "lc", "St. Vincent and the Grenadines": "vc", "Sudan": "sd", "Suriname": "sr", "Sweden": "se", "Switzerland": "ch", "Syria": "sy",
  "Tahiti": "pf", "Tajikistan": "tj", "Tanzania": "tz", "Thailand": "th", "Togo": "tg", "Tonga": "to", "Trinidad and Tobago": "tt", "Tunisia": "tn", "Turkey": "tr", "Turkmenistan": "tm", "Turks and Caicos": "tc",
  "Uganda": "ug", "Ukraine": "ua", "United Arab Emirates": "ae", "United States": "us", "Uruguay": "uy", "Uzbekistan": "uz",
  "Vanuatu": "vu", "Venezuela": "ve", "Vietnam": "vn",
  "Wales": "gb-wls",
  "Yemen": "ye",
  "Zambia": "zm", "Zimbabwe": "zw"
};

// ==========================================
// 2. FIFA AFFILIATED NATIONS LIST
// ==========================================
const allCountryNames = [
  "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", 
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Chinese Taipei", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", 
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "DR Congo", 
  "Ecuador", "Egypt", "El Salvador", "England", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
  "Faroe Islands", "Fiji", "Finland", "France", 
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
  "Haiti", "Honduras", "Hong Kong", "Hungary", 
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Israel", "Italy", "Ivory Coast", 
  "Jamaica", "Japan", "Jordan", 
  "Kazakhstan", "Kenya", "Kosovo", "Kuwait", "Kyrgyzstan", 
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
  "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", 
  "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Northern Ireland", "Norway", 
  "Oman", 
  "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", 
  "Qatar", 
  "Republic of Ireland", "Romania", "Russia", "Rwanda", 
  "San Marino", "Saudi Arabia", "Scotland", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St. Kitts and Nevis", "St. Lucia", "St. Vincent and the Grenadines", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
  "Tahiti", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", 
  "Uganda", "Ukraine", "United Arab Emirates", "United States", "Uruguay", "Uzbekistan", 
  "Vanuatu", "Venezuela", "Vietnam", 
  "Wales", 
  "Yemen", 
  "Zambia", "Zimbabwe"
];

// ==========================================
// 3. MASTER TOURNAMENTS LIST
// ==========================================
const allTournamentsList = [
  // --- FIFA WORLD CUP (1930–2026) ---
  { id: "worldcup/2026", name: "FIFA World Cup 2026", article: "2026_FIFA_World_Cup" },
  { id: "worldcup/2022", name: "FIFA World Cup 2022", article: "2022_FIFA_World_Cup" },
  { id: "worldcup/2018", name: "FIFA World Cup 2018", article: "2018_FIFA_World_Cup" },
  { id: "worldcup/2014", name: "FIFA World Cup 2014", article: "2014_FIFA_World_Cup" },
  { id: "worldcup/2010", name: "FIFA World Cup 2010", article: "2010_FIFA_World_Cup" },
  { id: "worldcup/2006", name: "FIFA World Cup 2006", article: "2006_FIFA_World_Cup" },
  { id: "worldcup/2002", name: "FIFA World Cup 2002", article: "2002_FIFA_World_Cup" },
  { id: "worldcup/1998", name: "FIFA World Cup 1998", article: "1998_FIFA_World_Cup" },
  { id: "worldcup/1994", name: "FIFA World Cup 1994", article: "1994_FIFA_World_Cup" },
  { id: "worldcup/1990", name: "FIFA World Cup 1990", article: "1990_FIFA_World_Cup" },
  { id: "worldcup/1986", name: "FIFA World Cup 1986", article: "1986_FIFA_World_Cup" },
  { id: "worldcup/1982", name: "FIFA World Cup 1982", article: "1982_FIFA_World_Cup" },
  { id: "worldcup/1978", name: "FIFA World Cup 1978", article: "1978_FIFA_World_Cup" },
  { id: "worldcup/1974", name: "FIFA World Cup 1974", article: "1974_FIFA_World_Cup" },
  { id: "worldcup/1970", name: "FIFA World Cup 1970", article: "1970_FIFA_World_Cup" },
  { id: "worldcup/1966", name: "FIFA World Cup 1966", article: "1966_FIFA_World_Cup" },
  { id: "worldcup/1962", name: "FIFA World Cup 1962", article: "1962_FIFA_World_Cup" },
  { id: "worldcup/1958", name: "FIFA World Cup 1958", article: "1958_FIFA_World_Cup" },
  { id: "worldcup/1954", name: "FIFA World Cup 1954", article: "1954_FIFA_World_Cup" },
  { id: "worldcup/1950", name: "FIFA World Cup 1950", article: "1950_FIFA_World_Cup" },
  { id: "worldcup/1938", name: "FIFA World Cup 1938", article: "1938_FIFA_World_Cup" },
  { id: "worldcup/1934", name: "FIFA World Cup 1934", article: "1934_FIFA_World_Cup" },
  { id: "worldcup/1930", name: "FIFA World Cup 1930", article: "1930_FIFA_World_Cup" },

  // --- UEFA EURO (1960–2024) ---
  { id: "euro/2024", name: "UEFA Euro 2024", article: "UEFA_Euro_2024" },
  { id: "euro/2020", name: "UEFA Euro 2020", article: "UEFA_Euro_2020" },
  { id: "euro/2016", name: "UEFA Euro 2016", article: "UEFA_Euro_2016" },
  { id: "euro/2012", name: "UEFA Euro 2012", article: "UEFA_Euro_2012" },
  { id: "euro/2008", name: "UEFA Euro 2008", article: "UEFA_Euro_2008" },
  { id: "euro/2004", name: "UEFA Euro 2004", article: "UEFA_Euro_2004" },
  { id: "euro/2000", name: "UEFA Euro 2000", article: "UEFA_Euro_2000" },
  { id: "euro/1996", name: "UEFA Euro 1996", article: "UEFA_Euro_1996" },
  { id: "euro/1992", name: "UEFA Euro 1992", article: "UEFA_Euro_1992" },
  { id: "euro/1988", name: "UEFA Euro 1988", article: "UEFA_Euro_1988" },
  { id: "euro/1984", name: "UEFA Euro 1984", article: "UEFA_Euro_1984" },
  { id: "euro/1980", name: "UEFA Euro 1980", article: "UEFA_Euro_1980" },
  { id: "euro/1976", name: "UEFA Euro 1976", article: "UEFA_Euro_1976" },
  { id: "euro/1972", name: "UEFA Euro 1972", article: "UEFA_Euro_1972" },
  { id: "euro/1968", name: "UEFA Euro 1968", article: "UEFA_Euro_1968" },
  { id: "euro/1964", name: "UEFA Euro 1964", article: "UEFA_Euro_1964" },
  { id: "euro/1960", name: "UEFA Euro 1960", article: "UEFA_Euro_1960" },

  // --- CONTINENTAL & OTHER TOURNAMENTS ---
  { id: "copa/2024", name: "Copa América 2024", article: "2024_Copa_América" },
  { id: "copa/2021", name: "Copa América 2021", article: "2021_Copa_América" },
  { id: "copa/2019", name: "Copa América 2019", article: "2019_Copa_América" },
  { id: "copa/2016", name: "Copa América 2016", article: "Copa_América_Centenario" },
  { id: "copa/2015", name: "Copa América 2015", article: "2015_Copa_América" },
  { id: "afcon/2023", name: "AFCON 2023", article: "2023_Africa_Cup_of_Nations" },
  { id: "asiancup/2023", name: "AFC Asian Cup 2023", article: "2023_AFC_Asian_Cup" }
];

// ==========================================
// 4. APP STATE & ELEMENT REFERENCES
// ==========================================
let activeCountry = null;
let activeTournament = null;
let currentMatches = [];
const logoCache = {};

const countriesGrid = document.getElementById("countriesGrid");
const tournamentsGrid = document.getElementById("tournamentsGrid");
const matchesList = document.getElementById("matchesList");
const searchInput = document.getElementById("searchInput");
const loader = document.getElementById("loader");

// ==========================================
// 5. COUNTRY LIST RENDERING & SEARCH
// ==========================================
function renderCountries(filterTerm = "") {
  if (!countriesGrid) return;
  countriesGrid.innerHTML = "";
  
  const filteredCountries = allCountryNames.filter(name => 
    name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  filteredCountries.forEach(countryName => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => selectCountry(countryName);
    
    const code = countryCodes[countryName] || "un";
    const flagUrl = `https://flagcdn.com/w80/${code}.png`;

    card.innerHTML = `
      <img src="${flagUrl}" alt="${countryName} flag" class="country-flag-icon" />
      <h3>${countryName}</h3>
    `;
    countriesGrid.appendChild(card);
  });
}

function handleSearch() {
  if (searchInput) renderCountries(searchInput.value);
}

// ==========================================
// 6. WIKIPEDIA LOGO FETCHING & CACHING
// ==========================================
async function getTournamentLogo(article) {
  if (!article) return "";
  if (logoCache[article]) return logoCache[article];

  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(article)}`);
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    
    const logoUrl = data.thumbnail?.source || data.originalimage?.source || "";
    logoCache[article] = logoUrl;
    return logoUrl;
  } catch (err) {
    console.warn(`Could not load logo for ${article}`, err);
    return "";
  }
}

// ==========================================
// 7. TOURNAMENT SELECTION GRID
// ==========================================
function selectCountry(countryName) {
  activeCountry = countryName;
  const titleElem = document.getElementById("tournamentTitle");
  if (titleElem) titleElem.textContent = `Tournaments containing ${countryName}`;
  
  if (!tournamentsGrid) return;
  tournamentsGrid.innerHTML = "";

  allTournamentsList.forEach(tournament => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => fetchTournamentMatches(tournament);

    const safeId = tournament.id.replace(/[^a-zA-Z0-9]/g, "-");

    card.innerHTML = `
      <div class="card-icon" id="logo-box-${safeId}">
        <div class="logo-spinner"></div>
      </div>
      <h3>${tournament.name}</h3>
    `;
    tournamentsGrid.appendChild(card);

    getTournamentLogo(tournament.article).then(logoUrl => {
      const container = document.getElementById(`logo-box-${safeId}`);
      if (container) {
        if (logoUrl) {
          container.innerHTML = `
            <img 
              src="${logoUrl}" 
              alt="${tournament.name}" 
              class="tournament-logo-img" 
              referrerpolicy="no-referrer"
            >
          `;
        } else {
          container.innerHTML = `
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#2563eb">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          `;
        }
      }
    });
  });

  navigateTo("tournaments");
}

// ==========================================
// 8. FETCH MATCH DATA (OPENFOOTBALL API)
// ==========================================
async function fetchTournamentMatches(tournament) {
  activeTournament = tournament;
  if (loader) loader.style.display = "block";
  if (matchesList) matchesList.innerHTML = "";

  const [rawType, year] = tournament.id.split("/");
  // Normalize string: removes hyphens so "world-cup" becomes "worldcup"
  const type = rawType.toLowerCase().replace(/[^a-z]/g, "");

  let url = "";
  
  if (type === "worldcup") {
    url = `https://raw.githubusercontent.com/openfootball/worldcup.json/master/${year}/worldcup.json`;
  } else if (type === "euro") {
    url = `https://raw.githubusercontent.com/openfootball/euro.json/master/${year}/euro.json`;
  } else if (type === "copa") {
    url = `https://raw.githubusercontent.com/openfootball/copa-america.json/master/${year}/copa.json`;
  } else if (type === "afcon") {
    url = `https://raw.githubusercontent.com/openfootball/africa-cup.json/master/${year}/africa.json`;
  } else if (type === "asiancup") {
    url = `https://raw.githubusercontent.com/openfootball/asian-cup.json/master/${year}/asian.json`;
  } else if (type === "goldcup") {
    url = `https://raw.githubusercontent.com/openfootball/gold-cup.json/master/${year}/goldcup.json`;
  } else {
    url = `https://raw.githubusercontent.com/openfootball/${type}.json/master/${year}/${type}.json`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Database record not found for this specific year in the open API.");
    
    const data = await response.json();
    const teamMatches = [];
    
    let allMatches = [];
    if (data.rounds) {
      data.rounds.forEach(r => {
        if (r.matches) {
          r.matches.forEach(m => {
            if (!m.round) m.round = r.name;
            allMatches.push(m);
          });
        }
      });
    } else if (data.matches) {
      allMatches = data.matches;
    }

    allMatches.forEach(match => {
      const team1Name = typeof match.team1 === "object" ? match.team1.name : (match.team1 || "TBD");
      const team2Name = typeof match.team2 === "object" ? match.team2.name : (match.team2 || "TBD");

      if (team1Name === activeCountry || team2Name === activeCountry) {
        let scoreText = "N/A";
        let resultClass = "draw";

        if (match.score) {
          const scoreSource = match.score.et || match.score.ft || [0, 0];
          const s1 = scoreSource[0];
          const s2 = scoreSource[1];
          scoreText = `${s1} - ${s2}`;

          if (match.score.p) {
            scoreText += ` (${match.score.p[0]}-${match.score.p[1]} pen)`;
          }

          if (team1Name === activeCountry) {
            resultClass = s1 > s2 ? "win" : s1 < s2 ? "loss" : "draw";
          } else {
            resultClass = s2 > s1 ? "win" : s2 < s1 ? "loss" : "draw";
          }
        }

        teamMatches.push({
          date: match.date || "Unknown",
          stage: match.round || "Match",
          home: team1Name,
          away: team2Name,
          score: scoreText,
          result: resultClass,
          raw: match
        });
      }
    });

    renderMatches(teamMatches);

  } catch (error) {
    console.error(error);
    if (matchesList) {
      matchesList.innerHTML = `
        <div class="card" style="border: 1px solid red;">
          <h3>No Open Records Found</h3>
          <p style="color:var(--text-muted, #9ca3af); margin-top:10px;">
            ${activeCountry} either did not qualify for ${tournament.name}, or the open-source database does not have public records for this specific bracket yet.
          </p>
        </div>`;
    }
  } finally {
    if (loader) loader.style.display = "none";
    navigateTo("matches");
  }
}

// ==========================================
// 9. RENDER MATCH CARDS WITH CLICK HANDLERS
// ==========================================
function renderMatches(teamMatches) {
  currentMatches = teamMatches;
  
  const matchesTitle = document.getElementById("matchesTitle");
  if (matchesTitle) matchesTitle.textContent = `${activeCountry} - ${activeTournament.name}`;
  if (!matchesList) return;

  matchesList.innerHTML = "";

  if (teamMatches.length === 0) {
    matchesList.innerHTML = `
      <div class="card">
        <p style="color:var(--text-muted, #9ca3af);">${activeCountry} did not play any matches in ${activeTournament.name}.</p>
      </div>`;
    return;
  }

  teamMatches.forEach((match, index) => {
    const item = document.createElement("div");
    item.className = `match-card ${match.result}`;
    item.style.cursor = "pointer";
    item.onclick = () => openMatchDetails(index);

    item.innerHTML = `
      <div class="match-info">
        <div class="match-meta">
          <span class="match-stage">${match.stage}</span>
          <span class="match-date">${match.date}</span>
        </div>
        <span class="match-teams">${match.home} vs ${match.away}</span>
      </div>
      <div class="match-score">${match.score}</div>
    `;
    matchesList.appendChild(item);
  });
}

// ==========================================
// 10. MATCH DETAIL MODAL POPUP
// ==========================================
// ==========================================
// 10. MATCH DETAIL MODAL POPUP (GOALS & HIGHLIGHTS)
// ==========================================
function openMatchDetails(index) {
  const matchData = currentMatches[index];
  if (!matchData) return;

  const raw = matchData.raw || {};
  const modal = document.getElementById("matchModal");
  const modalBody = document.getElementById("modalBody");
  if (!modal || !modalBody) return;

  // Venue & Match Info
  const venue = [raw.stadium?.name, raw.city].filter(Boolean).join(", ") || "Venue details unavailable";

  // 1. Goal Events Breakdown (Who, When, Extra info)
  let goalsHTML = "";
  if (raw.goals && raw.goals.length > 0) {
    const listItems = raw.goals.map(g => {
      const minute = g.minute || g.min || "?";
      const player = typeof g.name === "string" ? g.name : (g.player || "Unknown Player");
      
      // Determine penalty or own goal tags
      let tag = "";
      if (g.penalty || g.pen) tag = " <span style='color:#ef4444;'>(Penalty)</span>";
      if (g.owngoal || g.og) tag = " <span style='color:#f59e0b;'>(Own Goal)</span>";

      // Team attribution (if available in raw data)
      let teamLabel = "";
      if (g.team === 1 || g.team === raw.team1?.name) {
        teamLabel = `<strong style="color:var(--text-muted, #9ca3af);">(${matchData.home})</strong>`;
      } else if (g.team === 2 || g.team === raw.team2?.name) {
        teamLabel = `<strong style="color:var(--text-muted, #9ca3af);">(${matchData.away})</strong>`;
      }

      return `
        <li style="margin-bottom: 6px; font-size: 0.95rem;">
          <span style="display:inline-block; width: 45px; font-weight: bold; color: #10b981;">⚽ ${minute}'</span>
          <strong>${player}</strong> ${teamLabel}${tag}
        </li>`;
    }).join("");

    goalsHTML = `
      <div class="modal-section" style="margin-top: 16px;">
        <h4 style="margin-bottom: 10px; font-size: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px;">Goals & Timings</h4>
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${listItems}
        </ul>
      </div>`;
  } else {
    goalsHTML = `
      <div class="modal-section" style="margin-top: 16px;">
        <h4 style="margin-bottom: 6px; font-size: 1rem;">Goals & Timings</h4>
        <p style="color:#9ca3af; font-size:0.85rem; margin:0;">
          No detailed goalscorer minute logs are stored for this specific historical match.
        </p>
      </div>`;
  }

  // 2. Generate Highlights Search Link
  const searchQuery = encodeURIComponent(`${matchData.home} vs ${matchData.away} ${activeTournament ? activeTournament.name : ''} highlights`);
  const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;

  const highlightsHTML = `
    <div class="modal-section" style="margin-top: 20px; text-align: center;">
      <a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer" 
         style="display: inline-flex; align-items: center; gap: 8px; justify-content: center; width: 100%; padding: 10px 16px; background-color: #ff0000; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 0.9rem; box-shadow: 0 2px 8px rgba(255, 0, 0, 0.3);">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        Watch Match Highlights
      </a>
    </div>`;

  // Render Full Modal Content
  modalBody.innerHTML = `
    <div class="modal-header" style="display:flex; justify-content:space-between; font-size:0.85rem; color:#9ca3af; margin-bottom:12px;">
      <span>${matchData.stage}</span>
      <span>${matchData.date}</span>
    </div>

    <div class="modal-scoreboard" style="display:flex; justify-content:space-between; align-items:center; text-align:center; background:rgba(255,255,255,0.05); padding:12px; border-radius:8px;">
      <div class="modal-team" style="flex:1; font-weight:bold; font-size:1.1rem;">${matchData.home}</div>
      <div class="modal-score-box" style="font-size:1.4rem; font-weight:bold; color:#2563eb; padding:0 12px;">${matchData.score}</div>
      <div class="modal-team" style="flex:1; font-weight:bold; font-size:1.1rem;">${matchData.away}</div>
    </div>

    <div class="modal-venue" style="font-size:0.85rem; color:#9ca3af; margin-top:10px; text-align:center;">
      📍 ${venue}
    </div>

    ${goalsHTML}
    ${highlightsHTML}
  `;

  modal.style.display = "flex";
}

function closeMatchModal() {
  const modal = document.getElementById("matchModal");
  if (modal) modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("matchModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// ==========================================
// 11. BREADCRUMB ROUTING CONTROLLER
// ==========================================
function navigateTo(view) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const searchBox = document.getElementById("search-box");
  
  const crumbTournaments = document.getElementById("crumb-tournaments");
  const crumbMatches = document.getElementById("crumb-matches");
  const sep1 = document.getElementById("sep-1");
  const sep2 = document.getElementById("sep-2");

  if (view === "countries") {
    const vCountries = document.getElementById("view-countries");
    if (vCountries) vCountries.classList.add("active");
    if (searchBox) searchBox.style.display = "block";
    if (sep1) sep1.style.display = "none";
    if (sep2) sep2.style.display = "none";
    if (crumbTournaments) crumbTournaments.style.display = "none";
    if (crumbMatches) crumbMatches.style.display = "none";
  } 
  else if (view === "tournaments") {
    const vTournaments = document.getElementById("view-tournaments");
    if (vTournaments) vTournaments.classList.add("active");
    if (searchBox) searchBox.style.display = "none";
    if (sep1) sep1.style.display = "inline";
    if (crumbTournaments) {
      crumbTournaments.style.display = "inline";
      crumbTournaments.textContent = activeCountry;
      crumbTournaments.classList.add("active");
    }
    if (sep2) sep2.style.display = "none";
    if (crumbMatches) crumbMatches.style.display = "none";
  } 
  else if (view === "matches") {
    const vMatches = document.getElementById("view-matches");
    if (vMatches) vMatches.classList.add("active");
    if (searchBox) searchBox.style.display = "none";
    if (sep2) sep2.style.display = "inline";
    if (crumbMatches) {
      crumbMatches.style.display = "inline";
      crumbMatches.textContent = activeTournament ? activeTournament.name : "";
      crumbMatches.classList.add("active");
    }
    if (crumbTournaments) crumbTournaments.classList.remove("active");
  }
}

// ==========================================
// 12. INITIALIZE APP
// ==========================================
renderCountries();
