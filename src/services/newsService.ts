interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  url?: string;
  source?: string;
}

interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: {
      name: string;
    };
    content: string;
  }[];
}

const NEWS_API_KEY = '3386aba959694f219dac6e6abaa8d915';
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

// Keywords related to electronics trading and technology
const SEARCH_QUERIES = [
  'electronics trade technology',
  'semiconductor industry',
  'smart appliances IoT',
  'mobile technology market',
  'supply chain electronics'
];

export class NewsService {
  private static instance: NewsService;
  private cachedArticles: NewsArticle[] = [];
  private lastFetch: number = 0;

  private constructor() {}

  public static getInstance(): NewsService {
    if (!NewsService.instance) {
      NewsService.instance = new NewsService();
    }
    return NewsService.instance;
  }

  private async fetchFromNewsAPI(query: string): Promise<NewsArticle[]> {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=10&language=en&apiKey=${NEWS_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`News API error: ${response.status}`);
      }

      const data: NewsAPIResponse = await response.json();
      
      return data.articles
        .filter(article => 
          article.title && 
          article.description && 
          article.urlToImage &&
          !article.title.toLowerCase().includes('[removed]') &&
          article.description.length > 50
        )
        .map((article, index) => ({
          id: `news-${Date.now()}-${index}`,
          title: article.title,
          excerpt: article.description.length > 150 
            ? article.description.substring(0, 147) + '...' 
            : article.description,
          date: article.publishedAt,
          category: this.categorizeArticle(article.title + ' ' + article.description),
          image: article.urlToImage,
          readTime: this.estimateReadTime(article.content || article.description),
          url: article.url,
          source: article.source.name
        }));
    } catch (error) {
      console.error('Error fetching from News API:', error);
      return [];
    }
  }

  private categorizeArticle(content: string): string {
    const contentLower = content.toLowerCase();
    
    if (contentLower.includes('supply chain') || contentLower.includes('logistics')) {
      return 'Supply Chain';
    }
    if (contentLower.includes('sustainability') || contentLower.includes('green') || contentLower.includes('environment')) {
      return 'Sustainability';
    }
    if (contentLower.includes('market') || contentLower.includes('trade') || contentLower.includes('business')) {
      return 'Market Trends';
    }
    if (contentLower.includes('semiconductor') || contentLower.includes('chip') || contentLower.includes('processor')) {
      return 'Technology';
    }
    if (contentLower.includes('iot') || contentLower.includes('smart') || contentLower.includes('connected')) {
      return 'IoT & Smart Tech';
    }
    if (contentLower.includes('mobile') || contentLower.includes('phone') || contentLower.includes('tablet')) {
      return 'Mobile Technology';
    }
    
    return 'Industry News';
  }

  private estimateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content ? content.split(' ').length : 100;
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    return `${minutes} min read`;
  }

  private shouldRefreshCache(): boolean {
    return Date.now() - this.lastFetch > CACHE_DURATION;
  }

  public async getArticles(): Promise<NewsArticle[]> {
    // Return cached articles if they're still fresh
    if (this.cachedArticles.length > 0 && !this.shouldRefreshCache()) {
      return this.cachedArticles.slice(0, 3);
    }

    try {
      console.log('Fetching fresh news articles...');
      
      // Fetch from multiple queries to get diverse content
      const allArticles: NewsArticle[] = [];
      
      for (const query of SEARCH_QUERIES.slice(0, 2)) { // Limit to 2 queries to save API calls
        const articles = await this.fetchFromNewsAPI(query);
        allArticles.push(...articles);
        
        // Small delay between requests to be respectful to the API
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Remove duplicates and get the most recent articles
      const uniqueArticles = allArticles.filter((article, index, array) => 
        array.findIndex(a => a.title === article.title) === index
      );

      // Sort by date (newest first) and take top 6
      const sortedArticles = uniqueArticles
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 6);

      // Cache the results
      this.cachedArticles = sortedArticles;
      this.lastFetch = Date.now();
      
      // Store in localStorage for persistence across browser sessions
      try {
        localStorage.setItem('newsCache', JSON.stringify({
          articles: this.cachedArticles,
          timestamp: this.lastFetch
        }));
      } catch (e) {
        console.warn('Could not cache news articles in localStorage');
      }

      return this.cachedArticles.slice(0, 3);
    } catch (error) {
      console.error('Error fetching news articles:', error);
      
      // Try to load from localStorage cache
      try {
        const cached = localStorage.getItem('newsCache');
        if (cached) {
          const { articles, timestamp } = JSON.parse(cached);
          if (articles && Array.isArray(articles)) {
            this.cachedArticles = articles;
            this.lastFetch = timestamp;
            return articles.slice(0, 3);
          }
        }
      } catch (e) {
        console.warn('Could not load cached articles');
      }
      
      // Return fallback articles if all else fails
      return this.getFallbackArticles();
    }
  }

  public async initializeFromCache(): Promise<void> {
    try {
      const cached = localStorage.getItem('newsCache');
      if (cached) {
        const { articles, timestamp } = JSON.parse(cached);
        if (articles && Array.isArray(articles)) {
          this.cachedArticles = articles;
          this.lastFetch = timestamp;
        }
      }
    } catch (e) {
      console.warn('Could not initialize from cache');
    }
  }

  private getFallbackArticles(): NewsArticle[] {
    return [
      {
        id: 'fallback-1',
        title: 'Global Electronics Trade Shows Strong Growth in 2024',
        excerpt: 'International electronics trading volumes continue to surge as demand for smart devices and IoT solutions expands across emerging markets worldwide.',
        date: '2024-09-20',
        category: 'Market Trends',
        image: '/images/news/electronics-growth.jpg',
        readTime: '3 min read'
      },
      {
        id: 'fallback-2',
        title: 'Supply Chain Innovations Transform Electronics Distribution',
        excerpt: 'New partnerships and logistics technologies are revolutionizing how electronics manufacturers reach global markets, reducing costs and delivery times.',
        date: '2024-09-15',
        category: 'Supply Chain',
        image: '/images/news/supply-chain.jpg',
        readTime: '4 min read'
      },
      {
        id: 'fallback-3',
        title: 'Sustainable Technology Initiatives Drive Industry Change',
        excerpt: 'Electronics companies are embracing eco-friendly manufacturing and carbon-neutral shipping to meet growing environmental responsibility demands.',
        date: '2024-09-10',
        category: 'Sustainability',
        image: '/images/news/green-tech.jpg',
        readTime: '5 min read'
      }
    ];
  }

  public async refreshArticles(): Promise<NewsArticle[]> {
    this.lastFetch = 0; // Force refresh
    return this.getArticles();
  }
}