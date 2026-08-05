import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChnage,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currenyDisable = false,
    className = "",

})