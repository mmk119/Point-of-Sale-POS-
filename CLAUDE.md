# FreshCart Market POS - Project Rules

These rules apply to every session. Read them before changing anything.

## The project

A single page Point of Sale (POS) screen that a cashier uses at a supermarket checkout. The store is called "FreshCart Market". This is a graded JavaScript course assignment.

The cashier can:
1. See 12 products across 4 categories (Dairy, Bakery, Fruits, Drinks), each with a name, price, and an Add button.
2. Add products to the current order. Adding the same product again increases its quantity instead of creating a new row.
3. See the order list with name, unit price, quantity, and line total for each item.
4. Increase or decrease quantity with + and - buttons. Decreasing at quantity 1 removes the item.
5. Remove an item with a Remove button.
6. See a message when the order is empty.
7. See the subtotal, total item count, and final amount to pay, updating instantly after every change.
8. Clear the whole order with a Clear Order button.
9. Complete the sale with a Pay button that shows a receipt (products, quantities, final amount) and then lets the cashier start a new order.

Bonus features (built later, one at a time):
1. Search products by name.
2. Filter products by category.
3. 10% discount when the subtotal is over $100 (show the discount as its own line).
4. Cashier enters the amount paid and the page shows the change. Block payment if the amount is less than the total.
5. Confirmation before clearing an order.
6. Add a custom product with a name and price, with input validation.
7. Current date and time on the receipt.
8. Sales history of completed sales in this session.

Technologies: HTML, CSS, vanilla JavaScript only. No frameworks, no libraries, no backend.

## Very important context

The author will be asked to explain every function, predict output, fix bugs, and make small changes live without AI. The code must be simple enough to read once and edit by hand. Readability beats cleverness every time.

## Project structure

Each feature lives in its own file. Logic files never touch the DOM. UI files never do calculations or change data directly; they call logic functions.

```
pos-system/
  index.html
  README.md
  CLAUDE.md
  .gitignore
  css/
    base.css            colors as CSS variables, reset, fonts
    layout.css          page layout and responsive rules
    products.css        product cards, search and filter bar
    order.css           order list, quantity buttons, totals
    receipt.css         receipt and sales history
  js/
    config.js           constants: STORE_NAME, DISCOUNT_THRESHOLD, DISCOUNT_RATE, CURRENCY
    data/products.js    the product list (id, name, price, category)
    utils/format.js     formatPrice, formatDateTime
    logic/order.js      the order array and functions to add, increase, decrease, remove, clear
    logic/calculations.js   line total, subtotal, item count, discount, final total, change
    logic/product-search.js search by name and filter by category
    logic/sales-history.js  save and read completed sales
    ui/products-view.js     draw product cards
    ui/order-view.js        draw order rows and the empty message
    ui/totals-view.js       draw subtotal, item count, discount, final amount
    ui/receipt-view.js      show and hide the receipt
    ui/custom-product-form.js   read and validate the custom product form
    ui/history-view.js      draw sales history
    main.js             select buttons, connect events, start the app
```

Scripts load at the end of `<head>` with `defer`, in this order: config, data, utils, logic, ui, main. Use plain script tags, not ES modules, so the page works when opened directly from the file.

## Coding style rules

Write code the way a careful junior developer would write it by hand.

1. Only use what the course has taught: let, const, arrays, objects, if/else, for loops, while, functions with parameters and return, querySelector, getElementById, createElement, append, remove, textContent, classList, addEventListener, template literals.
2. Do NOT use: classes, map, filter, reduce, find, findIndex, forEach on arrays (forEach on a NodeList is fine), destructuring, spread or rest, optional chaining, localStorage, ES modules, async code.
3. Use function declarations (`function addToOrder(productId) { ... }`), not arrow functions.
4. Names must explain themselves: productId, orderItem, lineTotal, subtotal. No x, temp, data, item2, handleStuff. Function names start with a verb: addToOrder, calculateSubtotal, renderOrder.
5. Constants for fixed values (`DISCOUNT_RATE = 0.1`), never magic numbers inside logic.
6. Keep functions short, around 20 lines max, and each one does one job.
7. Event listeners stay tiny. They only call a named function. No logic inside listeners.
8. Identify products by id, never by name.
9. Money: keep numbers as numbers and format with toFixed(2) only when displaying, through formatPrice.
10. Never put user typed text into innerHTML. Use textContent. innerHTML is only allowed for clearing a container (`container.innerHTML = ""`).
11. No inline styles or onclick attributes in HTML. Toggle classes with classList.
12. Select DOM elements once at the top of each UI file and store them in clearly named constants.
13. Comments: only where the reason is not obvious, in short plain English. No comment on every line, no JSDoc blocks, no decorative separator lines, no emojis anywhere in code or UI.
14. Consistent formatting: 2 space indent, double quotes, semicolons, one blank line between functions.
15. Since all scripts share the global scope, every function and variable name must be unique across files.

## General project rules

1. The page must be responsive: two columns (products and order) on desktop, stacked on mobile.
2. Use semantic HTML (header, main, section, button, form, label) and every input needs a label.
3. Validate all user input: no empty names, no negative or zero prices, no non numbers.
4. No errors or warnings in the browser console.
5. Buttons that should not work (like Pay with an empty order) must be disabled.
6. README.md in plain, human English: what the project is, features, how to run it, folder structure, and author "Mohammad Kassem". No emojis, no marketing tone.
7. .gitignore for .DS_Store, .vscode, node_modules, and Thumbs.db.

## Git rules

1. Never run git add, git commit, git push, or change git config. The author does all Git commands.
2. git status and git diff are allowed to check work.
3. At the end of each phase, suggest one short commit message like "feat: add quantity controls to order list". No co-author lines, no "Generated with" lines, no mention of Claude or AI.

## How we work

Build in phases. Do one phase at a time, then stop and wait for the next message. Never start the next phase on your own, and never edit files outside the current phase without explaining why first.

At the end of every phase, give:
1. The files created or changed.
2. Each new function in one plain sentence.
3. Steps to test it in the browser.
4. A suggested commit message.

Phases:
0. Setup: CLAUDE.md, README.md, .gitignore, folder structure, empty files, index.html skeleton with all links.
1. Layout and product list.
2. Add to order and draw the order list.
3. Quantity buttons, remove button, empty order message.
4. Totals: line totals, subtotal, item count, final amount.
5. Clear Order and Pay with receipt and starting a new order.
6. Bonuses, one per step: search, category filter, discount, amount paid and change, clear confirmation, custom product, receipt date and time, sales history.
7. Responsive polish and a full review for bugs, unclear names, and rule breaks.
8. Final README update and GitHub Pages readiness.
