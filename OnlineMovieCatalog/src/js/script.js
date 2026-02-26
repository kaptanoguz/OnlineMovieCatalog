// Mock Puter object for local operation
const puter = {
    kv: {
        get: async (key) => localStorage.getItem(key),
        set: async (key, val) => localStorage.setItem(key, val)
    },
    ai: {
        chat: async () => {
            console.warn("AI Analysis requires Puter SDK or an API Key. Showing mock response.");
            return null;
        }
    }
};

// TMDB API configuration
const TMDB_API_KEY = 'd284adc3808d9b1018ccd8dba4937168';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMG_BASE = 'https://image.tmdb.org/t/p/w500';

const LANG_DATA = {
    'tr-TR': {
        search_placeholder: 'Film/Dizi ara...',
        search_btn: 'Ara',
        movies: 'Filmler',
        tv_shows: 'Diziler',
        sorting: 'Sıralama',
        popularity: 'Popülerlik',
        rating: 'Puan',
        newest: 'En Yeni',
        revenue: 'Hasılat',
        curated_lists: 'Özel Listeler',
        top_rated: 'En İyi Filmler',
        popular: 'Popüler',
        now_playing: 'Vizyondakiler',
        upcoming: 'Yakında',
        random: 'Rastgele',
        random_title: 'Rastgele Öneri',
        wishlist: '⭐ Listem',
        settings_title: 'Ayarlar',
        settings_title_text: '⚙️ Ayarlar',
        content_filters: '🎬 İçerik Filtreleri',
        show_adult: 'Yetişkin İçerikleri Göster (+18)',
        only_adult: 'Sadece Yetişkin İçerikleri Göster',
        min_vote_count: 'Minimum Oy Sayısı',
        min_rating: 'Minimum Puan (0-10)',
        release_info: '📅 Yayın Bilgisi',
        year_from: 'Başlangıç Yılı',
        year_to: 'Bitiş Yılı',
        region_language: '🌍 Bölge ve Dil',
        language_label: 'Dil',
        lang_tr: 'Türkçe',
        lang_en: 'İngilizce',
        region_label: 'Bölge',
        region_tr: 'Türkiye',
        region_us: 'ABD',
        always_use_filters: 'Aramalarda her zaman bu filtreleri kullan',
        cancel: 'İptal',
        save: 'Kaydet',
        ai_analysis: '🤖 AI Analizi',
        generate_analysis: 'Analiz Oluştur',
        add_to_list: '➕ Listeye Ekle',
        remove_from_list: '➖ Listeden Çıkar',
        director: 'Yönetmen',
        creator: 'Yapımcı',
        cast: 'Oyuncular',
        budget: 'Bütçe',
        episodes: 'Bölüm Sayısı',
        revenue_label: 'Hasılat',
        status: 'Durum',
        popularity_label: 'Popülerlik',
        watch_options: '🔗 İzleme Seçenekleri:',
        search_google: '🔍 Google\'da Ara',
        trailer: '🎬 Fragman',
        analyzing: 'Analiz yapılıyor...',
        preparing_ai: 'AI Analizi Hazırlanıyor...',
        failed_analysis: 'Analiz oluşturulamadı.',
        error_label: 'Hata',
        check_api_key: 'Lütfen API anahtarınızı ve internet bağlantınızı kontrol edin.',
        regenerate_analysis: 'Analizi Yenile',
        empty_wishlist: 'Listeniz şu an boş.',
        api_settings: '🔑 API Ayarları',
        api_key_label: 'Grok (xAI) API Anahtarı',
        api_key_placeholder: 'xai-...',
        api_key_warning: '⚠️ Lütfen Ayarlar panelinden Grok (xAI) API anahtarınızı girin.',
        analyzing_now: 'Analiz yapılıyor...',
        trailer_title: '🍿 Fragman',
        recommended_title: '🔥 Benzer Öneriler',
        reviews_title: '💬 En İyi Yorumlar',
        series_title: '📦 Serinin Diğer Filmleri',
        read_more: 'Devamını Oku',
        read_less: 'Daha Az Göster',
        no_reviews: 'Bu içerik için henüz yorum yapılmamış.'
    },
    'en-US': {
        search_placeholder: 'Search movies/TV...',
        search_btn: 'Search',
        movies: 'Movies',
        tv_shows: 'TV Shows',
        sorting: 'Sorting',
        popularity: 'Popularity',
        rating: 'Rating',
        newest: 'Newest',
        revenue: 'Revenue',
        curated_lists: 'Curated Lists',
        top_rated: 'Top Rated',
        popular: 'Popular',
        now_playing: 'Now Playing',
        upcoming: 'Upcoming',
        random: 'Random',
        random_title: 'Random Recommendations',
        wishlist: '⭐ Wishlist',
        settings_title: 'Settings',
        settings_title_text: '⚙️ Settings',
        content_filters: '🎬 Content Filters',
        show_adult: 'Show Adult Content (+18)',
        only_adult: 'Only Show Adult Content',
        min_vote_count: 'Minimum Vote Count',
        min_rating: 'Minimum Rating (0-10)',
        release_info: '📅 Release Info',
        year_from: 'Year From',
        year_to: 'Year To',
        region_language: '🌍 Region and Language',
        language_label: 'Language',
        lang_tr: 'Turkish',
        lang_en: 'English',
        region_label: 'Region',
        region_tr: 'Turkey',
        region_us: 'USA',
        always_use_filters: 'Always use these filters in searches',
        cancel: 'Cancel',
        save: 'Save',
        ai_analysis: '🤖 AI Analysis',
        generate_analysis: 'Generate Analysis',
        add_to_list: '➕ Add to List',
        remove_from_list: '➖ Remove from List',
        director: 'Director',
        creator: 'Creator',
        cast: 'Cast',
        budget: 'Budget',
        episodes: 'Episodes',
        revenue_label: 'Revenue',
        status: 'Status',
        popularity_label: 'Popularity',
        watch_options: '🔗 Watch Options:',
        search_google: '🔍 Search Google',
        trailer: '🎬 Trailer',
        analyzing: 'Analyzing...',
        preparing_ai: 'Preparing AI Analysis...',
        failed_analysis: 'Failed to generate analysis.',
        error_label: 'Error',
        check_api_key: 'Please check your API key and internet connection.',
        regenerate_analysis: 'Regenerate Analysis',
        empty_wishlist: 'Your wishlist is currently empty.',
        api_settings: '🔑 API Settings',
        api_key_label: 'Grok (xAI) API Key',
        api_key_placeholder: 'xai-...',
        api_key_warning: '⚠️ Please enter your Grok (xAI) API key in Settings.',
        analyzing_now: 'Analyzing...',
        trailer_title: '🍿 Trailer',
        recommended_title: '🔥 More Like This',
        reviews_title: '💬 Top Reviews',
        series_title: '📦 Part of the Series',
        read_more: 'Read More',
        read_less: 'Show Less',
        no_reviews: 'No reviews available for this content.'
    }
};

