const calculatePrice = () => {
    const orderForm = document.getElementById('orderForm');

    if (orderForm.drink.value === "Please Select") {
        alert("Please choose a size.");

        document.getElementsByName('size').forEach(e => e.checked = false);
    } else {
        let price = 0;

        switch (orderForm.drink.value) {
            case "bubble-milktea":
                price = 20;
                break;
            case "iced-latte":
                price = 20;
                break;
            case "orange-coffee":
                price = 20;
                break;
        };

        switch (orderForm.size.value) {
            case "size-small":
                break;
            case "size-medium":
                price += 7;
                break;
            case "size-large":
                price += 12;
                break;
        }

        document.getElementById('price').textContent = price;
    }

}

const validateForm = () => {
    const orderForm = document.getElementById('orderForm');

    // name field validation
    if (orderForm.name.value.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    // drink validation
    if (orderForm.drink.value === "Please Select") {
        alert("Please select a drink first.");
        return false;
    }

    // size validation
    if (
        orderForm.size.value === "" || 
        orderForm.size.value === null ||
        orderForm.size.value === undefined ||
        orderForm.size.value === false
    ) {
        alert("Please select a size.");
        return false;
    }

    // ice validation
    if (
        orderForm.ice.value === "" || 
        orderForm.ice.value === null ||
        orderForm.ice.value === undefined ||
        orderForm.ice.value === false
    ) {
        alert("Please select an ice preference.");
        return false;
    }

    // sweetness validation
    if (
        orderForm.sweetness.value === "" || 
        orderForm.sweetness.value === null ||
        orderForm.sweetness.value === undefined ||
        orderForm.sweetness.value === false
    ) {
        alert("Please select a sweetness level.");
        return false;
    }

    return true;
}

const placeOrder = (event) => {
    event.preventDefault();

    if (validateForm()) {
        const orders = [
            orderForm.name.value,
            orderForm.drink.value,
            orderForm.size.value,
            orderForm.ice.value,
            orderForm.sweetness.value
        ];

        localStorage.setItem("key", orders);

        alert("Order placed successfully! Thank you for your order.");

        document.getElementById("orderForm").reset();

        document.getElementById('price').textContent = 0;
    }
}

const selectTable = (tableNumber) => {
    document.getElementById('selected-table').textContent = "You are selecting: Table " + tableNumber;
}