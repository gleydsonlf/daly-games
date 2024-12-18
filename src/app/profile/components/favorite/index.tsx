"use client";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

export function FavoriteCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("");

  function handleButton() {
    setShowInput(!showInput);

    if (input !== "") {
      setGameName(input);
    }
    setInput("");
  }

  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            type="text"
            className="w-full text-black h-8 rounded-md px-2"
            value={input}
            onChange={event => setInput(event.target.value)}
          />
          <button onClick={handleButton}>
            <FaSave size={24} color="#fff" />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-110 duration-200 transition-all "
          onClick={handleButton}
        >
          <FiEdit size={24} color="#fff" />
        </button>
      )}

      {gameName && (
        <div>
          <span className="text-white">Jogo Favorito:</span>
          <p className="text-semibold text-white">{gameName}</p>
        </div>
      )}

      {!gameName && <p className="font-semibold text-white">Adcionar jogo</p>}
    </div>
  );
}
