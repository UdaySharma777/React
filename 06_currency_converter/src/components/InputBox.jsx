import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputId = useId();

    return (
        <div
            className={`bg-white/90 p-4 rounded-xl shadow-md flex flex-col gap-4 ${className}`}
        >
            <div className="flex justify-between items-center">
                <label
                    htmlFor={amountInputId}
                    className="text-gray-600 text-sm"
                >
                    {label}
                </label>

                <p className="text-gray-500 text-sm">
                    Currency Type
                </p>
            </div>

            <div className="flex justify-between items-center gap-4">
                <input
                    id={amountInputId}
                    type="number"
                    className="outline-none w-full bg-transparent text-lg"
                    placeholder="0"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange &&
                        onAmountChange(Number(e.target.value))
                    }
                />

                <select
                    className="rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 outline-none"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e) =>
                        onCurrencyChange &&
                        onCurrencyChange(e.target.value)
                    }
                >
                    {currencyOptions.map((currency) => (
                        <option
                            key={currency}
                            value={currency}
                        >
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;