function applyTranslations() {
    const lang = currentSettings.language || 'en-US';
    const dict = LANG_DATA[lang] || LANG_DATA['en-US'];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.placeholder = dict[key];
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key]) el.title = dict[key];
    });

    document.querySelectorAll('[data-i18n-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-label');
        if (dict[key]) el.label = dict[key];
    });
}

// State management
let currentMovies = [];
let genres = [];
let selectedGenres = new Set();
let wishlist = [];
let isWishlistView = false;
let currentPreferences = {};
let currentPage = 1;
let isLoading = false;
let contentType = 'movie';
let seenIds = new Set();  // Track seen movie/show IDs to prevent duplicates
let hasMore = true;

const defaultSettings = {
    includeAdult: false,
    onlyAdult: false,
    minVoteCount: 100,
    minRating: 6,
    yearFrom: 2000,
    yearTo: 2026,
    language: 'tr-TR',
    region: 'TR',
    sortBy: 'popularity.desc',
    preferredGenres: [],
    useSettingsFilters: false,
    xaiApiKey: '' // User provided xAI API Key
};

let currentSettings = { ...defaultSettings };

// Initialize the app
async function init() {
    try {
        console.log("Initializing App...");
        await loadGenres();

        // Initial default genres if none saved
        defaultSettings.preferredGenres = [28, 12, 35, 18, 14];
        currentSettings = { ...defaultSettings };

        await loadSettings();
        loadWishlist();
        applyTranslations();

        setupInfiniteScroll();
        await discoverMovies(false, true);
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}

function setupInfiniteScroll() {
    const sentinel = document.getElementById('scrollSentinel');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading && !isWishlistView) {
            discoverMovies(false, false);
        }
    }, { threshold: 0.1 });
    observer.observe(sentinel);
}

function switchContentType(type) {
    if (contentType === type) return;
    contentType = type;

    // Update UI
    document.getElementById('typeMovie').classList.toggle('active', type === 'movie');
    document.getElementById('typeTV').classList.toggle('active', type === 'tv');

    // Reset and reload
    loadGenres(); // Genres differ for TV
    discoverMovies(false, true);
}

