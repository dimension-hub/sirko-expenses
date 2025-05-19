// js/main.js

// URL вашого Apps Script
const TARGET_URL = "https://script.google.com/a/macros/sirko.club/s/AKfycbz9O5IY0xVVulaJTJEw8WN7sD3ywXPro-wwhj9cHq395Ssjr580D_TbFJ3qHywswz87/exec";

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("expense-submit");

  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    // Збір даних з полів
    const data = {
      info:     document.getElementById("expense-info").value.trim(),
      category: document.getElementById("expense-category").value,
      payer:    document.getElementById("expense-payer").value.trim(),
      amount:   document.getElementById("expense-amount").value,
      date:     document.getElementById("expense-date").value,
      notes:    document.getElementById("expense-notes").value.trim()
    };

    // Просте валідовання
    if (!data.info || !data.category || !data.payer || !data.amount || !data.date) {
      alert("Будь ласка, заповніть усі обов'язкові поля.");
      return;
    }

    try {
      await fetch(TARGET_URL, {
        method:  "POST",
        mode:    "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body:    new URLSearchParams(data)
      });

      // Повідомлення користувачу
      alert("Ваші витрати успішно відправлено!");
      // Очистити поля
      Object.values(data).forEach((_, idx) => {
        const el = document.querySelector([
          "#expense-info",
          "#expense-category",
          "#expense-payer",
          "#expense-amount",
          "#expense-date",
          "#expense-notes"
        ][idx]);
        if (el.tagName === "SELECT") el.selectedIndex = 0;
        else el.value = "";
      });
    } catch (err) {
      console.error(err);
      alert("Щось пішло не так. Спробуйте пізніше.");
    }
  });
});
