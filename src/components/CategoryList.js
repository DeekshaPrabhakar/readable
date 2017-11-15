import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CategoryList extends Component {
    render() {
        const categories = this.props.categories
        const activeCategory = this.props.selectedCategory

        return (
            <aside className="categories">
                <h3>Categories</h3>
                <nav>
                    <ul>
                        {categories.map((category) => (
                            <li key={category.path} className={category.name == activeCategory ? "activeCategory" : ""}>
                                <Link to={{
                                    pathname: '/category/' + category.path,
                                    state: { category: category.path }
                                }}>
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        );
    }
}

export default CategoryList;