// Load settings from Puter KV store or localStorage
async function loadSettings() {
    try {
        let settings;
        if (typeof puter !== 'undefined' && puter.kv) {
            settings = await puter.kv.get('movieSettings');
        } else {
            settings = localStorage.getItem('movieSettings');
        }

        if (settings) {
            currentSettings = { ...defaultSettings, ...JSON.parse(settings) };
        } else {
            if (genres && genres.length > 0) {
                currentSettings.preferredGenres = genres.map(genre => genre.id);
            }
        }
        applySettingsToUI();
        updateGenreChipsState();
    } catch (error) {
        console.warn('Error loading settings, using defaults:', error);
    }
}

function applySettingsToUI() {
    if (!document.getElementById('includeAdult')) return;
    document.getElementById('includeAdult').checked = currentSettings.includeAdult;
    document.getElementById('onlyAdult').checked = currentSettings.onlyAdult || false;
    document.getElementById('minVoteCount').value = currentSettings.minVoteCount;
    document.getElementById('minRating').value = currentSettings.minRating;
    document.getElementById('yearFrom').value = currentSettings.yearFrom;
    document.getElementById('yearTo').value = currentSettings.yearTo;
    document.getElementById('language').value = currentSettings.language;
    document.getElementById('region').value = currentSettings.region;
    document.getElementById('headerSortBy').value = currentSettings.sortBy;
    document.getElementById('useSettingsFilters').checked = currentSettings.useSettingsFilters;
    if (document.getElementById('xaiApiKey')) {
        document.getElementById('xaiApiKey').value = currentSettings.xaiApiKey || '';
    }
}

function updateGenreChipsState() {
    const genreChips = document.querySelectorAll('.filter-chip');
    if (currentSettings.useSettingsFilters) {
        genreChips.forEach(chip => {
            chip.classList.add('disabled');
            selectedGenres.clear();
            chip.classList.remove('active');
        });
    } else {
        genreChips.forEach(chip => {
            chip.classList.remove('disabled');
        });
    }
}

async function discoverMovies(randomize = false, reset = false) {
    if (isLoading) return;

    if (reset) {
        currentPage = 1;
        currentMovies = [];
        hasMore = true;
        seenIds = new Set();  // Clear seen IDs on reset
        const movieGrid = document.getElementById('movieGrid');
        movieGrid.innerHTML = '<div class="loading">Loading...</div>';
    }

    isLoading = true;

    try {
        const sortByValue = document.getElementById('headerSortBy').value;
        let endpoint = `${TMDB_BASE_URL}/discover/${contentType}`;

        const params = new URLSearchParams({
            api_key: TMDB_API_KEY,
            'vote_count.gte': currentSettings.minVoteCount,
            'vote_average.gte': currentSettings.minRating,
            include_adult: currentSettings.includeAdult || currentSettings.onlyAdult,
            language: currentSettings.language,
            region: currentSettings.region,
            page: currentPage
        });

        // Handle Curated Lists
        if (sortByValue.startsWith('list:')) {
            const listType = sortByValue.split(':')[1];
            endpoint = `${TMDB_BASE_URL}/${contentType}/${listType}`;
        } else {
            params.append('sort_by', sortByValue);
        }

        // Anime filtering logic: Exclude Animation (16) if not selected
        if (!selectedGenres.has(16)) {
            params.append('without_genres', '16');
        }

        if (randomize) {
            params.set('page', Math.floor(Math.random() * 20) + 1);
        }

        if (currentSettings.useSettingsFilters && currentSettings.preferredGenres.length > 0) {
            const genreString = currentSettings.preferredGenres.slice(0, 5).join('|');
            params.append('with_genres', genreString);
        } else if (!currentSettings.useSettingsFilters && selectedGenres.size > 0) {
            const genreString = Array.from(selectedGenres).join('|');
            params.append('with_genres', genreString);
        }

        if (currentSettings.yearFrom) {
            const yearKey = contentType === 'movie' ? 'primary_release_date.gte' : 'first_air_date.gte';
            params.append(yearKey, `${currentSettings.yearFrom}-01-01`);
        }
        if (currentSettings.yearTo) {
            const yearKey = contentType === 'movie' ? 'primary_release_date.lte' : 'first_air_date.lte';
            params.append(yearKey, `${currentSettings.yearTo}-12-31`);
        }

        const response = await fetch(`${endpoint}?${params.toString()}`);
        const data = await response.json();

        let results = data.results || [];

        if (currentSettings.onlyAdult) {
            results = results.filter(item => item.adult === true);
        }

        // Deduplicate results by ID
        const newResults = results.filter(item => !seenIds.has(item.id));
        newResults.forEach(item => seenIds.add(item.id));

        if (reset) {
            currentMovies = newResults;
        } else {
            currentMovies = [...currentMovies, ...newResults];
        }

        if (data.page >= data.total_pages || results.length === 0) {
            hasMore = false;
        } else {
            currentPage++;
        }

        renderMovies();
    } catch (error) {
        console.error('Error discovering content:', error);
        if (reset) document.getElementById('movieGrid').innerHTML = '<div class="loading">Error loading content</div>';
    } finally {
        isLoading = false;
    }
}

