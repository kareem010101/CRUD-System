let products = [];
let mode = 'create';
let tempIndex;

document.getElementById('submit').onclick = function() {
    let title = document.getElementById('title').value;
    let price = document.getElementById('price').value;
    let taxes = document.getElementById('taxes').value;
    let ads = document.getElementById('ads').value;
    let discount = document.getElementById('discount').value;
    let total = +price + +taxes + +ads - +discount;
    let count = document.getElementById('count').value;
    let category = document.getElementById('category').value;

    let product = {
        title,
        price,
        taxes,
        ads,
        discount,
        total,
        count,
        category
    };

    if (mode === 'create') {
        products.push(product);
    } else {
        products[tempIndex] = product;
        mode = 'create';
        document.getElementById('submit').innerHTML = 'Create';
    }

    clearInputs();
    displayProducts();
};

function clearInputs() {
    document.getElementById('title').value = '';
    document.getElementById('price').value = '';
    document.getElementById('taxes').value = '';
    document.getElementById('ads').value = '';
    document.getElementById('discount').value = '';
    document.getElementById('count').value = '';
    document.getElementById('category').value = '';
    document.getElementById('total').innerHTML = '';
}

function displayProducts() {
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    products.forEach((product, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.taxes}</td>
            <td>${product.ads}</td>
            <td>${product.discount}</td>
            <td>${product.total}</td>
            <td>${product.category}</td>
            <td><button onclick="editProduct(${index})">Update</button></td>
            <td><button onclick="deleteProduct(${index})">Delete</button></td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function editProduct(index) {
    let product = products[index];
    document.getElementById('title').value = product.title;
    document.getElementById('price').value = product.price;
    document.getElementById('taxes').value = product.taxes;
    document.getElementById('ads').value = product.ads;
    document.getElementById('discount').value = product.discount;
    document.getElementById('count').value = product.count;
    document.getElementById('category').value = product.category;
    document.getElementById('submit').innerHTML = 'Update';
    mode = 'update';
    tempIndex = index;
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

function getTotal() {
    let price = document.getElementById('price').value;
    let taxes = document.getElementById('taxes').value;
    let ads = document.getElementById('ads').value;
    let discount = document.getElementById('discount').value;
    let total = +price + +taxes + +ads - +discount;
    document.getElementById('total').innerHTML = total;
}

function searchData(value) {
    let filteredProducts = products.filter(product => product.title.includes(value) || product.category.includes(value));
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    filteredProducts.forEach((product, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.taxes}</td>
            <td>${product.ads}</td>
            <td>${product.discount}</td>
            <td>${product.total}</td>
            <td>${product.category}</td>
            <td><button onclick="editProduct(${index})">Update</button></td>
            <td><button onclick="deleteProduct(${index})">Delete</button></td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function getSearchMood(id) {
    let search = document.getElementById('search');
    if (id === 'searchTitle') {
        search.placeholder = 'Search by Title';
    } else {
        search.placeholder = 'Search by Category';
    }
}

