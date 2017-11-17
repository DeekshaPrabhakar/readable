import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CategoryList extends Component {
    state = {
        categories: this.props.categories
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.categories.length > 0) {
            let categories = nextProps.categories
            this.setState({
                categories: categories
            })
        }
    }

    render() {
        const activeCategory = this.props.selectedCategory
        const categories = this.state.categories ? this.state.categories : []

        return (
            <aside className="categories">
                <h3>Categories</h3>
                <nav>
                    <ul>
                        {categories.map((category) => (
                            <li key={category.path} className={category.name === activeCategory ? "activeCategory" : ""}>
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
function mapStateToProps(state, ownProps) {
    const categories = state.categories
    return { categories: categories };
}

export default connect(mapStateToProps)(CategoryList)