async function searchMovies() {
    const query = document.getElementById('search').value;
    if (!query) return;

    const movieGrid = document.getElementById('movieGrid');
    const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];
    movieGrid.innerHTML = `<div class="loading">${dict.analyzing || 'Searching...'}</div>`;

    try {
        const params = new URLSearchParams({
            api_key: TMDB_API_KEY,
            query: query,
            include_adult: currentSettings.includeAdult,
            language: currentSettings.language,
            region: currentSettings.region,
        });

        const response = await fetch(`${TMDB_BASE_URL}/search/${contentType}?${params.toString()}`);
        const data = await response.json();
        currentMovies = data.results;
        renderMovies();
    } catch (error) {
        console.error('Error searching content:', error);
    }
}

async function loadGenres() {
    try {
        const endpoint = contentType === 'movie' ? 'genre/movie/list' : 'genre/tv/list';
        const response = await fetch(`${TMDB_BASE_URL}/${endpoint}?api_key=${TMDB_API_KEY}&language=${currentSettings.language}`);
        const data = await response.json();
        genres = data.genres;
        renderGenreFilters();
    } catch (error) {
        console.error('Error loading genres:', error);
    }
}

function renderGenreFilters() {
    const filtersContainer = document.getElementById('filters');
    filtersContainer.innerHTML = genres.map(genre => `
        <div class="filter-chip" onclick="toggleGenre(${genre.id})" id="genre-${genre.id}">
            ${genre.name}
        </div>
    `).join('');
}

function toggleGenre(genreId) {
    const chip = document.getElementById(`genre-${genreId}`);
    if (selectedGenres.has(genreId)) {
        selectedGenres.delete(genreId);
        chip.classList.remove('active');
    } else {
        selectedGenres.add(genreId);
        chip.classList.add('active');
    }
    isWishlistView = false;
    discoverMovies(false, true);
}

function renderMovies() {
    const movieGrid = document.getElementById('movieGrid');
    const displayMovies = isWishlistView ? wishlist : currentMovies;

    if (isWishlistView && wishlist.length === 0) {
        const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];
        movieGrid.innerHTML = `<div class="loading">${dict.empty_wishlist || 'Your wishlist is currently empty.'}</div>`;
        return;
    }

    movieGrid.innerHTML = displayMovies.map((item, index) => {
        const title = item.title || item.name;
        const date = item.release_date || item.first_air_date;
        const year = date ? new Date(date).getFullYear() : 'N/A';

        return `
        <div class="movie-card" onclick="showMovieDetails(${item.id})" style="animation-delay: ${(index % 20) * 0.05}s">
            <img src="${item.poster_path ? TMDB_IMG_BASE + item.poster_path : 'https://via.placeholder.com/500x750'}" alt="${title}" loading="lazy">
            <div class="movie-info">
                <h3 class="movie-title">${title}</h3>
                <div class="movie-meta">
                    <span class="rating-badge">★ ${item.vote_average.toFixed(1)}</span>
                    <span>${year}</span>
                </div>
            </div>
        </div>
    `}).join('');
}

