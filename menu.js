/* =====================================================================
   Kosta's Pizza & Seafood — Menu Data
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit when the menu changes.
   Save the file, refresh the website, and the new menu appears.

   Categories below are listed in the order they show on the website.
   To reorder a category, cut its whole block and paste it elsewhere.

   How items work:
     • Simple item:    { name: "Gyro", price: "9.95" }
     • With sub-note:  { name: "Gyro", price: "9.95", desc: "on house-made pita" }
     • Two sizes:      { name: "Cheese", sizes: [
                          { label: "12\"", price: "9.95"  },
                          { label: "16\"", price: "14.75" }
                       ] }
     • Toppings only:  { name: "Pepperoni" }     (no price — used for the
                       Create-Your-Own toppings list)

   Each category supports:
     • subtitle  — small text under the category title
     • notes     — array of small bullet notes shown above the items
     • type      — "toppings" lays the items out as a name-only grid

   Don't worry about the dollar sign — the website adds "$" automatically.
   ===================================================================== */

window.KOSTAS_MENU = [

  /* ---------------- PIZZA & CALZONES ---------------- */

  {
    id: "pizza",
    title: "Pizza",
    subtitle: "100% mozzarella cheese · hand-tossed daily",
    notes: [
      "Make it Sicilian, Stuffed, Deep Dish, or Detroit Style — add $5 (16\")",
      "Gluten-free pizza available as 12\" only · add $3",
      "Pita Pizza 10\" — $6.95 + $0.95 per topping"
    ],
    items: [
      { name: "Cheese",            sizes: [{ label: "12\"", price: "9.95"  }, { label: "16\"", price: "14.75" }] },
      { name: "One Topping",       sizes: [{ label: "12\"", price: "11.50" }, { label: "16\"", price: "16.75" }] },
      { name: "Two Toppings",      sizes: [{ label: "12\"", price: "12.50" }, { label: "16\"", price: "18.75" }] },
      { name: "Three Toppings",    sizes: [{ label: "12\"", price: "13.50" }, { label: "16\"", price: "19.75" }] },
      { name: "Four Toppings",     sizes: [{ label: "12\"", price: "13.50" }, { label: "16\"", price: "19.75" }] },
      { name: "Grilled Chicken",   sizes: [{ label: "12\"", price: "13.50" }, { label: "16\"", price: "19.75" }] },
      { name: "Margherita Pizza",  sizes: [{ label: "12\"", price: "13.50" }, { label: "16\"", price: "19.75" }] },
      { name: "Buffalo Chicken",   sizes: [{ label: "12\"", price: "15.50" }, { label: "16\"", price: "21.50" }] },
      { name: "Shrimp",            sizes: [{ label: "12\"", price: "15.50" }, { label: "16\"", price: "21.50" }] },
      { name: "Vegetarian",        sizes: [{ label: "12\"", price: "15.50" }, { label: "16\"", price: "21.50" }] },
      { name: "Seafood Special",   sizes: [{ label: "12\"", price: "15.50" }, { label: "16\"", price: "21.50" }] },
      { name: "Kosta's Special",   sizes: [{ label: "12\"", price: "17.50" }, { label: "16\"", price: "23.25" }] }
    ]
  },

  {
    id: "stuffed-pizza",
    title: "Stuffed Pizza",
    subtitle: "Available as 12\" or 16\" — 16\" price shown",
    items: [
      { name: "Stuffed Chicken, Bacon & Ranch", price: "26.95", desc: "chicken, bacon, mozzarella, ranch dressing" },
      { name: "Stuffed Italian",                price: "26.95", desc: "sausage, meatball, pepperoni, capicola, romano cheese" },
      { name: "Stuffed Chicago",                price: "26.95", desc: "broccoli, spinach, olives, tomatoes, romano cheese" },
      { name: "Stuffed Pig",                    price: "26.95", desc: "pepperoni, sausage, bacon, ricotta, peppadews" },
      { name: "Stuffed Carbonara",              price: "28.95", desc: "chicken, bacon, mozzarella, carbonara sauce" }
    ]
  },

  {
    id: "calzones",
    title: "Calzones",
    subtitle: "Small 12\" or large 24\"",
    items: [
      { name: "5 Cheese",              sizes: [{ label: "12\"", price: "14.25" }, { label: "24\"", price: "23.95" }] },
      { name: "Ham & Cheese",          sizes: [{ label: "12\"", price: "15.50" }, { label: "24\"", price: "25.95" }] },
      { name: "Sausage & Meatball",    sizes: [{ label: "12\"", price: "15.50" }, { label: "24\"", price: "25.95" }] },
      { name: "Spinach & Feta",        sizes: [{ label: "12\"", price: "15.50" }, { label: "24\"", price: "25.95" }] },
      { name: "Vegetarian",            sizes: [{ label: "12\"", price: "16.95" }, { label: "24\"", price: "26.95" }] },
      { name: "Italian",               sizes: [{ label: "12\"", price: "16.95" }, { label: "24\"", price: "26.95" }] },
      { name: "Chicken Parmesan",      sizes: [{ label: "12\"", price: "16.95" }, { label: "24\"", price: "26.95" }] },
      { name: "Chicken & Broccoli",    sizes: [{ label: "12\"", price: "16.95" }, { label: "24\"", price: "26.95" }] },
      { name: "Steak Bomb",            sizes: [{ label: "12\"", price: "16.95" }, { label: "24\"", price: "26.95" }] },
      { name: "Buffalo Chicken",       sizes: [{ label: "12\"", price: "16.95" }, { label: "24\"", price: "26.95" }] },
      { name: "Chicken Bacon Ranch",   sizes: [{ label: "12\"", price: "18.95" }, { label: "24\"", price: "28.95" }] },
      { name: "Chicken Carbonara",     sizes: [{ label: "12\"", price: "18.95" }, { label: "24\"", price: "28.95" }] }
    ]
  },

  {
    id: "create-own",
    title: "Create Your Own",
    subtitle: "Build your pizza or calzone",
    type: "toppings",
    items: [
      { name: "Pepperoni" },     { name: "Anchovies" },   { name: "Garlic" },
      { name: "Sausage" },       { name: "Mushroom" },    { name: "Tomatoes" },
      { name: "Ham" },           { name: "Feta" },        { name: "Roasted Peppers" },
      { name: "Capicola" },      { name: "Ricotta" },     { name: "Pineapple" },
      { name: "Salami" },        { name: "Chicken" },     { name: "Peppers" },
      { name: "Meatball" },      { name: "Olives" },      { name: "Onions" },
      { name: "Bacon" },         { name: "Jalapeño" },    { name: "Banana Peppers" },
      { name: "Eggplant" },      { name: "Spinach" },     { name: "Peppadews" }
    ]
  },

  /* ---------------- SANDWICHES & WRAPS ---------------- */

  {
    id: "special-wraps",
    title: "Special Wraps",
    subtitle: "Made on our homemade wraps · add bacon to any wrap for $2",
    items: [
      { name: "Baked Eggplant Greek Salad",     price: "9.95"  },
      { name: "BBQ Grilled Chicken",            price: "9.95"  },
      { name: "Grilled Chicken Caesar",         price: "9.95"  },
      { name: "Buffalo Chicken",                price: "9.95"  },
      { name: "Baked Eggplant Melt",            price: "9.95"  },
      { name: "Grilled Chicken Greek",          price: "9.95"  },
      { name: "Grilled Chicken Bomb",           price: "10.25" },
      { name: "Grilled Chicken w/ Cranberries", price: "10.25" },
      { name: "Steak Tips w/ Veggies",          price: "11.50" },
      { name: "Grilled Shrimp w/ Veggies",      price: "11.50" },
      { name: "Shrimp, Scallop or Clam Roll",   price: "11.50" },
      { name: "Seafood Salad Roll",             price: "11.50" },
      { name: "Grilled Chicken Bacon Ranch",    price: "11.95" },
      { name: "Bacon Scallop Wrap",             price: "13.50" }
    ]
  },

  {
    id: "hot-subs",
    title: "Hot Subs",
    subtitle: "All hot subs are toasted · add bacon to any sub for $2",
    items: [
      { name: "Veal Parmesan",                                price: "9.95"  },
      { name: "Baked Eggplant Parmesan",                      price: "9.95"  },
      { name: "Meatball Parmesan",                            price: "9.95"  },
      { name: "Chicken Parmesan",                             price: "9.95"  },
      { name: "Sausage Parmesan w/ Grilled Peppers & Onions", price: "10.95" },
      { name: "Roast Beef & Cheddar w/ Grilled Onions",       price: "10.95" },
      { name: "Chicken Cordon Bleu",                          price: "10.95" },
      { name: "Haddock Sub",                                  price: "10.95" }
    ]
  },

  {
    id: "wraps-cold-subs",
    title: "Wraps, Cold Subs & Pockets",
    subtitle: "Add bacon to any item for $2",
    items: [
      { name: "Italian",                price: "9.95"  },
      { name: "Ham & Cheese",           price: "9.95"  },
      { name: "B.L.T.",                 price: "9.95"  },
      { name: "Turkey",                 price: "9.95"  },
      { name: "Roast Beef",             price: "9.95"  },
      { name: "Special",                price: "9.95"  },
      { name: "Tuna Salad",             price: "9.95"  },
      { name: "Chicken Salad",          price: "9.95"  },
      { name: "Seafood Salad",          price: "10.25" },
      { name: "Cranberry Chicken Salad", price: "10.25" }
    ]
  },

  {
    id: "grill",
    title: "Off the Grill",
    subtitle: "Subs, wraps & gyros · add bacon to any sub for $2",
    items: [
      { name: "Pearl's Jumbo Hot Dog",          price: "6.75",  desc: "add $0.75 per topping" },
      { name: "Vegetarian",                     price: "9.50" },
      { name: "Bacon, Egg & Cheese",            price: "9.50" },
      { name: "Cheeseburger Sub",               price: "9.95",  desc: "two 4 oz Angus beef patties" },
      { name: "Grilled Chicken Caprese Panini", price: "9.95" },
      { name: "Gyro",                           price: "9.95" },
      { name: "Chicken Gyro",                   price: "9.95" },
      { name: "Pastrami",                       price: "9.95" },
      { name: "Grilled Chicken",                price: "9.95" },
      { name: "Chicken Burrito",                price: "9.95" },
      { name: "Steak & Cheese",                 price: "9.95" },
      { name: "Steak & Peppers",                price: "10.25" },
      { name: "Steak & Onions",                 price: "10.25" },
      { name: "Steak & Mushrooms",              price: "10.25" },
      { name: "Steak Bomb",                     price: "10.50" },
      { name: "Steak Tip Burrito",              price: "10.50" },
      { name: "Steak Tip w/ Veggies",           price: "11.50" },
      { name: "Super Steak Bomb",               price: "12.50" }
    ]
  },

  /* ---------------- PLATES & ENTRÉES ---------------- */

  {
    id: "plates",
    title: "Plates",
    subtitle: "Served with salad & fries, or rice",
    items: [
      { name: "Chicken Wings (6)",            price: "13.50" },
      { name: "Chicken Fingers (6)",          price: "13.50" },
      { name: "Grilled Chicken (10)",         price: "13.50" },
      { name: "Buffalo or BBQ Wings (6)",     price: "14.25" },
      { name: "Buffalo Chicken Fingers (6)",  price: "14.25" },
      { name: "Gyro Plate",                   price: "14.25", desc: "with rice & pita" },
      { name: "Caribbean Chicken w/ Rice",    price: "16.25" },
      { name: "Chicken á la Crème w/ Rice",   price: "16.25" },
      { name: "Chicken Souvlaki Plate",       price: "16.25", desc: "with rice & pita" },
      { name: "Steak Tips w/ Veggies & Rice", price: "16.25" },
      { name: "Baked Haddock w/ Rice",        price: "18.95" },
      { name: "Grilled Shrimp w/ Rice",       price: "18.95" },
      { name: "Baked Scallops w/ Rice",       price: "19.95" }
    ]
  },

  {
    id: "seafood",
    title: "Seafood Plates",
    subtitle: "Served with coleslaw, tartar sauce & fries",
    items: [
      { name: "Calamari",             price: "16.25" },
      { name: "Fish & Chips",         price: "17.50" },
      { name: "Shrimp Plate",         price: "18.50" },
      { name: "Clam Plate",           price: "19.95" },
      { name: "Scallop Plate",        price: "19.95" },
      { name: "Coconut Shrimp Plate", price: "19.95" },
      { name: "Fisherman's Plate",    price: "23.95" }
    ]
  },

  {
    id: "pasta",
    title: "Ziti or Linguini",
    subtitle: "Served with our homemade garlic bread",
    items: [
      { name: "Marinara",                  price: "8.95"  },
      { name: "Alfredo",                   price: "9.95"  },
      { name: "Meatball",                  price: "9.95"  },
      { name: "Sausage Parmesan",          price: "13.50" },
      { name: "Baked Eggplant Parmesan",   price: "13.50" },
      { name: "Veal Parmesan",             price: "15.25" },
      { name: "Chicken Parmesan",          price: "15.25" },
      { name: "Sausage Cacciatore",        price: "15.25" },
      { name: "Chicken Cacciatore",        price: "15.25" },
      { name: "Chicken Broccoli",          price: "15.25" },
      { name: "Chicken Florentine",        price: "15.25" },
      { name: "Penne Alla Vodka",          price: "16.95" },
      { name: "Chicken Carbonara",         price: "16.95" },
      { name: "Chicken á la Crème",        price: "16.95" },
      { name: "Steak Tip Carbonara",       price: "17.95" },
      { name: "Shrimp Scampi",             price: "17.95" },
      { name: "Linguini Allo Scoglio",     price: "19.95" }
    ]
  },

  /* ---------------- SALADS & SIDES ---------------- */

  {
    id: "salads",
    title: "Salads",
    subtitle: "Served with homemade pita bread & dressing on the side · add $1 for extra feta",
    items: [
      { name: "Caprese",                          price: "7.75"  },
      { name: "Caesar",                           price: "7.75"  },
      { name: "Garden",                           price: "7.75"  },
      { name: "Greek",                            price: "8.95"  },
      { name: "Spinach & Fresh Mozzarella",       price: "8.95"  },
      { name: "Grilled Chicken",                  price: "11.25" },
      { name: "Baked Chicken",                    price: "11.25" },
      { name: "Grilled Chicken Caesar",           price: "11.25" },
      { name: "Tuna Salad",                       price: "11.25" },
      { name: "Seafood Salad",                    price: "11.25" },
      { name: "Chicken Salad",                    price: "11.25" },
      { name: "Baked Eggplant",                   price: "11.25" },
      { name: "Grilled Chicken w/ Cranberries",   price: "11.25" },
      { name: "Antipasto",                        price: "11.25" },
      { name: "Chef's",                           price: "12.25" },
      { name: "Caribbean Grilled Chicken",        price: "12.25" },
      { name: "Chicken Souvlaki",                 price: "12.25" },
      { name: "Cranberry Chicken Salad",          price: "12.25" },
      { name: "Grilled Chicken Greek",            price: "12.25" },
      { name: "Buffalo Chicken",                  price: "12.25" },
      { name: "Crispy Chicken",                   price: "13.25" },
      { name: "Grilled Shrimp w/ Veggies",        price: "13.25" },
      { name: "Grilled Chicken Bacon Ranch",      price: "13.25" },
      { name: "Steak Tip w/ Veggies",             price: "13.75" },
      { name: "Steak Tip Greek",                  price: "13.75" },
      { name: "Steak Tip w/ Cranberries",         price: "13.75" },
      { name: "Gyro",                             price: "13.75" },
      { name: "Haddock",                          price: "13.75" }
    ]
  },

  {
    id: "wings",
    title: "Wings & Tenders",
    subtitle: "By the order",
    items: [
      { name: "Wings",                sizes: [{ label: "6 pc",  price: "8.75"  }, { label: "12 pc", price: "14.25" }] },
      { name: "Chicken Fingers",      sizes: [{ label: "6 pc",  price: "8.75"  }, { label: "10 pc", price: "14.25" }] },
      { name: "Buffalo or BBQ Wings", sizes: [{ label: "6 pc",  price: "9.25"  }, { label: "12 pc", price: "14.75" }] },
      { name: "Buffalo Fingers",      sizes: [{ label: "6 pc",  price: "10.50" }, { label: "10 pc", price: "16.50" }] }
    ]
  },

  {
    id: "seafood-sides",
    title: "Seafood Appetizers",
    subtitle: "Choose small or large",
    items: [
      { name: "Calamari",              sizes: [{ label: "sm",    price: "13.25" }, { label: "lg",    price: "19.50" }] },
      { name: "Crispy Coconut Shrimp", sizes: [{ label: "8 pc",  price: "13.25" }, { label: "12 pc", price: "19.50" }] },
      { name: "Haddock",               sizes: [{ label: "6 pc",  price: "14.95" }, { label: "10 pc", price: "23.95" }] },
      { name: "Shrimp",                sizes: [{ label: "12 pc", price: "16.75" }, { label: "18 pc", price: "23.95" }] },
      { name: "Scallops",              sizes: [{ label: "sm",    price: "18.25" }, { label: "lg",    price: "23.95" }] },
      { name: "Clams",                 sizes: [{ label: "sm",    price: "18.25" }, { label: "lg",    price: "23.95" }] }
    ]
  },

  {
    id: "fries",
    title: "Fries & Rice",
    subtitle: "The perfect side",
    items: [
      { name: "Rice",                price: "4.50" },
      { name: "French Fries",        price: "4.50" },
      { name: "Spicy Fries",         price: "4.95" },
      { name: "Curly Fries",         price: "5.95" },
      { name: "Onion Rings",         price: "5.95" },
      { name: "Bacon Cheddar Fries", price: "6.95" }
    ]
  },

  {
    id: "apps",
    title: "Apps, Pies & Quesadillas",
    subtitle: "Hot from the oven",
    items: [
      { name: "Mozzarella Sticks (6)",  price: "6.95" },
      { name: "Cheese Quesadilla",      price: "6.95" },
      { name: "Spinach Feta Pie",       price: "7.25" },
      { name: "Cheesy Bread (10)",      price: "8.95" },
      { name: "Chicken Quesadilla",     price: "8.95" },
      { name: "Steak Tip Quesadilla",   price: "9.95" }
    ]
  },

  {
    id: "soup-desserts",
    title: "Soup & Desserts",
    subtitle: "To start and to finish",
    items: [
      { name: "Soup w/ Half Pita",    price: "7.25" },
      { name: "Chips",                price: "2.00" },
      { name: "Cookies",              price: "2.00" },
      { name: "Brownie",              price: "2.00" },
      { name: "Fried Dough Bites",    price: "5.95" },
      { name: "Fried Oreos (6)",      price: "5.95" }
    ]
  }

];
