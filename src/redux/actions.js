export function like(game) {
  return {
    type: "LIKE",
    payload: game
  }
}

export function dislike(game) {
  return {
    type: "DISLIKE",
    payload: game
  }
}