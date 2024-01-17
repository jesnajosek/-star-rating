const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {

    star.addEventListener("click", () => {

        stars.forEach((star, index2) => {

            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")

        });
    });
});


/*1. Selecting Star Elements:

const stars = document.querySelectorAll(".stars i");
This line finds all elements with the class "stars" that contain an "i" element within them. These likely represent the individual stars in a rating system.
2. Attaching Click Listeners:

stars.forEach((star, index1) => { ... });
This loop iterates through each star element.
star.addEventListener("click", () => { ... });
For each star, it adds a click event listener. When a star is clicked, the code within this listener executes.
3. Handling Clicks:

Inside the click listener:
stars.forEach((star, index2) => { ... });
Another loop iterates through all the stars again.
index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
This conditional statement checks if the clicked star's index (index1) is greater than or equal to the current star's index (index2):
If true, it adds the "active" class to the current star.
If false, it removes the "active" class from the current star.
Summary:

When a star is clicked, the code activates (highlights) the clicked star and all stars to its left, while deactivating (unhighlighting) any stars to its right.
This creates a visual effect where users can select a rating by clicking on stars, with the selected stars visually indicating the chosen rating level.
*/