async function showMovieDetails(movieId) {
    const modal = document.getElementById('movieModal');
    const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];

    modal.classList.add('active');

    // Clear previous content, AI analysis and show loading
    document.querySelector('.modal-title').textContent = dict.analyzing || 'Loading...';
    document.querySelector('.modal-overview').innerHTML = '';
    document.querySelector('.modal-poster').innerHTML = '';
    document.querySelector('.ai-content').innerHTML = '';
    document.getElementById('generateAnalysisBtn').textContent = dict.generate_analysis || 'Generate AI Analysis';

    try {
        // Fetch Parallel Data with Language
        const [itemResponse, creditsResponse] = await Promise.all([
            fetch(`${TMDB_BASE_URL}/${contentType}/${movieId}?api_key=${TMDB_API_KEY}&language=${currentSettings.language}`),
            fetch(`${TMDB_BASE_URL}/${contentType}/${movieId}/credits?api_key=${TMDB_API_KEY}&language=${currentSettings.language}`)
        ]);

        const item = await itemResponse.json();
        const credits = await creditsResponse.json();

        const director = contentType === 'movie'
            ? (credits.crew.find(person => person.job === 'Director')?.name || 'N/A')
            : (item.created_by && item.created_by[0]?.name || 'N/A');

        const topCast = credits.cast.slice(0, 5).map(c => c.name).join(', ');

        const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

        const title = item.title || item.name;
        const date = item.release_date || item.first_air_date;
        const year = date ? new Date(date).getFullYear() : 'N/A';
        const runtime = contentType === 'movie' ? `${item.runtime} min` : `${item.number_of_seasons} Seasons`;

        const directorLabel = contentType === 'movie' ? (dict.director || 'Director') : (dict.creator || 'Creator');
        const castLabel = dict.cast || 'Cast';

        document.querySelector('.modal-title').textContent = title;
        document.querySelector('.modal-poster').innerHTML = `
            <img src="${item.poster_path ? TMDB_IMG_BASE + item.poster_path : 'https://via.placeholder.com/500x750'}" alt="${title}">
        `;

        document.querySelector('.modal-overview').innerHTML = `
            <div class="modal-meta" style="margin-bottom: 1rem;">
                <span class="rating-badge" style="font-size: 1.1rem;">★ ${item.vote_average.toFixed(1)}</span>
                <span style="margin-left: 10px; color: var(--text-secondary);">${year} | ${runtime} | ${item.genres.map(g => g.name).join(', ')}</span>
            </div>
            
            <p style="font-size: 1.1rem; line-height: 1.7; color: #cbd5e1; margin-bottom: 1.5rem;">${item.overview}</p>
            
            <div class="movie-details-extra" style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 16px; margin-bottom: 2rem;">
                <p style="margin-bottom: 0.5rem;"><strong style="color: #60a5fa;">🎬 ${directorLabel}:</strong> ${director}</p>
                <p style="margin-bottom: 0.5rem;"><strong style="color: #60a5fa;">👥 ${castLabel}:</strong> ${topCast}</p>
            </div>

            <div class="movie-stats">
                <div class="stat-item">
                    <span class="stat-label">${contentType === 'movie' ? (dict.budget || 'Budget') : (dict.episodes || 'Episodes')}</span>
                    <span class="stat-value">${contentType === 'movie' ? (item.budget > 0 ? formatter.format(item.budget) : 'N/A') : item.number_of_episodes}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">${contentType === 'movie' ? (dict.revenue_label || 'Revenue') : (dict.status || 'Status')}</span>
                    <span class="stat-value">${contentType === 'movie' ? (item.revenue > 0 ? formatter.format(item.revenue) : 'N/A') : item.status}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">${dict.popularity_label || 'Popularity'}</span>
                    <span class="stat-value">${Math.round(item.popularity)}</span>
                </div>
            </div>

            <div class="watch-links" style="margin-top: 1.5rem; border-top: 1px solid var(--glass-border); padding-top: 1.5rem;">
                <h4 style="color: #60a5fa; margin-bottom: 1rem; font-size: 1rem;">${dict.watch_options || '🔗 Watch Options:'}</h4>
                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                    <a href="https://www.google.com/search?q=${encodeURIComponent(title)}" target="_blank" class="btn secondary" style="font-size: 0.9rem; text-decoration: none;">${dict.search_google || '🔍 Search Google'}</a>
                    ${item.imdb_id ? `<a href="https://www.imdb.com/title/${item.imdb_id}" target="_blank" class="btn secondary" style="font-size: 0.9rem; text-decoration: none;">📽️ IMDb</a>` : ''}
                    <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(title)}+official+trailer" target="_blank" class="btn secondary" style="font-size: 0.9rem; text-decoration: none;">${dict.trailer || '🎬 Trailer'}</a>
                </div>
            </div>
        `;

        // Fetch Watch Providers
        fetchWatchProviders(movieId);

        // Wishlist button logic (Restored)
        const wishlistBtn = document.getElementById('wishlistBtn');
        const isInWishlist = wishlist.some(m => m.id === item.id);
        wishlistBtn.innerHTML = isInWishlist ? (dict.remove_from_list || '➖ Remove from List') : (dict.add_to_list || '➕ Add to List');
        wishlistBtn.onclick = () => toggleWishlist(item);

        modal.dataset.movieTitle = title;
        modal.dataset.movieYear = year;
        modal.dataset.movieOverview = item.overview;

        // Fetch & Render Pro Features
        renderTrailer(movieId);
        renderRecommendations(movieId);
        renderReviews(movieId);
        if (contentType === 'movie' && item.belongs_to_collection) {
            renderCollection(item.belongs_to_collection.id);
        } else {
            document.getElementById('collectionSection').style.display = 'none';
        }

    } catch (error) {
        console.error('Error showing movie details:', error);
        document.querySelector('.modal-title').textContent = 'Error loading content';
    }
}

