# FreshCart Market POS

A single page Point of Sale (POS) screen for a supermarket checkout. A cashier picks the products a customer is buying, adjusts quantities, sees the totals update straight away, takes payment, and prints a receipt on screen.

I built it for a JavaScript course assignment to practise JavaScript fundamentals, DOM manipulation, and events. It uses only HTML, CSS, and vanilla JavaScript. There are no frameworks, libraries, build tools, or backend.

Live demo: https://mmk119.github.io/Point-of-Sale-POS-/

## Features

Core:

- 12 products in 4 categories (Dairy, Bakery, Fruits, Drinks), shown as tiles you tap to add.
- Adding a product that is already in the order increases its quantity instead of adding a new row.
- Order table with name, quantity, unit price, and amount for each item.
- Plus and minus buttons for quantity. Pressing minus at quantity 1 removes the item.
- A red X button to remove each item, and a message when the order is empty.
- Item count, subtotal, and total to pay update after every change.
- Clear Order and Pay buttons, disabled while the order is empty.
- A receipt after payment, then a fresh order for the next customer.

Extras:

- Search products by name.
- Filter products by category. Search and filter work together.
- 10% discount when the subtotal is over $100, shown as its own line.
- Amount paid and change, shown live as the cashier types. An Exact button fills in the total. Payment is blocked if the amount is less than the total.
- Confirmation before clearing an order.
- Add a custom product with a name, price, and category, with input validation.
- Date and time and a sale number on the receipt.
- Sales history for the current session, newest first, with a session total.

The screen is laid out like a supermarket till: the order table on the left, flat colored product tiles on the right (blue for Dairy, orange for Bakery, green for Fruits, dark blue for Drinks), the amount paid under them, and a wide Pay bar that shows the amount to pay.

The page works on desktop, tablets, and phones. On smaller screens everything stacks in one column: products, then the order, then payment.

Nothing is saved between visits. Refreshing the page starts a new session, which is expected for this assignment.

## How to run

Option 1: download or clone the repository and open `index.html` in any modern browser. No installation or local server is needed.

```
git clone https://github.com/mmk119/Point-of-Sale-POS-.git
```

Option 2: open the live demo link above.

## How to use

1. Tap a product tile to put it in the current order.
2. Use the plus and minus buttons or the red X to change the order.
3. Type the amount the customer paid, or press Exact, then press Pay.
4. Check the receipt, then press New Order for the next customer.

## Folder structure

```
index.html                 the page
favicon.svg                browser tab icon
css/
  base.css                 colors, reset, fonts, flat tiles, tables, form fields
  layout.css               top bar, page layout, responsive rules
  products.css             product tiles and the custom product form
  order.css                order table, totals, payment, action bar
  receipt.css              the receipt
  history.css              sales history table
js/
  config.js                 fixed values such as store name and discount rules
  data/products.js          the product list
  utils/format.js           money, percent, date, and time formatting
  logic/order.js            the current order: add, change, remove, clear
  logic/calculations.js     line totals, subtotal, discount, final total, change
  logic/product-search.js   search by name and filter by category
  logic/custom-product.js   validate and create custom products
  logic/sales-history.js    completed sales for this session
  logic/receipt.js          builds the receipt object for a sale
  ui/header-view.js         shows the store name in the header and tab title
  ui/products-view.js       draws the product tiles
  ui/order-view.js          draws the order table rows and the Clear Order and Pay buttons
  ui/payment-view.js        reads the amount paid, the Exact button, live amount paid and change, payment errors
  ui/totals-view.js         draws the totals and the amount on the Pay button
  ui/receipt-view.js        shows and hides the receipt
  ui/custom-product-form.js reads the custom product form and shows its message
  ui/history-view.js        draws the sales history table
  main.js                   what happens on each click, connecting the events, and starting the app
```

Logic files only work with data and never touch the page. UI files only read from and draw on the page. main.js connects the two: when the cashier does something, a handler function in main.js calls the logic to change the data and then the UI to redraw the page. The scripts are plain script tags loaded in order, so the project runs straight from the file system.

## Author

Mohammad Kassem
