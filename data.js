// Nedenstående objektliste udgør løsningens "Grundmængde"
// Variablen "products" er global - dvs. tilgængelig for hele løsningen.
const products = [
    {
        id: 1,
        title: "Varulv",
        description: "Når mørket falder på, er ingen, hvad de giver sig ud for at være. Stol på dine instinkter, find ulvene blandt landsbyens folk, og pas på, hvem du deler dine hemmeligheder med. For når natten kommer, er det ikke alle, der vågner igen.",
        price: 5999,
        category: "Bluff",
        rating: 5,
        color: "sort",
        image: "https://via.placeholder.com/300x200?text=Smartphone+Pro+X"
    },
    {
        id: 2,
        title: "Hint",
        description: "Tiden er knap, og ordene er få. Giv de rigtige ledetråde, tænk hurtigt, og få dit hold til at gætte det hemmelige ord. Men pas på, for et forkert hint kan sende dem langt væk fra svaret. Kan du holde hovedet koldt, når presset stiger?",
        price: 1299,
        category: "Kommunikation",
        rating: 4,
        color: "hvid",
        image: "https://via.placeholder.com/300x200?text=Hovedtelefoner"
    },
    {
        id: 3,
        title: "Dobble",
        description: "Øjnene skal være skarpe, og reaktionerne endnu skarpere. Find det ene symbol, der matcher, før dine modstandere gør det. Det lyder nemt, men når tempoet stiger, bliver selv de mest åbenlyse symboler svære at få øje på.",
        price: 199,
        category: "Observation",
        rating: 4,
        color: "blå",
        image: "https://via.placeholder.com/300x200?text=Bomuld+T-Shirt"
    },
    {
        id: 4,
        title: "Uno",
        description: "Venner bliver til rivaler, når det sidste kort nærmer sig. Slip af med dine kort, vend spillet på hovedet, og brug de særlige kort med omtanke. For i UNO kan en sikker sejr forsvinde på et øjeblik.",
        price: 3499,
        category: "Strategi",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Designerstol"
    },
    {
        id: 5,
        title: "Vildkatten",
        description: "Midt i et hav af billeder gælder det om at holde fokus. Find motiverne hurtigere end de andre, og vær den første til at samle rækken. Men jo længere spillet skrider frem, desto sværere bliver det at finde det, du leder efter.",
        price: 299,
        category: "Observation",
        rating: 4,
        color: "sort",
        image: "https://via.placeholder.com/300x200?text=JavaScript+Bog"
    },
    {
        id: 6,
        title: "Det Dårlige Selskab",
        description: "De bedste svar er sjældent de mest rigtige. Tænk som de andre, gæt deres mærkelige tankegang, og undgå at skille dig for meget ud. Her handler det ikke om viden, men om at kende selskabet omkring bordet.",
        price: 2499,
        category: "Bluff",
        rating: 5,
        color: "sort",
        image: "https://via.placeholder.com/300x200?text=Smartwatch+Series+7"
    },
    {
        id: 7,
        title: "Hitster",
        description: "Skru op for musikken og rejs gennem årtiernes største hits. Placer sangene i den rigtige rækkefølge, test din musikviden, og oplev minderne vælte frem. Men hvor godt kender du egentlig soundtracken til de sidste mange årtier?",
        price: 499,
        category: "Observation",
        rating: 3,
        color: "blå",
        image: "https://via.placeholder.com/300x200?text=Jeans+Bukser"
    },
    {
        id: 8,
        title: "Twister",
        description: "Højre hånd på rød, venstre fod på grøn. Det starter uskyldigt, men snart er alle filtret ind i hinanden. Hold balancen, bevar roen, og gør alt for ikke at ramme gulvet først.",
        price: 8999,
        category: "Balance",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },
    {
        id: 9,
        title: "Codenames",
        description: "Bag hvert ord gemmer der sig mere, end man først tror. Find forbindelserne, aflæs ledetrådene, og samarbejd med dit hold for at afsløre de rigtige agenter. Men vær forsigtig, for ét forkert valg kan bringe jer tættere på modstanderen eller endnu værre, snigmorderen.",
        price: 8999,
        category: "Kommunikation",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },
    {
        id: 10,
        title: "Klodsmajor",
        description: "Ét forkert træk kan være nok. Fjern forsigtigt en klods, stable tårnet højere, og håb at konstruktionen holder. Spændingen vokser med hver runde, for jo højere tårnet bliver, desto større bliver faldet.",
        price: 8999,
        category: "Balance",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    }, 
    {
        id: 11,
        title: "Hvem er Hvem?",
        description: "Stil de rigtige spørgsmål, fjern de forkerte kandidater, og kom tættere på svaret. Hver detalje kan være afgørende, men et forkert gæt kan koste sejren. Kan du afsløre den hemmelige person, før din modstander gør det?",
        price: 8999,
        category: "Gætteri",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    },
     {
        id: 12,
        title: "Spisebord",
        description: "Stort spisebord i massivt eg med plads til 8 personer.",
        price: 8999,
        category: "møbler",
        rating: 5,
        color: "brun",
        image: "https://via.placeholder.com/300x200?text=Spisebord"
    }
];

