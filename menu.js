const searchInput = document.getElementById("search-input");
const menuItems = document.querySelectorAll(".menu-item");
const foodTypeSelect = document.getElementById("food-type");

// Add event listeners to search input and food type select
searchInput.addEventListener("keyup", filterMenuItems);
foodTypeSelect.addEventListener("change", filterMenuItems);

// Function to filter menu items
function filterMenuItems() {
  const searchText = searchInput.value.toLowerCase();
  const selectedFoodType = foodTypeSelect.value.toLowerCase();

  menuItems.forEach((item) => {
    const itemName = item.querySelector("h2").textContent.toLowerCase();
    const itemFoodType = item.dataset.foodType.toLowerCase();

    if (itemName.includes(searchText) && (selectedFoodType === "all" || itemFoodType === selectedFoodType)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}