async function generateAIAnalysis() {
    const modal = document.getElementById('movieModal');
    const aiContent = document.querySelector('.ai-content');
    const generateBtn = document.getElementById('generateAnalysisBtn');

    if (generateBtn.classList.contains('loading')) return;

    // Get API Key from settings
    const apiKey = currentSettings.xaiApiKey;

    if (!apiKey) {
        const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];
        aiContent.innerHTML = `<span style="color: #f87171;">${dict.api_key_warning || '⚠️ Please enter your Grok (xAI) API key in Settings.'}</span>`;
        return;
    }

    try {
        const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];
        generateBtn.classList.add('loading');
        generateBtn.textContent = dict.analyzing || 'Analyzing...';

        const movieTitle = modal.dataset.movieTitle;
        const movieYear = modal.dataset.movieYear;
        const movieOverview = modal.dataset.movieOverview;

        aiContent.innerHTML = dict.preparing_ai || 'Preparing AI Analysis...';

        const targetLang = currentSettings.language === 'tr-TR' ? 'Turkish' : 'English';
        const systemMsg = currentSettings.language === 'tr-TR' ?
            'Sen uzman bir film eleştirmenisin. CEVABININ TAMAMI TÜRKÇE OLMALIDIR. İngilizce veya başka bir dil kullanma.' :
            'You are an expert movie critic. Your entire response MUST be in English. Do not use any other language.';

        const prompt = `Provide a deep, engaging, and culturally insightful analysis of the following movie.

CRITICAL INSTRUCTIONS:
1. You MUST respond ONLY in ${targetLang}.
2. Even if the overview is in another language, your analysis MUST be in ${targetLang}.
3. Do not include any English or other languages in your analysis.

Movie: ${movieTitle} (${movieYear})
Overview: ${movieOverview}`;

        const models = ['grok-beta', 'grok-2', 'grok-2-1212'];
        let success = false;
        let lastError = "";

        for (const model of models) {
            try {
                console.log(`Trying Grok model: ${model}`);
                const response = await fetch('https://api.x.ai/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: model,
                        messages: [
                            { role: 'system', content: systemMsg },
                            { role: 'user', content: prompt }
                        ],
                        stream: false
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.choices && data.choices[0] && data.choices[0].message) {
                        const analysisText = data.choices[0].message.content;
                        // Use a more robust markdown to html conversion or just pre-wrap
                        aiContent.innerHTML = `<div style="white-space: pre-wrap;">${analysisText}</div>`;
                        success = true;
                        break;
                    }
                } else {
                    const errorData = await response.json().catch(() => ({}));
                    lastError = errorData.error?.message || response.statusText || `HTTP ${response.status}`;
                    console.warn(`Model ${model} failed: ${lastError}`);

                    // If it's 401 (Unauthorized), no point in trying other models
                    if (response.status === 401) break;
                }
            } catch (err) {
                console.warn(`Fetch error for ${model}:`, err);
                lastError = err.message;
            }
        }

        if (!success) {
            throw new Error(lastError || (dict.failed_analysis || "Failed to generate analysis."));
        }

    } catch (error) {
        const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];
        console.error('AI Error Detail:', error);
        aiContent.innerHTML = `<span style="color: #f87171;">⚠️ ${dict.error_label || 'Error'}: ${error.message}</span><br><small style="color: #94a3b8;">${dict.check_api_key || 'Please check your API key and internet connection.'}</small>`;
    } finally {
        const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];
        generateBtn.classList.remove('loading');
        generateBtn.textContent = dict.regenerate_analysis || 'Regenerate Analysis';
    }
}

function closeModal() {
    document.getElementById('movieModal').classList.remove('active');
}

