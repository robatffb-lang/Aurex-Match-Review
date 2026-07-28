// Country Name to ISO Code Map for Flag CDN
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

// EVERY SINGLE FIFA AFFILIATED NATION (211 Countries)
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

// EVERY MAJOR TOURNAMENT IN FOOTBALL HISTORY
const allTournamentsList = [
  // World Cups
  { id: "worldcup/2026", name: "FIFA World Cup 2026" },
  { id: "worldcup/2022", name: "FIFA World Cup 2022" },
  { id: "worldcup/2018", name: "FIFA World Cup 2018" },
  { id: "worldcup/2014", name: "FIFA World Cup 2014" },
  { id: "worldcup/2010", name: "FIFA World Cup 2010" },
  { id: "worldcup/2006", name: "FIFA World Cup 2006" },
  { id: "worldcup/2002", name: "FIFA World Cup 2002" },
  { id: "worldcup/1998", name: "FIFA World Cup 1998" },
  { id: "worldcup/1994", name: "FIFA World Cup 1994" },
  { id: "worldcup/1990", name: "FIFA World Cup 1990" },
  { id: "worldcup/1986", name: "FIFA World Cup 1986" },
  { id: "worldcup/1982", name: "FIFA World Cup 1982" },
  { id: "worldcup/1978", name: "FIFA World Cup 1978" },
  { id: "worldcup/1974", name: "FIFA World Cup 1974" },
  { id: "worldcup/1970", name: "FIFA World Cup 1970" },
  { id: "worldcup/1966", name: "FIFA World Cup 1966" },
  { id: "worldcup/1962", name: "FIFA World Cup 1962" },
  { id: "worldcup/1958", name: "FIFA World Cup 1958" },
  { id: "worldcup/1954", name: "FIFA World Cup 1954" },
  { id: "worldcup/1950", name: "FIFA World Cup 1950" },
  { id: "worldcup/1938", name: "FIFA World Cup 1938" },
  { id: "worldcup/1934", name: "FIFA World Cup 1934" },
  { id: "worldcup/1930", name: "FIFA World Cup 1930" },
  
  // European Championships
  { id: "euro/2024", name: "UEFA Euro 2024" },
  { id: "euro/2020", name: "UEFA Euro 2020" },
  { id: "euro/2016", name: "UEFA Euro 2016" },
  { id: "euro/2012", name: "UEFA Euro 2012" },
  { id: "euro/2008", name: "UEFA Euro 2008" },
  { id: "euro/2004", name: "UEFA Euro 2004" },
  { id: "euro/2000", name: "UEFA Euro 2000" },
  { id: "euro/1996", name: "UEFA Euro 1996" },
  
  // Copa America
  { id: "copa/2024", name: "Copa America 2024" },
  { id: "copa/2021", name: "Copa America 2021" },
  { id: "copa/2019", name: "Copa America 2019" },
  { id: "copa/2016", name: "Copa America 2016" },
  { id: "copa/2015", name: "Copa America 2015" },
  
  // Africa Cup of Nations & Asian Cup
  { id: "afcon/2023", name: "AFCON 2023" },
  { id: "asiancup/2023", name: "Asian Cup 2023" }
];

// App State
let activeCountry = null;
let activeTournament = null;

// Element References
const countriesGrid = document.getElementById("countriesGrid");
const tournamentsGrid = document.getElementById("tournamentsGrid");
const matchesList = document.getElementById("matchesList");
const searchInput = document.getElementById("searchInput");
const loader = document.getElementById("loader");

function renderCountries(filterTerm = "") {
  countriesGrid.innerHTML = "";
  
  const filteredCountries = allCountryNames.filter(name => 
    name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  filteredCountries.forEach(countryName => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => selectCountry(countryName);
    
    // Look up the 2-letter code, fallback to "un" if missing
    const code = countryCodes[countryName] || "un";
    const flagUrl = `https://flagcdn.com/w80/${code}.png`;

    card.innerHTML = `
      <img src="${flagUrl}" alt="${countryName} flag" class="country-flag-icon" />
      <h3>${countryName}</h3>
    `;
    countriesGrid.appendChild(card);
  });
}

