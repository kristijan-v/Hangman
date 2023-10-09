import styles from "./Keyboard.module.css"

const ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"]
]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className={styles.keyboard}>
      {ROWS.map((row, index) => (
        <div className={styles.row} key={index}>
          {row.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return (
              <button
                onClick={() => addGuessedLetter(key)}
                className={`${styles.btn} ${isActive ? styles.active : ""} ${
                  isInactive ? styles.inactive : ""
                }`}
                disabled={isInactive || isActive || disabled}
                key={key}
              >
                {key}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
