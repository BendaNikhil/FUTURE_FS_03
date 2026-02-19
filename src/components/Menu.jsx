import React from 'react';
import './Menu.css';

const Menu = () => {
    const menuCategories = [
        {
            title: 'Espresso & Coffee',
            items: [
                { name: 'Brew Haven Signature Latte', price: '$5.50', desc: 'Creamy milk, house-made lavender honey' },
                { name: 'Classic Cappuccino', price: '$4.50', desc: 'Equal parts espresso, steamed milk, and foam' },
                { name: 'Nitro Cold Brew', price: '$5.00', desc: 'Smooth, velvety, and naturally sweet' },
                { name: 'Cortado', price: '$4.25', desc: 'Equal parts espresso and warm milk' },
            ]
        },
        {
            title: 'Refreshments',
            items: [
                { name: 'Iced Matcha Latte', price: '$5.75', desc: 'Premium grade matcha, local honey' },
                { name: 'Sparkling Hibiscus Tea', price: '$4.75', desc: 'Refreshing, tart, and floral' },
                { name: 'House Lemonade', price: '$4.25', desc: 'Fresh squeezed with a hint of mint' },
            ]
        },
        {
            title: 'Artisanal Snacks',
            items: [
                { name: 'Avocado Sourdough', price: '$12.00', desc: 'Radish, chili flakes, poached egg' },
                { name: 'Almond Croissant', price: '$4.75', desc: 'Buttery, flaky, and filled with cream' },
                { name: 'Acai Bowl', price: '$10.50', desc: 'Fresh berries, granola, hemp seeds' },
            ]
        }
    ];

    return (
        <section id="menu" className="section-padding menu">
            <div className="container">
                <div className="text-center mb-8">
                    <h4 className="subtitle">Our Menu</h4>
                    <h2>Curated for <span>Connoisseurs</span></h2>
                </div>

                <div className="menu-grid">
                    {menuCategories.map((category, idx) => (
                        <div key={idx} className="menu-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="item-list">
                                {category.items.map((item, iIdx) => (
                                    <div key={iIdx} className="menu-item">
                                        <div className="item-header">
                                            <h5 className="item-name">{item.name}</h5>
                                            <span className="item-price">{item.price}</span>
                                        </div>
                                        <p className="item-desc">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <p className="mb-4 text-muted">Vegan and Gluten-Free options available upon request.</p>
                    <a href="#" className="btn btn-outline">Download Full Menu (PDF)</a>
                </div>
            </div>
        </section>
    );
};

export default Menu;
