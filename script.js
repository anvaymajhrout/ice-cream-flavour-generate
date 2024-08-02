const iceCreamFlavors = {
    classic: [
        'Vanilla', 'Chocolate', 'Strawberry', 'Mint Chocolate Chip', 'Cookies and Cream',
        'Butter Pecan', 'Rocky Road', 'Neapolitan', 'Coffee', 'French Vanilla'
    ],
    fruity: [
        'Mango', 'Raspberry', 'Lemon', 'Peach', 'Cherry',
        'Blueberry', 'Pineapple', 'Strawberry-Banana', 'Coconut', 'Grape'
    ],
    nutty: [
        'Pistachio', 'Hazelnut', 'Walnut', 'Almond', 'Peanut Butter Swirl',
        'Maple Walnut', 'Chocolate Almond', 'Cashew', 'Pecan Praline', 'Honey Nut Crunch'
    ],
    gourmet: [
        'Tiramisu', 'Salted Caramel', 'Creme Brulee', 'Matcha Green Tea', 'Lavender Honey',
        'Black Sesame', 'Earl Grey Tea', 'Ricotta Cheese', 'Balsamic Fig', 'Rose Petal'
    ],
    chocolate: [
        'Double Chocolate', 'Chocolate Fudge', 'Chocolate Chip', 'Chocolate Mint', 'Chocolate Hazelnut',
        'Chocolate Marshmallow', 'Chocolate Raspberry', 'Chocolate Almond', 'Chocolate Peanut Butter', 'Chocolate Cherry'
    ],
    tropical: [
        'Coconut', 'Mango', 'Passion Fruit', 'Pineapple', 'Guava',
        'Banana', 'Papaya', 'Lychee', 'Dragon Fruit', 'Kiwi'
    ],
    candy: [
        'Bubblegum', 'Cotton Candy', 'M&M', 'Gummy Bear', 'Caramel Swirl',
        'Marshmallow', 'Candy Cane', 'Toffee Crunch', 'Chocolate Chip Cookie Dough', 'Reese\'s Pieces'
    ],
    spicy: [
        'Cinnamon', 'Gingerbread', 'Mexican Hot Chocolate', 'Chili Chocolate', 'Chai Spice',
        'Pumpkin Spice', 'Peppermint', 'Cardamom', 'Saffron', 'Jalapeno Lime'
    ]
};

document.getElementById('generate-btn').addEventListener('click', () => {
    const selectedType = document.getElementById('flavor-type').value;
    const randomIndex = Math.floor(Math.random() * iceCreamFlavors[selectedType].length);
    const selectedFlavor = iceCreamFlavors[selectedType][randomIndex];
    
    document.getElementById('flavor-name').textContent = `${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Ice Cream`;
    document.getElementById('flavor-details').textContent = `Flavor: ${selectedFlavor}`;
});