function openSettings() {
    document.getElementById('settingsModal').classList.add('active');
    populateSettingsGenres();
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function populateSettingsGenres() {
    const genreSelect = document.getElementById('genreSelect');
    genreSelect.innerHTML = genres.map(genre => `
        <div class="chip ${currentSettings.preferredGenres.includes(genre.id) ? 'selected' : ''}" 
             data-genre-id="${genre.id}" onclick="toggleGenreSelection(${genre.id})">
            ${genre.name}
        </div>
    `).join('');
}

function toggleGenreSelection(genreId) {
    const chip = document.querySelector(`.chip[data-genre-id="${genreId}"]`);
    chip.classList.toggle('selected');
}

async function saveSettings() {
    const newSettings = {
        includeAdult: document.getElementById('includeAdult').checked,
        onlyAdult: document.getElementById('onlyAdult').checked,
        minVoteCount: parseInt(document.getElementById('minVoteCount').value),
        minRating: parseFloat(document.getElementById('minRating').value),
        yearFrom: parseInt(document.getElementById('yearFrom').value),
        yearTo: parseInt(document.getElementById('yearTo').value),
        language: document.getElementById('language').value,
        region: document.getElementById('region').value,
        useSettingsFilters: document.getElementById('useSettingsFilters').checked,
        xaiApiKey: document.getElementById('xaiApiKey').value.trim(),
        preferredGenres: Array.from(document.querySelectorAll('.chip.selected'))
            .map(chip => parseInt(chip.dataset.genreId))
    };

    try {
        if (typeof puter !== 'undefined' && puter.kv) {
            await puter.kv.set('movieSettings', JSON.stringify(newSettings));
        } else {
            localStorage.setItem('movieSettings', JSON.stringify(newSettings));
        }

        currentSettings = newSettings;
        closeModal('settingsModal');
        applyTranslations();
        loadGenres(); // Refresh genres for new language
        discoverMovies(false, true);
    } catch (error) {
        console.error('Error saving settings:', error);
    }
}

async function fetchWatchProviders(movieId) {
    try {
        const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];
        const response = await fetch(`${TMDB_BASE_URL}/${contentType}/${movieId}/watch/providers?api_key=${TMDB_API_KEY}`);
        const data = await response.json();
        const providers = data.results?.TR || data.results?.US; // Priority for TR providers if possible

        if (providers && providers.flatrate) {
            const movieTitle = document.querySelector('.modal-title').textContent;
            const providerHtml = providers.flatrate.map(p => {
                let directLink = providers.link; // Default fallback
                const name = p.provider_name.toLowerCase();

                // Mapping for direct search links
                if (name.includes('netflix')) {
                    directLink = `https://www.netflix.com/search?q=${encodeURIComponent(movieTitle)}`;
                } else if (name.includes('disney')) {
                    directLink = `https://www.disneyplus.com/search`;
                } else if (name.includes('amazon') || name.includes('prime video')) {
                    directLink = `https://www.amazon.com/s?k=${encodeURIComponent(movieTitle)}&i=instant-video`;
                } else if (name.includes('apple tv')) {
                    directLink = `https://tv.apple.com/search?term=${encodeURIComponent(movieTitle)}`;
                } else if (name.includes('google play')) {
                    directLink = `https://play.google.com/store/search?q=${encodeURIComponent(movieTitle)}&c=movies`;
                } else if (name.includes('blutv')) {
                    directLink = `https://www.blutv.com/ara?q=${encodeURIComponent(movieTitle)}`;
                } else if (name.includes('mubi')) {
                    directLink = `https://mubi.com/tr/search?query=${encodeURIComponent(movieTitle)}`;
                }

                return `
                    <a href="${directLink}" target="_blank" title="${p.provider_name}" style="display: inline-block; transition: transform 0.2s;">
                        <img src="https://image.tmdb.org/t/p/original${p.logo_path}" alt="${p.provider_name}" style="width: 38px; height: 38px; border-radius: 8px; border: 2px solid rgba(255,255,255,0.1); vertical-align: middle; margin-right: 8px;">
                    </a>
                `;
            }).join('');

            const watchSection = document.querySelector('.watch-links');
            const flatrateDiv = document.createElement('div');
            flatrateDiv.style.marginTop = '18px';

            const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];

            flatrateDiv.innerHTML = `
                <span style="font-size: 0.85rem; color: #94a3b8; display: block; margin-bottom: 10px;">
                    ${dict.watch_options || '📺 Available on:'}
                </span> 
                <div style="display: flex; gap: 4px; align-items: center; flex-wrap: wrap;">
                    ${providerHtml}
                </div>
            `;
            watchSection.appendChild(flatrateDiv);
        }
    } catch (error) {
        console.warn('Error fetching watch providers:', error);
    }
}

// Wishlist Logic
function loadWishlist() {
    const saved = localStorage.getItem('movieWishlist');
    if (saved) {
        wishlist = JSON.parse(saved);
    }
}

function persistWishlist() {
    localStorage.setItem('movieWishlist', JSON.stringify(wishlist));
}

function toggleWishlist(movie) {
    const index = wishlist.findIndex(m => m.id === movie.id);
    const wishlistBtn = document.getElementById('wishlistBtn');

    const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];
    if (index > -1) {
        wishlist.splice(index, 1);
        wishlistBtn.innerHTML = dict.add_to_list || '➕ Add to List';
    } else {
        wishlist.push(movie);
        wishlistBtn.innerHTML = dict.remove_from_list || '➖ Remove from List';
    }

    persistWishlist();
    if (isWishlistView) renderMovies();
}

