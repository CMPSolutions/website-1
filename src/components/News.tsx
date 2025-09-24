import React, { useState, useEffect } from 'react';
import { NewsService } from '../services/newsService';
import '../styles/News.css';

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

const News: React.FC = () => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const newsService = NewsService.getInstance();
        
        // Initialize from cache first (instant load)
        await newsService.initializeFromCache();
        
        // Then fetch fresh articles
        const articles = await newsService.getArticles();
        setNewsArticles(articles);
      } catch (err) {
        console.error('Error loading news:', err);
        setError('Failed to load news articles');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="news">
      <div className="news-container">
        <div className="news-header">
          <div className="section-badge">Latest News</div>
          <h2 className="section-title">
            Industry <span className="title-accent">Insights</span>
          </h2>
          <p className="section-description">
            Stay informed with the latest developments in electronics trading, 
            market trends, and company updates from around the globe.
          </p>
        </div>

        {loading ? (
          <div className="news-loading">
            <div className="loading-spinner"></div>
            <p>Loading latest news...</p>
          </div>
        ) : error ? (
          <div className="news-error">
            <p>Unable to load news at this time. Please try again later.</p>
          </div>
        ) : (
          <div className="news-grid">
            {newsArticles.map((article) => (
              <article key={article.id} className="news-card">
                <div className="news-image">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/news/fallback-news.jpg';
                    }}
                  />
                  <div className="news-category">{article.category}</div>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-date">{formatDate(article.date)}</span>
                    <span className="news-read-time">{article.readTime}</span>
                  </div>
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-excerpt">{article.excerpt}</p>
                  <button 
                    className="news-read-more"
                    onClick={() => article.url && window.open(article.url, '_blank', 'noopener,noreferrer')}
                  >
                    Read More
                    <span className="read-more-arrow">→</span>
                  </button>
                  {article.source && (
                    <div className="news-source">Source: {article.source}</div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="news-cta">
          <button className="view-all-news">View All News</button>
        </div>
      </div>
    </section>
  );
};

export default News;