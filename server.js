document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const tabIndex = button.parentElement.getAttribute("data-tab-index");
            const imageRoll = document.querySelector(".image_roll");
            const imageRollHeading = document.querySelector(".image_roll_heading h1");
            const textRoll = document.querySelector(".inr_htm")
            const shopInventoryLink = document.querySelectorAll(".roll_inner a")[0];
            const exploreElectricLink = document.querySelectorAll(".roll_inner a")[1];

            switch (tabIndex) {
                case "0":
                    imageRoll.src = "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/3_2/HP_Tabs_Electric_2160.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg";
                    imageRollHeading.innerText = "The Electrifying Duo";
                    textRoll.innerHTML = "Explore Electric"
                    shopInventoryLink.href = "https://shop.ford.com/inventory/broncosport?intcmp=hp-bb-si-vls";
                    exploreElectricLink.href = "https://shop.ford.com/inventory/bronco/?intcmp=hp-bb-si-vls";
                    break;
                case "1":
                    // Update image, heading, and links for Trucks
                    imageRoll.src = "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/3_2/HP_Tabs_Trucks_2160.jpg/jcr:content/renditions/cq5dam.web.1440.1440.jpeg";
                    imageRollHeading.innerText = "The Pickup's Family";
                    textRoll.innerHTML = "Explore Pickup's";
                    shopInventoryLink.href = "https://shop.ford.com/inventory/broncosport?intcmp=hp-bb-si-vls";
                    exploreElectricLink.href = "https://shop.ford.com/inventory/bronco/?intcmp=hp-bb-si-vls";
                    //css
                    // imageRollHeading.style.marginRight = "px"; 
                    break;
                case "2":
                    // Update image, heading, and links for SUVs
                    imageRoll.src = "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/3_2/HP_Tabs_SUVs_2160.jpg/jcr:content/renditions/cq5dam.web.1440.1440.jpeg";
                    imageRollHeading.innerText = "A SUV For Everyone";
                    textRoll.innerHTML = "Explore SUV's";
                    shopInventoryLink.href = "https://shop.ford.com/inventory/broncosport?intcmp=hp-bb-si-vls";
                    exploreElectricLink.href = "https://shop.ford.com/inventory/bronco/?intcmp=hp-bb-si-vls";
                    break;
                case "3":
                    // Update image, heading, and links for Mustang
                    imageRoll.src = "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/3_2/HP_Tabs_Mustang_2160.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg";
                    imageRollHeading.innerText = "Fast With Mustang";
                    textRoll.innerHTML = "Explore Mustang";
                    shopInventoryLink.href = "https://shop.ford.com/inventory/broncosport?intcmp=hp-bb-si-vls";
                    exploreElectricLink.href = "https://shop.ford.com/inventory/bronco/?intcmp=hp-bb-si-vls";
                    break;
                case "4":
                    // Update image, heading, and links for F-150
                    imageRoll.src = "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/3_2/HP_Tabs_F150_2160.jpg/jcr:content/renditions/cq5dam.web.1440.1440.jpeg";
                    imageRollHeading.innerText = "They Are Leader F150";
                    textRoll.innerHTML = "Explore F-150";
                    shopInventoryLink.href = "https://shop.ford.com/inventory/broncosport?intcmp=hp-bb-si-vls";
                    exploreElectricLink.href = "https://shop.ford.com/inventory/bronco/?intcmp=hp-bb-si-vls";
                    break;
                case "5":
                    // Update image, heading, and links for Bronco
                    imageRoll.src = "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/homepage-re-imagine/3_2/HP_Tabs_Bronco_2160.jpg/jcr:content/renditions/cq5dam.web.2160.2160.jpeg";
                    imageRollHeading.innerText = "Climb The Mountains";
                    textRoll.innerHTML = "Explore Bronco";
                    shopInventoryLink.href = "https://shop.ford.com/inventory/broncosport?intcmp=hp-bb-si-vls";
                    exploreElectricLink.href = "https://shop.ford.com/inventory/bronco/?intcmp=hp-bb-si-vls";
                    break;
                default:
                    console.error("Invalid tab index");
                    break;
            }
        });
    });
});