function showWishlistView() {
    isWishlistView = true;
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = '';
    renderMovies();

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close modals on background click
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

async function renderTrailer(movieId) {
    const container = document.getElementById('trailerSection');
    const player = document.getElementById('trailerPlayer');
    try {
        const response = await fetch(`${TMDB_BASE_URL}/${contentType}/${movieId}/videos?api_key=${TMDB_API_KEY}&language=${currentSettings.language}`);
        const data = await response.json();
        const trailer = data.results.find(v => v.type === 'Trailer' && v.site === 'YouTube') ||
            data.results.find(v => v.site === 'YouTube');

        if (trailer && trailer.key) {
            container.style.display = 'block';
            player.innerHTML = `
                <div class="trailer-poster" onclick="window.open('https://www.youtube.com/watch?v=${trailer.key}', '_blank')">
                    <img src="https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg" 
                        onerror="this.src='https://img.youtube.com/vi/${trailer.key}/0.jpg'"
                        alt="Watch Trailer">
                    <div class="play-overlay">
                        <div class="play-icon">▶</div>
                        <span class="play-text">Tıklayın ve YouTube'da İzleyin</span>
                    </div>
                </div>
            `;
        } else {
            container.style.display = 'none';
        }
    } catch (error) {
        container.style.display = 'none';
    }
}

async function renderRecommendations(movieId) {
    const container = document.getElementById('recommendationsSection');
    const grid = document.getElementById('recommendationsGrid');
    try {
        const response = await fetch(`${TMDB_BASE_URL}/${contentType}/${movieId}/recommendations?api_key=${TMDB_API_KEY}&language=${currentSettings.language}`);
        const data = await response.json();
        const items = data.results.slice(0, 8);

        if (items.length > 0) {
            container.style.display = 'block';
            grid.innerHTML = items.map(item => `
                <div class="movie-card" onclick="showMovieDetails(${item.id})">
                    <img src="${item.poster_path ? TMDB_IMG_BASE + item.poster_path : 'https://via.placeholder.com/500x750'}" alt="${item.title || item.name}">
                    <div class="movie-info">
                        <h3 class="movie-title">${item.title || item.name}</h3>
                        <div class="movie-meta">
                            <span class="rating-badge">★ ${item.vote_average.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        } else {
            container.style.display = 'none';
        }
    } catch (error) {
        container.style.display = 'none';
    }
}

async function renderCollection(collectionId) {
    const container = document.getElementById('collectionSection');
    const grid = document.getElementById('collectionGrid');
    const titleElem = document.getElementById('collectionTitle');
    const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];

    try {
        const response = await fetch(`${TMDB_BASE_URL}/collection/${collectionId}?api_key=${TMDB_API_KEY}&language=${currentSettings.language}`);
        const data = await response.json();
        const items = data.parts.slice(0, 8);

        if (items.length > 0) {
            container.style.display = 'block';
            titleElem.textContent = `📦 ${data.name}`;
            grid.innerHTML = items.map(item => `
                <div class="movie-card" onclick="showMovieDetails(${item.id})">
                    <img src="${item.poster_path ? TMDB_IMG_BASE + item.poster_path : 'https://via.placeholder.com/500x750'}" alt="${item.title}">
                    <div class="movie-info">
                        <h3 class="movie-title">${item.title}</h3>
                        <div class="movie-meta">
                            <span class="rating-badge">★ ${item.vote_average.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        } else {
            container.style.display = 'none';
        }
    } catch (error) {
        container.style.display = 'none';
    }
}

async function renderReviews(movieId) {
    const container = document.getElementById('reviewsSection');
    const grid = document.getElementById('reviewsGrid');
    const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];

    try {
        const response = await fetch(`${TMDB_BASE_URL}/${contentType}/${movieId}/reviews?api_key=${TMDB_API_KEY}`);
        const data = await response.json();
        const reviews = data.results.slice(0, 3);

        if (reviews.length > 0) {
            container.style.display = 'block';
            grid.innerHTML = reviews.map((rev, idx) => `
                <div class="review-card">
                    <div class="review-header">
                        <div class="author-info">
                            <div class="author-avatar">${rev.author[0].toUpperCase()}</div>
                            <span class="author-name">${rev.author}</span>
                        </div>
                        <span class="rating-badge">★ ${rev.author_details.rating || 'N/A'}</span>
                    </div>
                    <div class="review-content" id="rev-${idx}">${rev.content}</div>
                    ${rev.content.length > 300 ? `<button class="read-more-btn" onclick="toggleReview(${idx})">${dict.read_more}</button>` : ''}
                </div>
            `).join('');
        } else {
            container.style.display = 'block';
            grid.innerHTML = `<p style="color: var(--text-secondary); opacity: 0.7;">${dict.no_reviews}</p>`;
        }
    } catch (error) {
        container.style.display = 'none';
    }
}

function toggleReview(idx) {
    const content = document.getElementById(`rev-${idx}`);
    const btn = content.nextElementSibling;
    const dict = LANG_DATA[currentSettings.language] || LANG_DATA['en-US'];

    content.classList.toggle('expanded');
    btn.textContent = content.classList.contains('expanded') ? dict.read_less : dict.read_more;
}

document.addEventListener('DOMContentLoaded', init);
