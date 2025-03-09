<template>
  <div class="news-page">
    <section class="page-header">
      <div class="container">
        <h1>Latest News</h1>
        <p class="lead">Updates, insights, and news from our team</p>
      </div>
    </section>
    
    <section class="news-content">
      <div class="container">
        <div class="news-layout">
          <div class="news-main">
            <article v-for="(article, index) in articles" :key="index" class="news-article">
              <div class="article-image">
                <!-- Placeholder for article image -->
                <div class="placeholder-image" :style="`background-color: ${article.color}; height: 240px;`"></div>
              </div>
              <div class="article-content">
                <div class="article-meta">
                  <span class="article-date">{{ article.date }}</span>
                  <span class="article-category">{{ article.category }}</span>
                </div>
                <h2>{{ article.title }}</h2>
                <p class="article-excerpt">{{ article.excerpt }}</p>
                <router-link :to="`/news/${article.slug}`" class="read-more">Read More</router-link>
              </div>
            </article>
            
            <div class="pagination">
              <button class="pagination-btn disabled">&laquo; Previous</button>
              <div class="pagination-numbers">
                <button class="pagination-number active">1</button>
                <button class="pagination-number">2</button>
                <button class="pagination-number">3</button>
              </div>
              <button class="pagination-btn">Next &raquo;</button>
            </div>
          </div>
          
          <aside class="news-sidebar">
            <div class="sidebar-widget">
              <h3>Categories</h3>
              <ul class="category-list">
                <li><a href="#">Design (5)</a></li>
                <li><a href="#">Development (8)</a></li>
                <li><a href="#">Business (3)</a></li>
                <li><a href="#">Technology (6)</a></li>
                <li><a href="#">Company News (4)</a></li>
              </ul>
            </div>
            
            <div class="sidebar-widget">
              <h3>Recent Posts</h3>
              <ul class="recent-posts">
                <li v-for="(article, index) in articles.slice(0, 3)" :key="index">
                  <a :href="`/news/${article.slug}`">{{ article.title }}</a>
                  <span class="post-date">{{ article.date }}</span>
                </li>
              </ul>
            </div>
            
            <div class="sidebar-widget">
              <h3>Subscribe</h3>
              <p>Get the latest news delivered to your inbox</p>
              <form class="subscribe-form">
                <input type="email" placeholder="Your email" class="form-input">
                <button type="submit" class="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NewsPage',
  setup() {
    const articles = [
      {
        title: 'The Future of Web Design in 2025',
        slug: 'future-of-web-design-2025',
        date: 'March 5, 2025',
        category: 'Design',
        excerpt: 'Exploring the emerging trends and technologies shaping the future of web design in 2025 and beyond.',
        color: '#e6f2ff'
      },
      {
        title: 'How AI is Changing Digital Marketing',
        slug: 'ai-changing-digital-marketing',
        date: 'February 28, 2025',
        category: 'Technology',
        excerpt: 'Artificial intelligence is revolutionizing how brands connect with their audiences. Here\'s what you need to know.',
        color: '#e6ffe6'
      },
      {
        title: 'Accessibility Best Practices for Modern Websites',
        slug: 'accessibility-best-practices',
        date: 'February 15, 2025',
        category: 'Development',
        excerpt: 'Creating websites that are accessible to everyone is not just good ethics—it\'s good business.',
        color: '#ffe6e6'
      },
      {
        title: 'Our Team is Expanding: Meet Our New Developers',
        slug: 'team-expanding-new-developers',
        date: 'February 7, 2025',
        category: 'Company News',
        excerpt: 'We\'re excited to announce the addition of three talented developers to our growing team.',
        color: '#f2e6ff'
      },
      {
        title: 'Case Study: Rebuilding a Finance Platform from the Ground Up',
        slug: 'case-study-finance-platform',
        date: 'January 25, 2025',
        category: 'Business',
        excerpt: 'How we helped a financial services company modernize their digital platform and increase conversion rates.',
        color: '#fff2e6'
      }
    ];
    
    return {
      articles
    };
  }
}
</script>

<style scoped>
.page-header {
  padding: calc(var(--header-height) + var(--spacing-2xl)) 0 var(--spacing-xl);
  background-color: var(--background-alt);
  text-align: center;
}

.page-header .lead {
  max-width: 700px;
  margin: 0 auto;
  color: var(--secondary-color);
}

.news-content {
  padding: var(--spacing-2xl) 0;
}

.news-layout {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
}

.news-main {
  flex: 3;
  min-width: 0;
}

.news-sidebar {
  flex: 1;
  min-width: 250px;
}

.news-article {
  margin-bottom: var(--spacing-2xl);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: var(--spacing-xl);
}

.news-article:last-child {
  border-bottom: none;
}

.article-image {
  margin-bottom: var(--spacing-md);
}

.article-meta {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  color: var(--secondary-color);
  font-size: var(--font-size-sm);
}

.article-category {
  color: var(--accent-color);
}

.article-content h2 {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-2xl);
}

.article-excerpt {
  margin-bottom: var(--spacing-md);
  color: var(--secondary-color);
}

.read-more {
  display: inline-block;
  color: var(--accent-color);
  font-weight: 500;
  position: relative;
}

.read-more::after {
  content: '→';
  display: inline-block;
  margin-left: var(--spacing-xs);
  transition: transform 0.3s ease;
}

.read-more:hover::after {
  transform: translateX(5px);
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-2xl);
}

.pagination-btn {
  background: none;
  border: 1px solid var(--border-color);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: 4px;
  cursor: pointer;
}

.pagination-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  gap: var(--spacing-xs);
}

.pagination-number {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: none;
  cursor: pointer;
}

.pagination-number.active {
  background-color: var(--accent-color);
  color: var(--light-text);
  border-color: var(--accent-color);
}

/* Sidebar Styles */
.sidebar-widget {
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
}

.sidebar-widget:last-child {
  border-bottom: none;
}

.sidebar-widget h3 {
  margin-bottom: var(--spacing-md);
  position: relative;
  padding-bottom: var(--spacing-xs);
}

.sidebar-widget h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--accent-color);
}

.category-list {
  list-style: none;
  padding: 0;
}

.category-list li {
  margin-bottom: var(--spacing-sm);
}

.category-list a {
  color: var(--text-color);
  transition: color 0.3s ease;
}

.category-list a:hover {
  color: var(--accent-color);
}

.recent-posts {
  list-style: none;
  padding: 0;
}

.recent-posts li {
  margin-bottom: var(--spacing-md);
}

.recent-posts a {
  color: var(--text-color);
  display: block;
  font-weight: 500;
  margin-bottom: var(--spacing-xs);
}

.recent-posts a:hover {
  color: var(--accent-color);
}

.post-date {
  font-size: var(--font-size-sm);
  color: var(--secondary-color);
}

.subscribe-form {
  margin-top: var(--spacing-md);
}

.form-input {
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  margin-bottom: var(--spacing-sm);
  font-family: inherit;
  font-size: var(--font-size-sm);
}

.btn-primary {
  background-color: var(--accent-color);
  color: var(--light-text);
  border: none;
  width: 100%;
  padding: var(--spacing-sm);
  border-radius: 4px;
  font-weight: 500;
}

.btn-primary:hover {
  background-color: var(--primary-color);
}

@media (max-width: 992px) {
  .news-layout {
    flex-direction: column;
  }
  
  .news-sidebar {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .article-content h2 {
    font-size: var(--font-size-xl);
  }
}
</style>