// RENDER EVERY TOURNAMENT WHEN A COUNTRY IS CLICKED
function selectCountry(countryName) {
  activeCountry = countryName;
  document.getElementById("tournamentTitle").textContent = `Tournaments containing ${countryName}`;
  
  tournamentsGrid.innerHTML = "";
  allTournamentsList.forEach(tournament => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => fetchTournamentMatches(tournament);
    card.innerHTML = `
      <div class="card-icon">🏆</div>
      <h3>${tournament.name}</h3>
    `;
    tournamentsGrid.appendChild(card);
  });

  navigateTo("tournaments");
}

// FETCH EVERY 1V1 MATCH DYNAMICALLY
async function fetchTournamentMatches(tournament) {
  activeTournament = tournament;
  loader.style.display = "block";
  matchesList.innerHTML = "";

  const [type, year] = tournament.id.split("/");
  let url = "";
  
  if (type === "worldcup") url = `https://raw.githubusercontent.com/openfootball/worldcup.json/master/${year}/worldcup.json`;
  else if (type === "euro") url = `https://raw.githubusercontent.com/openfootball/euro.json/master/${year}/euro.json`;
  else url = `https://raw.githubusercontent.com/openfootball/worldcup.json/master/2022/worldcup.json`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Database record not found for this specific year in the open API.");
    
    const data = await response.json();
    const teamMatches = [];
    
    let allMatches = [];
    if (data.rounds) {
        // Capture round/group name from parent container if match.round is missing
        data.rounds.forEach(r => {
            r.matches.forEach(m => {
                if (!m.round) m.round = r.name;
                allMatches.push(m);
            });
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
          // Prioritize extra-time (et) or fall back to full-time (ft) scores
          const scoreSource = match.score.et || match.score.ft || [0, 0];
          const s1 = scoreSource[0];
          const s2 = scoreSource[1];
          scoreText = `${s1} - ${s2}`;

          // Optional: Add penalty shootout indicator if applicable
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
          stage: match.round || "Match", // Extracted stage name
          home: team1Name,
          away: team2Name,
          score: scoreText,
          result: resultClass
        });
      }
    });

    renderMatches(teamMatches);

  } catch (error) {
    console.error(error);
    matchesList.innerHTML = `
      <div class="card" style="border: 1px solid red;">
        <h3>No Open Records Found</h3>
        <p style="color:var(--text-muted); margin-top:10px;">
          ${activeCountry} either did not qualify for ${tournament.name}, or the open-source database does not have public records for this specific bracket yet.
        </p>
      </div>`;
  } finally {
    loader.style.display = "none";
    navigateTo("matches");
  }
}

// Updated renderMatches function to show the stage badge
function renderMatches(matches) {
  document.getElementById("matchesTitle").textContent = `${activeCountry} - ${activeTournament.name}`;
  matchesList.innerHTML = "";

  if (matches.length === 0) {
    matchesList.innerHTML = `<p>${activeCountry} did not play any matches in ${activeTournament.name}.</p>`;
    return;
  }

  matches.forEach(match => {
    const item = document.createElement("div");
    item.className = `match-card ${match.result}`;
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

// BREADCRUMB ROUTING LOGIC
function navigateTo(view) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const searchBox = document.getElementById("search-box");
  
  const crumbTournaments = document.getElementById("crumb-tournaments");
  const crumbMatches = document.getElementById("crumb-matches");
  const sep1 = document.getElementById("sep-1");
  const sep2 = document.getElementById("sep-2");

  if (view === "countries") {
    document.getElementById("view-countries").classList.add("active");
    searchBox.style.display = "block";
    sep1.style.display = "none";
    sep2.style.display = "none";
    crumbTournaments.style.display = "none";
    crumbMatches.style.display = "none";
  } 
  else if (view === "tournaments") {
    document.getElementById("view-tournaments").classList.add("active");
    searchBox.style.display = "none";
    sep1.style.display = "inline";
    crumbTournaments.style.display = "inline";
    crumbTournaments.textContent = activeCountry;
    crumbTournaments.classList.add("active");
    sep2.style.display = "none";
    crumbMatches.style.display = "none";
  } 
  else if (view === "matches") {
    document.getElementById("view-matches").classList.add("active");
    searchBox.style.display = "none";
    sep2.style.display = "inline";
    crumbMatches.style.display = "inline";
    crumbMatches.textContent = activeTournament.name;
    crumbTournaments.classList.remove("active");
    crumbMatches.classList.add("active");
  }
}

function handleSearch() {
  renderCountries(searchInput.value);
}

// INIT APP
renderCountries();