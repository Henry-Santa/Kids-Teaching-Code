import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  if (pathSegments.length === 0) return null;

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    
    return {
      label,
      url,
      isLast: index === pathSegments.length - 1
    };
  });

  return (
    <nav aria-label="breadcrumb" className="breadcrumbs-nav">
      <ol 
        className="breadcrumbs-list"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li 
          className="breadcrumbs-item"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link to="/" itemProp="item">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        
        {breadcrumbItems.map((item, index) => (
          <li 
            key={item.url}
            className="breadcrumbs-item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {!item.isLast ? (
              <Link to={item.url} itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={index + 2} />
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;