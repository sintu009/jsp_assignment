document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: 'iPhone', category: 'Mobile', description: 'The latest smartphone from Apple.', imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
        { id: 2, name: 'Banana', category: 'Fruits', description: 'A yellow fruit that grows on trees.', imageUrl: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' },
        { id: 3, name: 'Laptop', category: 'Electronics', description: 'A portable computing device.', imageUrl: 'https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cmljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }
        // Add more products as needed
    ];

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearFilterButton = document.getElementById('clearFilterButton');
    const productContainer = document.getElementById('productContainer');

    function renderProducts(products) {
        productContainer.innerHTML = ''; // Clear previous results
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            const img = document.createElement('img');
            img.src = product.imageUrl;
            img.alt = product.name;

            const productInfo = document.createElement('div');
            productInfo.className = 'product-info';
            productInfo.innerHTML = `<h2>${product.name}</h2><p>${product.category}</p><p>${product.description}</p>`;

            card.appendChild(img);
            card.appendChild(productInfo);

            productContainer.appendChild(card);
        });
    }

    function filterProducts(searchTerm) {
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());
        });
        renderProducts(filteredProducts);
    }

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value;
        filterProducts(searchTerm);
    });

    clearFilterButton.addEventListener('click', () => {
        searchInput.value = '';
        renderProducts(products); // Reset to display all products
    });

    // Initial rendering of all products
    renderProducts(products);
});
