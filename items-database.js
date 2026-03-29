// ================= BASE DE DATOS DE ITEMS =================
// Sistema completo de filtrado, búsqueda y visualización

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('items-database')) {
        initializeItemsDB();
    }
});

function initializeItemsDB() {
    // BASE DE DATOS COMPLETA DE ITEMS (92 items)
    const itemsData = [
        // ========== CONSUMIBLES (15 items) ==========
        // Isla Inicial
        {id: 1, name: "Pez Globo Azul", emoji: "🐡", category: "consumible", rarity: "COMUN", 
         desc: "Un poco espinoso pero nutritivo", bioma: "isla", value: 25, stats: "+15⚡"},
        {id: 2, name: "Sardina", emoji: "🐟", category: "consumible", rarity: "COMUN", 
         desc: "Un pez pequeño básico para recuperación", bioma: "isla", value: 15, stats: "+10⚡"},
        
        // Bosque Encantado
        {id: 3, name: "Pez Luminoso", emoji: "🐠", category: "consumible", rarity: "RARO", 
         desc: "Brilla con luz propia en la oscuridad", bioma: "bosque", value: 60, stats: "+20⚡"},
        {id: 4, name: "Anguila Mágica", emoji: "🐍", category: "consumible", rarity: "EPICO", 
         desc: "Energía eléctrica pura para aventureros", bioma: "bosque", value: 150, stats: "+30⚡"},
        
        // Desierto Carmesí
        {id: 5, name: "Pez de Arena", emoji: "🦎", category: "consumible", rarity: "COMUN", 
         desc: "Duro por fuera, tierno por dentro", bioma: "desierto", value: 30, stats: "+15⚡"},
        {id: 6, name: "Escarabajo Dorado", emoji: "🪲", category: "consumible", rarity: "RARO", 
         desc: "Un manjar crujiente del desierto", bioma: "desierto", value: 80, stats: "+25⚡"},
        
        // Volcán Infernal
        {id: 7, name: "Pez de Obsidiana", emoji: "🖤", category: "consumible", rarity: "EPICO", 
         desc: "Pez resistente al calor extremo del volcán", bioma: "volcan", value: 200, stats: "+45⚡"},
        
        // Reino Glacial
        {id: 8, name: "Calamar Helado", emoji: "🦑", category: "consumible", rarity: "RARO", 
         desc: "Refrescante y nutritivo para climas fríos", bioma: "glacial", value: 100, stats: "+35⚡"},
        {id: 9, name: "Bacalao Polar", emoji: "🐟", category: "consumible", rarity: "COMUN", 
         desc: "Pez de aguas gélidas con buen sabor", bioma: "glacial", value: 50, stats: "+30⚡"},
        
        // Reino Celestial
        {id: 10, name: "Pez Estelar", emoji: "⭐", category: "consumible", rarity: "LEGENDARIO", 
         desc: "Esencia de las estrellas condensada en pez", bioma: "celestial", value: 500, stats: "+60⚡"},
        
        // Pociones Especiales
        {id: 11, name: "Poción de Energía", emoji: "🧪", category: "consumible", rarity: "EPICO", 
         desc: "Recupera toda tu stamina instantáneamente", bioma: "tienda", value: 1500, stats: "+100%⚡"},
        {id: 12, name: "Poción de Vida", emoji: "❤️🧪", category: "consumible", rarity: "RARO", 
         desc: "Cura heridas leves y moderadas en combate", bioma: "tienda", value: 800, stats: "Curación"},
        {id: 13, name: "Elixir Divino", emoji: "✨🧪", category: "consumible", rarity: "LEGENDARIO", 
         desc: "Recupera toda tu salud y stamina", bioma: "especial", value: 3000, stats: "Curación total"},
        {id: 14, name: "Fruta Mística", emoji: "🍇", category: "consumible", rarity: "EPICO", 
         desc: "Fruta rara que aumenta stats temporalmente", bioma: "bosque", value: 500, stats: "+50⚡ | +10 stats"},
        {id: 15, name: "Pan Celestial", emoji: "🍞", category: "consumible", rarity: "RARO", 
         desc: "Horneado con ingredientes divinos", bioma: "celestial", value: 250, stats: "+40⚡"},

        // ========== MATERIALES (45 items) ==========
        // Materiales Básicos
        {id: 16, name: "Piedra", emoji: "🪨", category: "material", rarity: "COMUN", 
         desc: "Una piedra común para construcción básica", bioma: "todos", value: 10, stats: "Material básico"},
        {id: 17, name: "Hierro", emoji: "🥈", category: "material", rarity: "COMUN", 
         desc: "Metal común para herramientas y armaduras", bioma: "todos", value: 50, stats: "Material común"},
        {id: 18, name: "Oro", emoji: "💰", category: "material", rarity: "RARO", 
         desc: "Metal precioso brillante muy valorado", bioma: "desierto", value: 200, stats: "Material raro"},
        {id: 19, name: "Diamante", emoji: "💎", category: "material", rarity: "EPICO", 
         desc: "Gema preciosa extremadamente dura", bioma: "todos", value: 1000, stats: "Material épico"},
        {id: 20, name: "Esmeralda", emoji: "🟢", category: "material", rarity: "EPICO", 
         desc: "Gema verde de gran valor", bioma: "bosque", value: 900, stats: "Material épico"},
        
        // Isla Inicial
        {id: 21, name: "Concha Marina", emoji: "🐚", category: "material", rarity: "COMUN", 
         desc: "Recuerdo de la costa para artesanías", bioma: "isla", value: 25, stats: "Decoración"},
        {id: 22, name: "Coral Luminoso", emoji: "🪸", category: "material", rarity: "RARO", 
         desc: "Coral que brilla bajo el agua con luz tenue", bioma: "isla", value: 150, stats: "Material especial"},
        {id: 23, name: "Cristal Salino", emoji: "🧂", category: "material", rarity: "RARO", 
         desc: "Cristal puro de mar con propiedades mágicas", bioma: "isla", value: 120, stats: "Material mágico"},
        {id: 24, name: "Perla Marina", emoji: "⚪", category: "material", rarity: "EPICO", 
         desc: "Perla perfecta de las profundidades", bioma: "isla", value: 800, stats: "Joya preciosa"},
        
        // Bosque Encantado
        {id: 25, name: "Madera Élfica", emoji: "🪵", category: "material", rarity: "COMUN", 
         desc: "Madera mágica flexible y resistente", bioma: "bosque", value: 30, stats: "Material básico"},
        {id: 26, name: "Hoja Brillante", emoji: "🍃", category: "material", rarity: "COMUN", 
         desc: "Hoja que nunca se marchita", bioma: "bosque", value: 20, stats: "Material natural"},
        {id: 27, name: "Cristal Verde", emoji: "💚", category: "material", rarity: "RARO", 
         desc: "Cristal imbuido de naturaleza, aumenta vitalidad", bioma: "bosque", value: 200, stats: "Material mágico"},
        {id: 28, name: "Hierro Élfico", emoji: "🥈", category: "material", rarity: "EPICO", 
         desc: "Metal ligero imbuido con magia forestal", bioma: "bosque", value: 800, stats: "Material épico"},
        {id: 29, name: "Semilla Mágica", emoji: "🌱", category: "material", rarity: "EPICO", 
         desc: "Podría brotar algo increíble con potencial mágico", bioma: "bosque", value: 1000, stats: "Drop Ent"},
        {id: 30, name: "Resina Ancestral", emoji: "🟤", category: "material", rarity: "RARO", 
         desc: "Resina milenaria de árboles antiguos", bioma: "bosque", value: 300, stats: "Material artesanal"},
        {id: 31, name: "Raíz Sagrada", emoji: "🌿", category: "material", rarity: "LEGENDARIO", 
         desc: "Raíz del árbol más antiguo del bosque", bioma: "bosque", value: 2000, stats: "Material legendario"},
        
        // Desierto Carmesí
        {id: 32, name: "Arena Roja", emoji: "⏳", category: "material", rarity: "COMUN", 
         desc: "Arena fina con propiedades abrasivas", bioma: "desierto", value: 15, stats: "Material básico"},
        {id: 33, name: "Vidrio del Desierto", emoji: "🔶", category: "material", rarity: "RARO", 
         desc: "Vidrio formado por el calor extremo", bioma: "desierto", value: 180, stats: "Material raro"},
        {id: 34, name: "Cristal Fuego", emoji: "🔥", category: "material", rarity: "RARO", 
         desc: "Emana calor constante, nunca se enfría", bioma: "desierto", value: 350, stats: "Material ígneo"},
        {id: 35, name: "Topacio Ardiente", emoji: "🟠", category: "material", rarity: "EPICO", 
         desc: "Gema del desierto que brilla con luz propia", bioma: "desierto", value: 850, stats: "Joya preciosa"},
        {id: 36, name: "Núcleo Solar", emoji: "☀️", category: "material", rarity: "LEGENDARIO", 
         desc: "Pequeño fragmento de sol, poderosa fuente de energía", bioma: "desierto", value: 3000, stats: "Drop Faraón"},
        {id: 37, name: "Polvo de Tormenta", emoji: "🌪️", category: "material", rarity: "RARO", 
         desc: "Polvo cargado con electricidad estática", bioma: "desierto", value: 250, stats: "Material elemental"},
        
        // Volcán Infernal
        {id: 38, name: "Roca Volcánica", emoji: "🌑", category: "material", rarity: "COMUN", 
         desc: "Piedra porosa del volcán", bioma: "volcan", value: 40, stats: "Material básico"},
        {id: 39, name: "Lava Sólida", emoji: "🔥", category: "material", rarity: "RARO", 
         desc: "Magma enfriado que conserva calor interno", bioma: "volcan", value: 400, stats: "Material ígneo"},
        {id: 40, name: "Obsidiana", emoji: "🖤", category: "material", rarity: "RARO", 
         desc: "Vidrio volcánico de gran dureza", bioma: "volcan", value: 500, stats: "Material resistente"},
        {id: 41, name: "Cristal Infernal", emoji: "🌋", category: "material", rarity: "EPICO", 
         desc: "Forjado en el núcleo volcánico con fuego eterno", bioma: "volcan", value: 1200, stats: "Material épico"},
        {id: 42, name: "Rubí Ardiente", emoji: "🔴", category: "material", rarity: "EPICO", 
         desc: "Gema roja que pulsa con energía ígnea", bioma: "volcan", value: 1500, stats: "Joya legendaria"},
        {id: 43, name: "Corazón Ígneo", emoji: "❤️‍🔥", category: "material", rarity: "LEGENDARIO", 
         desc: "Late con el calor del volcán, fuente de poder elemental", bioma: "volcan", value: 4000, stats: "Drop Señor Fuego"},
        {id: 44, name: "Escama de Dragón", emoji: "🐲", category: "material", rarity: "LEGENDARIO", 
         desc: "Escama casi indestructible de dragón antiguo", bioma: "volcan", value: 3500, stats: "Material legendario"},
        
        // Reino Glacial
        {id: 45, name: "Nieve Eterna", emoji: "❄️", category: "material", rarity: "COMUN", 
         desc: "Nieve que nunca se derrite", bioma: "glacial", value: 35, stats: "Material básico"},
        {id: 46, name: "Hielo Eterno", emoji: "🧊", category: "material", rarity: "RARO", 
         desc: "Hielo que nunca se derrite, frío absoluto", bioma: "glacial", value: 300, stats: "Material helado"},
        {id: 47, name: "Cristal Azul", emoji: "💎", category: "material", rarity: "EPICO", 
         desc: "Cristal frío que emite brillo azulado", bioma: "glacial", value: 900, stats: "Material épico"},
        {id: 48, name: "Zafiro Glacial", emoji: "🔵", category: "material", rarity: "EPICO", 
         desc: "Gema azul con frío eterno en su interior", bioma: "glacial", value: 1300, stats: "Joya preciosa"},
        {id: 49, name: "Núcleo Ártico", emoji: "❄️", category: "material", rarity: "LEGENDARIO", 
         desc: "Corazón de glaciar con frío capaz de congelar el tiempo", bioma: "glacial", value: 3500, stats: "Drop Yeti"},
        {id: 50, name: "Colmillo Polar", emoji: "🦴", category: "material", rarity: "EPICO", 
         desc: "Gran colmillo de bestia ártica para armas exóticas", bioma: "glacial", value: 1100, stats: "Material especial"},
        {id: 51, name: "Escarcha Antigua", emoji: "🌨️", category: "material", rarity: "RARO", 
         desc: "Escarcha congelada desde hace milenios", bioma: "glacial", value: 400, stats: "Material helado"},
        
        // Reino Celestial
        {id: 52, name: "Nube Solidificada", emoji: "☁️", category: "material", rarity: "RARO", 
         desc: "Nube convertida en materia sólida", bioma: "celestial", value: 450, stats: "Material celestial"},
        {id: 53, name: "Pluma Divina", emoji: "🪶", category: "material", rarity: "RARO", 
         desc: "Pluma caída del cielo, ligera como el aire", bioma: "celestial", value: 500, stats: "Material sagrado"},
        {id: 54, name: "Cristal Sagrado", emoji: "✨", category: "material", rarity: "EPICO", 
         desc: "Brilla con luz divina que purifica todo alrededor", bioma: "celestial", value: 2000, stats: "Material épico"},
        {id: 55, name: "Ópalo Celestial", emoji: "🌈", category: "material", rarity: "EPICO", 
         desc: "Gema multicolor de belleza hipnótica", bioma: "celestial", value: 1800, stats: "Joya legendaria"},
        {id: 56, name: "Fragmento de Estrella", emoji: "🌠", category: "material", rarity: "LEGENDARIO", 
         desc: "Trozo de cometa caído con energía cósmica", bioma: "celestial", value: 4500, stats: "10% drop jefes"},
        {id: 57, name: "Orbe Celestial", emoji: "🔮", category: "material", rarity: "DIVINO", 
         desc: "Contiene energía de las nubes, permite visión divina", bioma: "celestial", value: 10000, stats: "Drop Serafín"},
        {id: 58, name: "Polvo de Estrellas", emoji: "✨", category: "material", rarity: "LEGENDARIO", 
         desc: "Polvo brillante de constelaciones lejanas", bioma: "celestial", value: 5000, stats: "Material divino"},
        {id: 59, name: "Halo Radiante", emoji: "⭕", category: "material", rarity: "DIVINO", 
         desc: "Aro de luz pura que bendice a quien lo porta", bioma: "celestial", value: 12000, stats: "Material divino"},
        {id: 60, name: "Esencia Astral", emoji: "🌌", category: "material", rarity: "LEGENDARIO", 
         desc: "Esencia condensada del espacio mismo", bioma: "celestial", value: 6000, stats: "Material cósmico"},

        // ========== EQUIPAMIENTO (22 items) ==========
        // Picos (7)
        {id: 61, name: "Pico de Madera", emoji: "🪵⛏️", category: "equipo", subcategory: "pico", rarity: "COMUN", 
         desc: "Herramienta básica para empezar a minar", bioma: "todos", value: 100, stats: "Dura:20 | Efic:1.0x"},
        {id: 62, name: "Pico de Piedra", emoji: "🪨⛏️", category: "equipo", subcategory: "pico", rarity: "COMUN", 
         desc: "Más firme, permite picar hierro", bioma: "todos", value: 250, stats: "Dura:40 | Efic:1.5x"},
        {id: 63, name: "Pico de Hierro", emoji: "🥈⛏️", category: "equipo", subcategory: "pico", rarity: "RARO", 
         desc: "Resistente para metales preciosos", bioma: "todos", value: 800, stats: "Dura:75 | Efic:2.0x"},
        {id: 64, name: "Pico de Oro", emoji: "✨⛏️", category: "equipo", subcategory: "pico", rarity: "EPICO", 
         desc: "Veloz y eficiente para encontrar gemas", bioma: "todos", value: 2000, stats: "Dura:50 | Efic:3.0x"},
        {id: 65, name: "Pico de Obsidiana", emoji: "🖤⛏️", category: "equipo", subcategory: "pico", rarity: "EPICO", 
         desc: "Capaz de extraer materiales volcánicos", bioma: "volcan", value: 3500, stats: "Dura:100 | Efic:3.5x"},
        {id: 66, name: "Pico Ártico", emoji: "❄️⛏️", category: "equipo", subcategory: "pico", rarity: "LEGENDARIO", 
         desc: "Forjado en frío extremo, extrae cristales sagrados", bioma: "glacial", value: 8000, stats: "Dura:150 | Efic:4.5x"},
        {id: 67, name: "Pico Celestial", emoji: "✨⛏️", category: "equipo", subcategory: "pico", rarity: "DIVINO", 
         desc: "El pico definitivo para materiales divinos", bioma: "celestial", value: 20000, stats: "Dura:300 | Efic:6.0x"},
        
        // Armas (5)
        {id: 68, name: "Espada de Madera", emoji: "🗡️", category: "equipo", subcategory: "arma", rarity: "COMUN", 
         desc: "Espada simple tallada a mano para principiantes", bioma: "todos", value: 150, stats: "ATK:+10 | DEF:+2"},
        {id: 69, name: "Espada de Hierro", emoji: "⚔️", category: "equipo", subcategory: "arma", rarity: "RARO", 
         desc: "Hoja de hierro afilada y equilibrada", bioma: "todos", value: 600, stats: "ATK:+25 | DEF:+5"},
        {id: 70, name: "Sable del Desierto", emoji: "🏜️⚔️", category: "equipo", subcategory: "arma", rarity: "EPICO", 
         desc: "Espada curva para el calor del desierto", bioma: "desierto", value: 1800, stats: "ATK:+40 | +10% desierto"},
        {id: 71, name: "Filo Infernal", emoji: "🔥🗡️", category: "equipo", subcategory: "arma", rarity: "LEGENDARIO", 
         desc: "Su hoja quema al tacto del enemigo", bioma: "volcan", value: 5000, stats: "ATK:+65 | Daño fuego"},
        {id: 72, name: "Excalibur Divina", emoji: "🔱", category: "equipo", subcategory: "arma", rarity: "DIVINO", 
         desc: "La espada legendaria que emite luz cegadora", bioma: "celestial", value: 15000, stats: "ATK:+100 | +25% crítico"},
        
        // Armaduras (5)
        {id: 73, name: "Peto de Cuero", emoji: "🧥", category: "equipo", subcategory: "armadura", rarity: "COMUN", 
         desc: "Protección ligera para aventureros novatos", bioma: "todos", value: 200, stats: "DEF:+15 | Salud:+20"},
        {id: 74, name: "Armadura de Hierro", emoji: "🛡️", category: "equipo", subcategory: "armadura", rarity: "RARO", 
         desc: "Placas de metal que ofrecen defensa sólida", bioma: "todos", value: 800, stats: "DEF:+35 | Salud:+40"},
        {id: 75, name: "Manto de Escamas", emoji: "🦎🛡️", category: "equipo", subcategory: "armadura", rarity: "EPICO", 
         desc: "Hecho de escamas resistentes al sol", bioma: "desierto", value: 2500, stats: "DEF:+50 | +30% calor"},
        {id: 76, name: "Coraza Volcánica", emoji: "🌋🛡️", category: "equipo", subcategory: "armadura", rarity: "LEGENDARIO", 
         desc: "Protección pesada forjada en lava", bioma: "volcan", value: 6000, stats: "DEF:+75 | Inmune fuego"},
        {id: 77, name: "Armadura Celestial", emoji: "👼🛡️", category: "equipo", subcategory: "armadura", rarity: "DIVINO", 
         desc: "Armadura bendecida que reduce el daño masivamente", bioma: "celestial", value: 12000, stats: "DEF:+100 | +20% esquivar"},
        
        // Accesorios (5)
        {id: 78, name: "Amuleto de Suerte", emoji: "🍀", category: "equipo", subcategory: "accesorio", rarity: "RARO", 
         desc: "Aumenta ligeramente las probabilidades de éxito", bioma: "eventos", value: 1500, stats: "+5% drop raro"},
        {id: 79, name: "Anillo de Escarcha", emoji: "💍", category: "equipo", subcategory: "accesorio", rarity: "EPICO", 
         desc: "Mantiene tu cuerpo frío y estable en climas helados", bioma: "glacial", value: 3000, stats: "Resist frío +50%"},
        {id: 80, name: "Reliquia Solar", emoji: "🏵️", category: "equipo", subcategory: "accesorio", rarity: "LEGENDARIO", 
         desc: "Emana energía cálida reconfortante constantemente", bioma: "desierto", value: 7000, stats: "Regen +1⚡/min"},
        {id: 81, name: "Collar de la Luna", emoji: "🌙", category: "equipo", subcategory: "accesorio", rarity: "EPICO", 
         desc: "Brilla con la luz de la luna llena en la oscuridad", bioma: "especial", value: 4000, stats: "Visión nocturna"},
        {id: 82, name: "Brazalete Divino", emoji: "⚡", category: "equipo", subcategory: "accesorio", rarity: "DIVINO", 
         desc: "Canaliza poder divino a través de tu cuerpo", bioma: "celestial", value: 15000, stats: "+50 todos stats"},

        // ========== ESPECIALES (10 items) ==========
        {id: 83, name: "Llave Antigua", emoji: "🗝️", category: "especial", rarity: "EPICO", 
         desc: "Llave oxidada de diseño misterioso. ¿Abrirá algún tesoro?", bioma: "especial", value: 5000, stats: "Acceso secreto"},
        {id: 84, name: "Mapa del Tesoro", emoji: "🗺️", category: "especial", rarity: "LEGENDARIO", 
         desc: "Mapa que marca la ubicación de un tesoro legendario", bioma: "especial", value: 10000, stats: "Revela tesoro"},
        {id: 85, name: "Huevo Dorado", emoji: "🥚", category: "especial", rarity: "DIVINO", 
         desc: "Huevo misterioso que emite brillo dorado. ¿Qué saldrá?", bioma: "especial", value: 20000, stats: "Mascota legendaria"},
        {id: 86, name: "Libro Ancestral", emoji: "📕", category: "especial", rarity: "LEGENDARIO", 
         desc: "Grimorio con hechizos olvidados", bioma: "bosque", value: 8000, stats: "Desbloquea magias"},
        {id: 87, name: "Reloj de Arena Mágico", emoji: "⌛", category: "especial", rarity: "EPICO", 
         desc: "Permite manipular el tiempo brevemente", bioma: "desierto", value: 6000, stats: "Habilidad temporal"},
        {id: 88, name: "Brújula Celestial", emoji: "🧭", category: "especial", rarity: "LEGENDARIO", 
         desc: "Siempre apunta hacia tu objetivo más deseado", bioma: "celestial", value: 9000, stats: "Navegación perfecta"},
        {id: 89, name: "Caja Misteriosa", emoji: "📦", category: "especial", rarity: "RARO", 
         desc: "Nadie sabe qué hay dentro hasta abrirla", bioma: "todos", value: 1000, stats: "Item aleatorio"},
        {id: 90, name: "Moneda de la Fortuna", emoji: "🪙", category: "especial", rarity: "EPICO", 
         desc: "Duplica las recompensas de una misión", bioma: "especial", value: 5000, stats: "2x recompensas"},
        {id: 91, name: "Gema de Resurrección", emoji: "💎", category: "especial", rarity: "DIVINO", 
         desc: "Revive automáticamente si mueres en combate", bioma: "especial", value: 25000, stats: "1 revivir"},
        {id: 92, name: "Tótem Antiguo", emoji: "🗿", category: "especial", rarity: "LEGENDARIO", 
         desc: "Estatua sagrada que otorga bendiciones", bioma: "isla", value: 15000, stats: "+20% XP global"},
    ];

    // Variables del sistema
    let currentFilter = "all";
    let currentRarity = "all";
    let currentBioma = "all";
    let currentSort = {field: "name", direction: "asc"};
    let currentPage = 1;
    const itemsPerPage = 15;
    let filteredItems = [...itemsData];

    // Inicialización
    updateCounters();
    setupEventListeners();
    filterAndSortItems();

    function setupEventListeners() {
        // Filtros de categoría
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.dataset.filter;
                currentPage = 1;
                filterAndSortItems();
            });
        });

        // Filtros de rareza
        document.querySelectorAll('.rarity-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.rarity-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentRarity = this.dataset.rarity;
                currentPage = 1;
                filterAndSortItems();
            });
        });

        // Filtros de bioma
        document.querySelectorAll('.bioma-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.bioma-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentBioma = this.dataset.bioma;
                currentPage = 1;
                filterAndSortItems();
            });
        });

        // Búsqueda
        const searchInput = document.getElementById('itemSearch');
        const clearSearch = document.getElementById('clearSearch');

        searchInput.addEventListener('input', function() {
            currentPage = 1;
            filterAndSortItems();
        });

        clearSearch.addEventListener('click', function() {
            searchInput.value = '';
            currentPage = 1;
            filterAndSortItems();
        });

        // Ordenación
        document.querySelectorAll('.sortable').forEach(th => {
            th.addEventListener('click', function() {
                const field = this.dataset.sort;

                document.querySelectorAll('.sortable').forEach(col => {
                    col.classList.remove('sorted-asc', 'sorted-desc');
                });

                if (currentSort.field === field) {
                    currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
                } else {
                    currentSort.field = field;
                    currentSort.direction = 'asc';
                }

                const icon = this.querySelector('i');
                icon.className = currentSort.direction === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
                this.classList.add(currentSort.direction === 'asc' ? 'sorted-asc' : 'sorted-desc');

                filterAndSortItems();
            });
        });

        // Paginación
        document.getElementById('prevPage').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderTable();
                updatePagination();
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        });

        document.getElementById('nextPage').addEventListener('click', () => {
            const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderTable();
                updatePagination();
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        });

        // Modal
        document.querySelector('.close-modal').addEventListener('click', closeModal);
        document.getElementById('itemDetailModal').addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeModal();
        });
    }

    function filterAndSortItems() {
        const searchTerm = document.getElementById('itemSearch').value.toLowerCase();

        filteredItems = itemsData.filter(item => {
            // Filtro categoría
            if (currentFilter !== 'all') {
                if (currentFilter === 'equipo') {
                    if (item.category !== 'equipo') return false;
                } else if (item.category !== currentFilter) {
                    return false;
                }
            }

            // Filtro rareza
            if (currentRarity !== 'all' && item.rarity !== currentRarity) {
                return false;
            }

            // Filtro bioma
            if (currentBioma !== 'all' && item.bioma !== currentBioma) {
                return false;
            }

            // Búsqueda
            if (searchTerm && !item.name.toLowerCase().includes(searchTerm) &&
                !item.desc.toLowerCase().includes(searchTerm)) {
                return false;
            }

            return true;
        });

        // Ordenar
        filteredItems.sort((a, b) => {
            let aValue, bValue;

            switch(currentSort.field) {
                case 'name':
                    aValue = a.name.toLowerCase();
                    bValue = b.name.toLowerCase();
                    break;
                case 'category':
                    aValue = a.category + (a.subcategory || '');
                    bValue = b.category + (b.subcategory || '');
                    break;
                case 'rarity':
                    const rarityOrder = {COMUN: 1, RARO: 2, EPICO: 3, LEGENDARIO: 4, DIVINO: 5};
                    aValue = rarityOrder[a.rarity] || 0;
                    bValue = rarityOrder[b.rarity] || 0;
                    break;
                case 'bioma':
                    aValue = a.bioma;
                    bValue = b.bioma;
                    break;
                case 'value':
                    aValue = a.value;
                    bValue = b.value;
                    break;
                default:
                    aValue = a.name;
                    bValue = b.name;
            }

            if (currentSort.direction === 'asc') {
                return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
            } else {
                return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
            }
        });

        currentPage = 1;
        renderTable();
        updateCounters();
        updatePagination();
    }

    function renderTable() {
        const tbody = document.getElementById('itemsTableBody');
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageItems = filteredItems.slice(startIndex, endIndex);

        tbody.innerHTML = '';

        if (pageItems.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="6" class="no-results">
                        <i class="fas fa-search"></i>
                        No se encontraron items con los filtros actuales.
                        <br><small>Intenta cambiar los filtros o la búsqueda.</small>
                    </td>
                </tr>
            `;
            return;
        }

        pageItems.forEach(item => {
            const row = document.createElement('tr');
            row.dataset.itemId = item.id;

            let categoryName = getCategoryName(item);
            let biomaName = getBiomaName(item.bioma);

            row.innerHTML = `
                <td>
                    <div class="item-cell">
                        <span class="item-emoji-cell">${item.emoji}</span>
                        <span class="item-name-cell">${item.name}</span>
                    </div>
                </td>
                <td>${categoryName}</td>
                <td><span class="rarity-badge-table ${item.rarity.toLowerCase()}">${item.rarity}</span></td>
                <td>${biomaName}</td>
                <td class="value-cell">${item.value.toLocaleString()} N</td>
                <td class="stats-cell">${item.stats}</td>
            `;

            row.addEventListener('click', () => showItemDetail(item.id));
            tbody.appendChild(row);
        });
    }

    function getCategoryName(item) {
        switch(item.category) {
            case 'consumible': return '🍎 Consumible';
            case 'material': return '⛏️ Material';
            case 'especial': return '✨ Especial';
            case 'equipo':
                switch(item.subcategory) {
                    case 'pico': return '🔨 Pico';
                    case 'arma': return '⚔️ Arma';
                    case 'armadura': return '🛡️ Armadura';
                    case 'accesorio': return '💍 Accesorio';
                    default: return '⚔️ Equipo';
                }
            default: return item.category;
        }
    }

    function getBiomaName(bioma) {
        const biomaMap = {
            'isla': '🏝️ Isla',
            'bosque': '🌳 Bosque',
            'desierto': '🏜️ Desierto',
            'volcan': '🌋 Volcán',
            'glacial': '❄️ Glacial',
            'celestial': '☁️ Celestial',
            'todos': '🌍 Todos',
            'tienda': '🏪 Tienda',
            'eventos': '🎉 Eventos',
            'especial': '🎯 Especial'
        };
        return biomaMap[bioma] || bioma;
    }

    function updateCounters() {
        document.getElementById('totalItems').textContent = itemsData.length;
        document.getElementById('showingItems').textContent = filteredItems.length;
        document.getElementById('filteredItems').textContent = itemsData.length - filteredItems.length;
    }

    function updatePagination() {
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        document.getElementById('currentPage').textContent = currentPage;
        document.getElementById('totalPages').textContent = totalPages;
        document.getElementById('prevPage').disabled = currentPage === 1;
        document.getElementById('nextPage').disabled = currentPage === totalPages || totalPages === 0;
    }

    function showItemDetail(itemId) {
        const item = itemsData.find(i => i.id === itemId);
        if (!item) return;

        const modal = document.getElementById('itemDetailModal');
        
        document.getElementById('detailName').textContent = item.name;
        document.getElementById('detailEmoji').textContent = item.emoji;
        
        const detailRarity = document.getElementById('detailRarity');
        detailRarity.textContent = item.rarity;
        detailRarity.className = 'detail-rarity ' + item.rarity.toLowerCase();
        
        document.getElementById('detailDesc').textContent = item.desc;
        document.getElementById('detailLocation').textContent = getBiomaName(item.bioma);
        
        const detailStats = document.getElementById('detailStats');
        detailStats.innerHTML = '';
        if (item.stats) {
            const stats = item.stats.split('|');
            stats.forEach(stat => {
                const statDiv = document.createElement('div');
                statDiv.className = 'stat-badge';
                statDiv.innerHTML = `
                    <i class="fas fa-chart-bar"></i>
                    <span>${stat.trim()}</span>
                `;
                detailStats.appendChild(statDiv);
            });
        }
        
        document.getElementById('detailValue').textContent = `${item.value.toLocaleString()} Nekos`;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.getElementById('itemDetailModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}